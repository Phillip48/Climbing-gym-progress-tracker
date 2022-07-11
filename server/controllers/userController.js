const { ObjectId } = require('mongoose').Types;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler')
const { User } = require('../models/');




// Get all Users
const getUsers = (req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));

}
// Get a single User
const getSingleUser = (req, res) => {
    User.findOne({ _id: req.params.userId })
        .select('-__v')
        .then((user) =>
            !user
                ? res.status(404).json({ message: 'No user with that ID' })
                : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
}
// update a User
const updateUser = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
    )
        .then((user) =>
            !user
                ? res.status(404).json({ message: 'No user with this id!' })
                : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
}
// Delete a User
const deleteUser = (req, res) => {
    User.findOneAndDelete({ _id: req.params.userId })
        .then(() => res.json({ message: 'User deleted!' }))
        .catch((err) => res.status(500).json(err));
}
//  sign in
const signIn = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    // Check for user email
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})
const loginRequired = (req, res, next) => {
    if (req.user) {
        next();
    } else {

        return res.status(401).json({ message: 'Unauthorized user!!' });
    }
}
const profile = (req, res, next) => {
    if (req.user) {
        res.send(req.user);
        next();
    }
    else {
        return res.status(401).json({ message: 'Invalid token' });
    }
}
const register = asyncHandler(async (req, res) => {
    const { userName, firstName, lastName, email, phoneNumber, password, maxBoulderingGrade,
        maxTopRopingGrade, bio } = req.body

    if (!userName || !maxBoulderingGrade || !maxTopRopingGrade || !firstName || !lastName || !phoneNumber || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // Check if user exists
    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        userName, firstName, lastName, email, phoneNumber, password, maxBoulderingGrade,
        maxTopRopingGrade, bio,
        password: hashedPassword,
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})
// const register = (req, res) => {
//     let newUser = new User(req.body);
//     newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
//     newUser.save(function (err, user) {
//         if (err) {
//             return res.status(400).send({
//                 message: err
//             });
//         } else {
//             user.hash_password = undefined;
//             return res.json(user);
//         }
//     });
// }


const getMe = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
})


// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    getMe,
    register,
    getSingleUser,
    getUsers,
    deleteUser,
    updateUser,
    signIn,
    loginRequired,
    profile
}
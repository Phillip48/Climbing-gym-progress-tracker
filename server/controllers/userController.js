const { ObjectId } = require('mongoose').Types;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models/');

module.exports = {
    // Get all Users
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));

    },
    // Get a single User
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // // create a new user
    // createUser(req, res) {
    //     let newUser = User.create(req.body)
    //         .then((user) => res.json(user))
    //         .catch((err) => {
    //             console.log(err);
    //             return res.status(500).json(err);
    //         });
    //     newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
    // },
    // createUser(req, res) {
    //     User.create(req.body)
    //         .then((dbUserData) => res.json(dbUserData))
    //         .catch((err) => res.status(500).json(err));
    // },
    // update a User
    updateUser(req, res) {
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
    },
    // Delete a User
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then(() => res.json({ message: 'User deleted!' }))
            .catch((err) => res.status(500).json(err));
    },
    //  sign in
    signIn(req, res) {
        User.findOne({
            email: req.body.email
        }, function (err, user) {
            console.log('This is the console log at line 65', user)
            if (err) throw err;
            if (!user || !bcrypt.compare(user.password, req.body.password)) {
                return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
            }
            return res.json({
                token: jwt.sign({ email: user.email, firstName: user.firstName, lastName: user.lastName, _id: user._id, sends: user.sends, projects: user.projects }, 'RESTFULAPIs')
            });
        });
    },
    loginRequired(req, res, next) {
        if (req.user) {
            next();
        } else {

            return res.status(401).json({ message: 'Unauthorized user!!' });
        }
    },
    profile(req, res, next) {
        if (req.user) {
            res.send(req.user);
            next();
        }
        else {
            return res.status(401).json({ message: 'Invalid token' });
        }
    },
    register(req, res) {
        let newUser = new User(req.body);
        newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
        newUser.save(function (err, user) {
            if (err) {
                return res.status(400).send({
                    message: err
                });
            } else {
                user.hash_password = undefined;
                return res.json(user);
            }
        });
        // Send to profile
        // if (req.user) {
        //     res.send(req.user);
        //     next();
        // }
    }
};

const { ObjectId } = require('mongoose').Types;
const { User } = require('../models');

module.exports = {
    // create a new user
    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },
    // update a user

    // delete a user(deleting your own profile)

    // 
};

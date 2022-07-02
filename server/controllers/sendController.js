const { ObjectId } = require('mongoose').Types;
const { Send, User } = require('../models');

module.exports = {
    // create send
    // This might be needed to create a 
    createTag(req, res) {
        Send.create(req.body)
            .then((send) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { sends: send._id } },
                    { new: true }
                );
            })
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'Send created, but found no user with that ID' })
                    : res.json('Created the send 🎉')
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // update send

    // delete send


    // reference
    // getUsers(req, res) {
    //   User.find()
    //     .then((users) => res.json(users))
    //     .catch((err) => res.status(500).json(err));
    // },
};



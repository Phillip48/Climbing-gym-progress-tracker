const { ObjectId } = require('mongoose').Types;
const { Send, User } = require('../models');

module.exports = {
    // Get all sends
    getSends(req, res) {
        Send.find()
            .then((sends) => res.json(sends))
            .catch((err) => res.status(500).json(err));
    },
    // Get a single send
    getSingleSend(req, res) {
        Send.findOne({ _id: req.params.sendId })
            .select('-__v')
            .then((send) =>
                !send
                    ? res.status(404).json({ message: 'No send with that ID' })
                    : res.json(send)
            )
            .catch((err) => res.status(500).json(err));
    },
    // create send
    // This might be needed to create a 
    createSend(req, res) {
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
                        // Should not happen 
                        .json({ message: 'Send created, but found no user with that ID' })
                    : res.json('Created the send 🎉')
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // update a send
    updateSend(req, res) {
        Send.findOneAndUpdate(
            { _id: req.params.sendId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((send) =>
                !send
                    ? res.status(404).json({ message: 'No send with this id!' })
                    : res.json(send)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Delete a send
    deleteSend(req, res) {
        Send.findOneAndDelete({ _id: req.params.sendId })
            .then(() => res.json({ message: 'Send deleted!' }))
            .catch((err) => res.status(500).json(err));
    },

};



const { ObjectId } = require('mongoose').Types;
const { ClimbingSession, User } = require('../models');

module.exports = {
    // Get all climbing Sessions
    getClimbingSessions(req, res) {
        ClimbingSession.find()
            .then((climbingSession) => res.json(climbingSession))
            .catch((err) => res.status(500).json(err));
    },
    // Get a single climbing Session
    getSingleClimbingSession(req, res) {
        ClimbingSession.findOne({ _id: req.params.climbingSessionId })
            .select('-__v')
            .then((climbingSession) =>
                !climbingSession
                    ? res.status(404).json({ message: 'No climbing session with that ID' })
                    : res.json(climbingSession)
            )
            .catch((err) => res.status(500).json(err));
    },
    // create a new climbingSession
    createClimbingSession(req, res) {
        ClimbingSession.create(req.body)
            .then((climbingSession) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { climbingSessions: climbingSession._id } },
                    { new: true }
                );
            })
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        // Should not happen 
                        .json({ message: 'Climbing Session created, but found no user with that ID' })
                    : res.json('Created the climbing session 🎉')
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // update a climbing session
    updateClimbingSession(req, res) {
        ClimbingSession.findOneAndUpdate(
            { _id: req.params.climbingSessionId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((climbingSession) =>
                !climbingSession
                    ? res.status(404).json({ message: 'No climbing session with this id!' })
                    : res.json(climbingSession)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Delete a climbing session
    deleteClimbingSession(req, res) {
        ClimbingSession.findOneAndDelete({ _id: req.params.climbingSessionId })
            .then(() => res.json({ message: 'Climbing session deleted!' }))
            .catch((err) => res.status(500).json(err));
    },

};

const { ObjectId } = require('mongoose').Types;
const { ClimbingSession, User } = require('../models');


// Get all climbing Sessions
const getClimbingSessions = asyncHandler(async (req, res) => {
    ClimbingSession.find()
        .then((climbingSession) => res.json(climbingSession))
        .catch((err) => res.status(500).json(err));
})
// Get a single climbing Session
const getSingleClimbingSession = asyncHandler(async (req, res) => {
    ClimbingSession.findOne({ _id: req.params.climbingSessionId })
        .select('-__v')
        .then((climbingSession) =>
            !climbingSession
                ? res.status(404).json({ message: 'No climbing session with that ID' })
                : res.json(climbingSession)
        )
        .catch((err) => res.status(500).json(err));
})
// create a new climbingSession
const createClimbingSession = asyncHandler(async (req, res) => {
    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Make sure the logged in user matches
    if (req.user.id !== req.params.userId) {
        res.status(401)
        throw new Error('User not authorized')
    }
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
})
// update a climbing session
const updateClimbingSession = asyncHandler(async (req, res) => {
    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Make sure the logged in user matches
    if (req.user.id !== req.params.userId) {
        res.status(401)
        throw new Error('User not authorized')
    }
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
})
// Delete a climbing session
const deleteClimbingSession = asyncHandler(async (req, res) => {
    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Make sure the logged in user matches
    if (req.user.id !== req.params.userId) {
        res.status(401)
        throw new Error('User not authorized')
    }
    ClimbingSession.findOneAndDelete({ _id: req.params.climbingSessionId })
        .then(() => res.json({ message: 'Climbing session deleted!' }))
        .catch((err) => res.status(500).json(err));
})

module.exports = {
    getClimbingSessions,
    getSingleClimbingSession,
    updateClimbingSession,
    deleteClimbingSession,
    createClimbingSession
};

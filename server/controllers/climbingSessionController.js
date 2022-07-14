const { ObjectId } = require('mongoose').Types;
const { ClimbingSession, User } = require('../models');
const asyncHandler = require('express-async-handler')

// Get all climbing Sessions
const getClimbingSessions = asyncHandler(async (req, res) => {
    const climbingSession = await ClimbingSession.find({ user: req.user.id })

    res.status(200).json(climbingSession)
})
// Get a single climbing Session
const getSingleClimbingSession = asyncHandler(async (req, res) => {
    const climbingSession = await ClimbingSession.findById(req.params.id)
    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Make sure the logged in user matches
    if (climbingSession.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    ClimbingSession.findOne({ _id: req.params.id })
        .select('-__v')
        .then((climbingSession) =>
            !climbingSession
                ? res.status(404).json({ message: 'No climbing session with that ID' })
                : res.json(climbingSession)
        )
        .catch((err) => res.status(500).json(err));
})
// Get a single climbing Session
const getClimbingSessionDate = asyncHandler(async (req, res) => {
    ClimbingSession.findOne({ createdAt: req.body.createdAt })
        .select('-__v')
        .then((climbingSession) =>
            !climbingSession
                ? res.status(404).json({ message: 'No climbing session with that date' })
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
    // if (req.user.id !== req.params.userId) {
    //     res.status(401)
    //     throw new Error('User not authorized')
    // }
    if (!req.body.durationMinutes || !req.body.numberOfSends || !req.body.indoorOutdoor || !req.body.totalAttempts || !req.body.rating) {
        res.status(400)
        throw new Error('Please add the needed fields')
    }

    const climbingSession = await ClimbingSession.create({
        durationMinutes: req.body.durationMinutes,
        numberOfSends: req.body.numberOfSends,
        indoorOutdoor: req.body.indoorOutdoor,
        totalAttempts: req.body.totalAttempts,
        climbingNotes: req.body.climbingNotes,
        rating: req.body.rating,
        user: req.user.id,
    })

    // send._id.toString()
    // sends: send._id.toString()
    const updatedUser = await User.findByIdAndUpdate(
        { _id: req.user.id },
        { $addToSet: { climbingSessions: climbingSession } },
        { runValidators: true, new: true }
    );
    res.status(200).json(updatedUser)
})

// update a climbing session
const updateClimbingSession = asyncHandler(async (req, res) => {
    const climbingSessionVar = await ClimbingSession.findById(req.params.id)
    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Make sure the logged in user matches
    if (climbingSessionVar.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    ClimbingSession.findOneAndUpdate(
        { _id: req.params.id },
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
    const climbingSessionVar = await ClimbingSession.findById(req.params.id)
    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Make sure the logged in user matches
    if (climbingSessionVar.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    ClimbingSession.findOneAndDelete({ _id: req.params.id })
        .then(() => res.json({ message: 'Climbing session deleted!' }))
        .catch((err) => res.status(500).json(err));
    const updatedUser = await User.findByIdAndUpdate(
        { _id: req.user.id },
        { $pull: { climbingSessions: req.params.id } },
        { runValidators: true, new: true }
    );
    // res.status(200).json(updatedUser)
})

module.exports = {
    getClimbingSessions,
    getSingleClimbingSession,
    updateClimbingSession,
    getClimbingSessionDate,
    deleteClimbingSession,
    createClimbingSession
};

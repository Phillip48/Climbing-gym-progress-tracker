const { ObjectId } = require('mongoose').Types;
const { TrainingSession, User } = require('../models');
const asyncHandler = require('express-async-handler')

// Get all TrainingSession
const getTrainingSessions = asyncHandler(async (req, res) => {
    TrainingSession.find()
        .then((trainingSession) => res.json(trainingSession))
        .catch((err) => res.status(500).json(err));
})
// Get a single TrainingSession
const getSingleTrainingSession = asyncHandler(async (req, res) => {
    TrainingSession.findOne({ _id: req.params.trainingSessionId })
        .select('-__v')
        .then((trainingSession) =>
            !trainingSession
                ? res.status(404).json({ message: 'No training session with that ID' })
                : res.json(trainingSession)
        )
        .catch((err) => res.status(500).json(err));
})
// create a new TrainingSession
const createTrainingSession = asyncHandler(async (req, res) => {
    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Make sure the logged in user matches
    // console.log('userid', req.user.id)
    // console.log('params id', req.params.id)
    if (req.user.id !== req.params.userId) {
        res.status(401)
        throw new Error('User not authorized')
    }

    // TrainingSession.create(req.body)
    //     .then((trainingSession) => {
    //         return User.findOneAndUpdate(
    //             { _id: req.body.userId },
    //             { $addToSet: { trainingSessions: trainingSession._id } },
    //             { new: true }
    //         );
    //     })
    //     .then((user) =>
    //         !user
    //             ? res
    //                 .status(404)
    //                 // Should not happen 
    //                 .json({ message: 'training Session created, but found no user with that ID' })
    //             : res.json('Created the training session 🎉')
    //     )
    //     .catch((err) => {
    //         console.log(err);
    //         res.status(500).json(err);
    //     });
})
// update a TrainingSession
const updateTrainingSession = asyncHandler(async (req, res) => {
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
    TrainingSession.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { runValidators: true, new: true }
    )
        .then((trainingSession) =>
            !trainingSession
                ? res.status(404).json({ message: 'No Training Session with this id!' })
                : res.json(trainingSession)
        )
        .catch((err) => res.status(500).json(err));
    // TrainingSession.findOneAndUpdate(
    //     { _id: req.params.trainingSessionId },
    //     { $set: req.body },
    //     { runValidators: true, new: true }
    // )
    //     .then((trainingSession) =>
    //         !trainingSession
    //             ? res.status(404).json({ message: 'No training session with this id!' })
    //             : res.json(trainingSession)
    //     )
    //     .catch((err) => res.status(500).json(err));
})
// Delete a TrainingSession
const deleteTrainingSession = asyncHandler(async (req, res) => {
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
    TrainingSession.findOneAndDelete({ _id: req.params.trainingSessionId })
        .then(() => res.json({ message: 'Training session deleted!' }))
        .catch((err) => res.status(500).json(err));
})


module.exports = {
    getSingleTrainingSession,
    getTrainingSessions,
    updateTrainingSession,
    createTrainingSession,
    deleteTrainingSession
};

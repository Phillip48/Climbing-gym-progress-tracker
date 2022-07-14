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
    if (req.user.id !== req.params.userId) {
        res.status(401)
        throw new Error('User not authorized')
    }

    if (!req.body.hangBoard || !req.body.sprayBoard || !req.body.rating
        || !req.body.moonBoard || !req.body.kelterBoard || !req.body.liftWeights || !req.body.trainingNotes) {
        res.status(400)
        throw new Error('Please add the needed fields')
    }

    const trainingSession = await TrainingSession.create({
        hangBoard: req.body.hangBoard,
        hangBoardNotes: req.body.hangBoardNotes,
        sprayBoard: req.body.sprayBoard,
        moonBoard: req.body.moonBoard,
        kelterBoard: req.body.kelterBoard,
        trainingBoardNotes: req.body.trainingBoardNotes,
        liftWeights: req.body.liftWeights,
        weightSets: req.body.weightSets,
        weightReps: req.body.weightReps,
        weightLBS: req.body.weightLBS,
        trainingNotes: req.body.trainingNotes,
        rating: req.body.rating,
        user: req.params.userId,
    })
    const updatedUser = await User.findByIdAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { trainingSessions: trainingSession } },
        { runValidators: true, new: true }
    );

    res.status(200).json(updatedUser)

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
    TrainingSession.findOneAndDelete({ _id: req.params.id })
        .then(() => res.json({ message: 'Training session deleted!' }))
        .catch((err) => res.status(500).json(err));
    const updatedUser = await User.findByIdAndUpdate(
        { _id: req.params.userId },
        { $pull: { trainingSessions: req.params.id } },
        { runValidators: true, new: true }
    );
    // res.status(200).json(updatedUser)
})


module.exports = {
    getSingleTrainingSession,
    getTrainingSessions,
    updateTrainingSession,
    createTrainingSession,
    deleteTrainingSession
};

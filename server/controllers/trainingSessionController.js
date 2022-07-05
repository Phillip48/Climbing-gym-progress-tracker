const { ObjectId } = require('mongoose').Types;
const { TrainingSession, User } = require('../models');

module.exports = {
    // Get all TrainingSession
    getTrainingSessions(req, res) {
        TrainingSession.find()
            .then((trainingSession) => res.json(trainingSession))
            .catch((err) => res.status(500).json(err));
    },
    // Get a single TrainingSession
    getSingleTrainingSession(req, res) {
        TrainingSession.findOne({ _id: req.params.trainingSessionId })
            .select('-__v')
            .then((trainingSession) =>
                !trainingSession
                    ? res.status(404).json({ message: 'No training session with that ID' })
                    : res.json(trainingSession)
            )
            .catch((err) => res.status(500).json(err));
    },
    // create a new TrainingSession
    createTrainingSession(req, res) {
        TrainingSession.create(req.body)
            .then((trainingSession) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { trainingSessions: trainingSession._id } },
                    { new: true }
                );
            })
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        // Should not happen 
                        .json({ message: 'training Session created, but found no user with that ID' })
                    : res.json('Created the training session 🎉')
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // update a TrainingSession
    updateTrainingSession(req, res) {
        TrainingSession.findOneAndUpdate(
            { _id: req.params.trainingSessionId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((trainingSession) =>
                !trainingSession
                    ? res.status(404).json({ message: 'No training session with this id!' })
                    : res.json(trainingSession)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Delete a TrainingSession
    deleteTrainingSession(req, res) {
        TrainingSession.findOneAndDelete({ _id: req.params.trainingSessionId })
            .then(() => res.json({ message: 'Training session deleted!' }))
            .catch((err) => res.status(500).json(err));
    },

};

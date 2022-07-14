const { Schema, model } = require('mongoose');

// Schema to create session model
const TrainingSessionSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        // True or false to see what the user did
        hangBoard: {
            type: Boolean,
            required: true,
            default: false,
        },
        hangBoardNotes: {
            type: String,
            default: 'No hang board notes were made',
            max_length: 800,
        },
        // True or false to see what the user did
        sprayBoard: {
            type: Boolean,
            required: true,
            default: false,
        },
        moonBoard: {
            type: Boolean,
            required: true,
            default: false,
        },
        kelterBoard: {
            type: Boolean,
            required: true,
            default: false,
        },
        trainingBoardNotes: {
            type: String,
            default: 'No training notes were made',
            max_length: 800,
        },
        // True or false to see what the user did
        liftWeights: {
            type: Boolean,
            required: true,
            default: false,
        },
        weightSets: {
            type: Number,
            default: null,
            max_length: 40,
        },
        weightReps: {
            type: String,
            default: null,
            max_length: 20,
        },
        weightLBS: {
            type: Number,
            default: null,
        },
        trainingNotes: {
            type: String,
            default: 'No training notes were made',
            max_length: 800,
        },
        rating: {
            // Out of 10
            type: Number,
            required: true,
            min: 1,
            max: 10,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const TrainingSession = model('trainingSession', TrainingSessionSchema);

module.exports = TrainingSession;

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
        // True or false to see what the user did
        // Spray board, moon board etc...
        trainBoard: {
            type: Boolean,
            required: true,
            default: false,
        },
        // True or false to see what the user did
        liftWeights: {
            type: Boolean,
            required: true,
            default: false,
        },
        trainingNotes: {
            type: String,
            max_length: 800,
        },
        notes: {
            type: String,
            max_length: 800,
        },
        rating: {
            // Out of 10
            type: String,
            required: true,
            min: 1,
            max: 10,
        },
        sends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'send',
            },
        ],
        projects: [
            {
                type: Schema.Types.ObjectId,
                ref: 'project',
            },
        ],
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

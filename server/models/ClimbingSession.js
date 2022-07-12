const { Schema, model } = require('mongoose');

// Schema to create session model
const ClimbingSessionSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        numberOfSends: {
            type: Number,
            required: true,
        },
        indoorOutdoor: {
            type: String,
            min_length: 6,
            max_length: 7,
        },
        totalAttempts: {
            // Not required, Tries in total session
            type: Number,
            default: null,
        },
        climbingNotes: {
            type: String,
            max_length: 800,
        },
        // notes: {
        //     type: String,
        //     max_length: 800,
        // },
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

const ClimbingSession = model('climbingSession', ClimbingSessionSchema);

module.exports = ClimbingSession;

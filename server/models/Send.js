const { Schema, model } = require('mongoose');

// Schema to create Send model
// A probelm you sent
const sendSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        actualGrade: {
            type: String,
            required: true,
        },
        feltGrade: {
            type: String,
            required: true,
        },
        notes: {
            type: String,
            default: 'No notes were made',
            max_length: 800,
        },
        sent: {
            type: Boolean,
            required: true,
        },
        totalAttempts: {
            type: Number,
            required: true,
        },
        totalSessions: {
            type: Number,
            required: true,
        },
        climbingSession: {
            type: Schema.Types.ObjectId,
            ref: 'ClimbingSession',
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

const Send = model('send', sendSchema);

module.exports = Send;

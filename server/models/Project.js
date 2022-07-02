const { Schema, model } = require('mongoose');

// Schema to create Project model
// Project is something that takes multiple sessions to send
const sendSchema = new Schema(
    {
        actualGrade: {
            type: String,
            required: true,
        },
        feltGrade: {
            type: String,
            required: true,
        },
        Notes: {
            type: String,
            required: true,
        },
        totalSessions: {
            type: Number,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        sendProject: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const User = model('send', sendSchema);

module.exports = User;

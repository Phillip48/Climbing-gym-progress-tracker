const { Schema, model } = require('mongoose');

// Schema to create Send model
// A probelm you sent
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
        sent: {
            type: Boolean,
            required: true,
        },
        // sendProject: {
        //     type: Boolean,
        //     required: true,
        // },
        totalSessions: {
            type: Number,
            required: true,
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

const User = model('send', sendSchema);

module.exports = User;

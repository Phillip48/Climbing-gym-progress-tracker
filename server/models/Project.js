const { Schema, model } = require('mongoose');

// Schema to create Project model
// Project is something that takes multiple sessions to send
const projectSchema = new Schema(
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

const Project = model('project', projectSchema);

module.exports = Project;

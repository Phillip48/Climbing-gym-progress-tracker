const { Schema, model } = require('mongoose');

const date = new Date;

let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let format = month + '/' + day + '/' + year;
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
            default: "No notes were made",
            max_length: 800,
        },
        totalAttempts: {
            type: Number,
            required: true,
        },
        totalSessions: {
            type: Number,
            required: true,
        },
        sendProject: {
            type: Boolean,
            required: true,
            default: false,
        },
        createdAt: {
            type: String,
            default: format
        },
        videoOrImg:
        {
            data: Buffer,
            contentType: String
        }
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const Project = model('project', projectSchema);

module.exports = Project;

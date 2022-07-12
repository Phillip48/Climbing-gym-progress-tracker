const { ObjectId } = require('mongoose').Types;
const { Project, User } = require('../models');
const asyncHandler = require('express-async-handler')

// Get all projects
const getProjects = asyncHandler(async (req, res) => {
    Project.find()
        .then((project) => res.json(project))
        .catch((err) => res.status(500).json(err));
})
// Get a single projects
const getSingleProject = asyncHandler(async (req, res) => {
    Project.findOne({ _id: req.params.projectId })
        .select('-__v')
        .then((project) =>
            !project
                ? res.status(404).json({ message: 'No project with that ID' })
                : res.json(project)
        )
        .catch((err) => res.status(500).json(err));
})
// create a new projects
const createProject = asyncHandler(async (req, res) => {
    if (!req.body.actualGrade || !req.body.feltGrade || !req.body.notes || !req.body.sendProject || !req.body.totalSessions) {
        res.status(400)
        throw new Error('Please add the needed fields')
    }
    const project = await Project.create({
        actualGrade: req.body.actualGrade,
        feltGrade: req.body.feltGrade,
        notes: req.body.notes,
        sendProject: req.body.sendProject,
        totalSessions: req.body.totalSessions,
        user: req.params.id,
    })
    res.status(200).json(project)
    // Project.create(req.body)
    //     .then((send) => {
    //         return User.findOneAndUpdate(
    //             { _id: req.body.userId },
    //             { $addToSet: { projects: project._id } },
    //             { new: true }
    //         );
    //     })
    //     .then((user) =>
    //         !user
    //             ? res
    //                 .status(404)
    //                 // Should not happen 
    //                 .json({ message: 'Project created, but found no user with that ID' })
    //             : res.json('Created the Project 🎉')
    //     )
    //     .catch((err) => {
    //         console.log(err);
    //         res.status(500).json(err);
    //     });
})
// update a projects
const updateProject = asyncHandler(async (req, res) => {
    Project.findOneAndUpdate(
        { _id: req.params.projectId },
        { $set: req.body },
        { runValidators: true, new: true }
    )
        .then((project) =>
            !project
                ? res.status(404).json({ message: 'No project with this id!' })
                : res.json(project)
        )
        .catch((err) => res.status(500).json(err));
})
// Delete a projects
const deleteProject = asyncHandler(async (req, res) => {
    Project.findOneAndDelete({ _id: req.params.projectId })
        .then(() => res.json({ message: 'Project deleted!' }))
        .catch((err) => res.status(500).json(err));
})


// reference
// getUsers(req, res) {
//   User.find()
//     .then((users) => res.json(users))
//     .catch((err) => res.status(500).json(err));
// },
module.exports = {
    getProjects,
    getSingleProject,
    createProject,
    updateProject,
    deleteProject
};

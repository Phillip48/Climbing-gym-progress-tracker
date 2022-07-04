const { ObjectId } = require('mongoose').Types;
const { Project } = require('../models');

module.exports = {
    // Get all projects
    getProjects(req, res) {
        Project.find()
            .then((project) => res.json(project))
            .catch((err) => res.status(500).json(err));
    },
    // Get a single projects
    getSingleProject(req, res) {
        Project.findOne({ _id: req.params.projectId })
            .select('-__v')
            .then((project) =>
                !project
                    ? res.status(404).json({ message: 'No project with that ID' })
                    : res.json(project)
            )
            .catch((err) => res.status(500).json(err));
    },
    // create a new projects
    createProject(req, res) {
        Project.create(req.body)
            .then((send) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { projects: project._id } },
                    { new: true }
                );
            })
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        // Should not happen 
                        .json({ message: 'Project created, but found no user with that ID' })
                    : res.json('Created the Project 🎉')
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // update a projects
    updateProject(req, res) {
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
    },
    // Delete a projects
    deleteProject(req, res) {
        Project.findOneAndDelete({ _id: req.params.projectId })
            .then(() => res.json({ message: 'Project deleted!' }))
            .catch((err) => res.status(500).json(err));
    },


    // reference
    // getUsers(req, res) {
    //   User.find()
    //     .then((users) => res.json(users))
    //     .catch((err) => res.status(500).json(err));
    // },
};

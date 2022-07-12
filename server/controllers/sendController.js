const { ObjectId } = require('mongoose').Types;
const { Send, User } = require('../models');
const asyncHandler = require('express-async-handler')

// Get all sends
const getSends = asyncHandler(async (req, res) => {
    Send.find()
        .then((sends) => res.json(sends))
        .catch((err) => res.status(500).json(err));
})
// Get a single send
const getSingleSend = asyncHandler(async (req, res) => {
    Send.findOne({ _id: req.params.id })
        .select('-__v')
        .then((send) =>
            !send
                ? res.status(404).json({ message: 'No send with that ID' })
                : res.json(send)
        )
        .catch((err) => res.status(500).json(err));
})
// creates a send
const createSend = asyncHandler(async (req, res) => {
    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Make sure the logged in user matches
    // console.log('userid', req.user.id)
    // console.log('params id', req.params.id)
    if (req.user.id !== req.params.userId) {
        res.status(401)
        throw new Error('User not authorized')
    }

    if (!req.body.actualGrade || !req.body.totalAttempts
        || !req.body.feltGrade || !req.body.notes || !req.body.sent || !req.body.totalSessions) {
        res.status(400)
        throw new Error('Please add the needed fields')
    }

    const send = await Send.create({
        actualGrade: req.body.actualGrade,
        feltGrade: req.body.feltGrade,
        notes: req.body.notes,
        sent: req.body.sent,
        totalAttempts: req.body.totalAttempts,
        totalSessions: req.body.totalSessions,
        user: req.params.id,
    })
    res.status(200).json(send)
})
// update a send
const updateSend = asyncHandler(async (req, res) => {
    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Make sure the logged in user matches
    if (req.user.id !== req.params.userId) {
        res.status(401)
        throw new Error('User not authorized')
    }
    Send.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { runValidators: true, new: true }
    )
        .then((send) =>
            !send
                ? res.status(404).json({ message: 'No send with this id!' })
                : res.json(send)
        )
        .catch((err) => res.status(500).json(err));
})
// Delete a send
const deleteSend = asyncHandler(async (req, res) => {
    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Make sure the logged in user matches
    if (req.user.id !== req.params.userId) {
        res.status(401)
        throw new Error('User not authorized')
    }
    Send.findOneAndDelete({ _id: req.params.id })
        .then(() => res.json({ message: 'Send deleted!' }))
        .catch((err) => res.status(500).json(err));
})

module.exports = {
    deleteSend,
    updateSend,
    createSend,
    getSends,
    getSingleSend
};



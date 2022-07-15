const { ObjectId } = require('mongoose').Types;
const { Send, User } = require('../models');
const asyncHandler = require('express-async-handler')

// Get all sends
const getSends = asyncHandler(async (req, res) => {
    const sends = await Send.find({ user: req.user.id })

    res.status(200).json(sends)
})
// Get a single send
const getSingleSend = asyncHandler(async (req, res) => {
    const send = await Send.findById(req.params.id)
    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Make sure the logged in user matches
    if (send.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    Send.findOne({ _id: req.params.id })
        .select('-__v')
        .then((send) =>
            !send
                ? res.status(404).json({ message: 'No send with that ID' })
                : res.json(send)
        )
        .catch((err) => res.status(500).json(err));
})
// Get a single send
const getSendDate = asyncHandler(async (req, res) => {
    Send.find({ actualGrade: req.body.actualGrade, createdAt: req.body.createdAt })
        .select('-__v')
        .then((send) =>
            !send
                ? res.status(404).json({ message: 'No send with that date' })
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

    if (!req.body.actualGrade || !req.body.totalAttempts || !req.body.feltGrade || !req.body.sent || !req.body.totalSessions) {
        res.status(400)
        throw new Error('Please add the needed fields')
    }
    const sendObj = await Send.create({
        actualGrade: req.body.actualGrade,
        feltGrade: req.body.feltGrade,
        notes: req.body.notes,
        sent: req.body.sent,
        totalAttempts: req.body.totalAttempts,
        totalSessions: req.body.totalSessions,
        videoOrImg: req.body.videoOrImg,
        user: req.user.id,
    })

    const updatedUser = await User.findByIdAndUpdate(
        { _id: req.user.id },
        { $addToSet: { sends: sendObj } },
        { runValidators: true, new: true }
    );

    res.status(200).json(updatedUser)
})

// update a send
const updateSend = asyncHandler(async (req, res) => {
    const send = await Send.findById(req.params.id)
    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Make sure the logged in user matches
    if (send.user.toString() !== req.user.id) {
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
    const send = await Send.findById(req.params.id)
    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Make sure the logged in user matches
    if (send.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    Send.findOneAndDelete({ _id: req.params.id })
        .then(() => res.json({ message: 'Send deleted!' }))
        .catch((err) => res.status(500).json(err));

    const updatedUser = await User.findByIdAndUpdate(
        { _id: req.user.id },
        { $pull: { sends: req.params.id } },
        { runValidators: true, new: true }
    );
    // res.status(200).json(updatedUser)
})

module.exports = {
    deleteSend,
    updateSend,
    createSend,
    getSends,
    getSingleSend,
    getSendDate
};



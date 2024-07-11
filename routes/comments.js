const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// Create a new comment
router.post('/', async (req, res) => {
    try {
        const comment = new Comment(req.body);
        await comment.save();
        res.status(201).send(comment);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all comments
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find().populate('author').populate('post');
        res.status(200).send(comments);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get a single comment by ID
router.get('/:id', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id).populate('author').populate('post');
        if (!comment) {
            return res.status(404).send();
        }
        res.status(200).send(comment);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a comment by ID
router.patch('/:id', async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!comment) {
            return res.status(404).send();
        }
        res.status(200).send(comment);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete a comment by ID
router.delete('/:id', async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        if (!comment) {
            return res.status(404).send();
        }
        res.status(200).send(comment);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;

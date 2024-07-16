// build your `/api/tasks` router here
// api/task/router.js
const express = require('express');
const Tasks = require('./model');
const router = express.Router();

router.get('/', async (req, res) => {
    const tasks = await Tasks.getTasks();
    res.status(200).json(tasks);
});

router.post('/', async (req, res) => {
    try {
        const task = await Tasks.addTask(req.body);
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ message: 'Invalid task data' });
    }
});

module.exports = router;

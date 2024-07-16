// build your `/api/resources` router here
// api/resource/router.js
const express = require('express');
const Resources = require('./model');
const router = express.Router();

router.get('/', async (req, res) => {
    const resources = await Resources.getResources();
    res.status(200).json(resources);
});

router.post('/', async (req, res) => {
    try {
        const resource = await Resources.addResource(req.body);
        res.status(201).json(resource);
    } catch (err) {
        res.status(400).json({ message: 'Resource with the name already exists' });
    }
});

module.exports = router;

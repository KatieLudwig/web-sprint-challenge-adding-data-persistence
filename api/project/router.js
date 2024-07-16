// build your `/api/projects` router here
const express = require('express');
const Projects = require('./model');
const router = express.Router();

router.get('/', async (req, res) => {
    const projects = await Projects.getProjects();
    res.status(200).json(projects);
});

router.post('/', async (req, res) => {
    const project = await Projects.addProject(req.body);
    res.status(201).json(project);
});

module.exports = router;

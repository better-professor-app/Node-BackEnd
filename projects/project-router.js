const express = require('express');
const router = express.Router();

const Projects = require('./project-model')

router.get('/student/:id',  async (req, res) => {
    studentId = req.params.id

    try {
        const projects = await Projects.getProjectByStudent(studentId)

        if(projects.length === 0) {
            res.status(404).json({ message: "No Projects for Student"})
        } else {
            res.status(200).json(projects)
        }

    } catch (err) {
        res.status(500).json({ message: 'Failed to get Projects' })
    }

})




module.exports = router
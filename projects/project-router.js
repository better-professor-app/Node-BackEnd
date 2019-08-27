const express = require('express');
const router = express.Router();

// DB Connection
const Projects = require('./project-model')
const Students = require('../students/student-model');

router.get('/', async (req, res) => {
    loggedInId = req.loggedInId

    try {

        const allProjects = await Projects.getProjects(loggedInId) 

        res.status(200).json(allProjects)      

    } catch (err) {
        res.status(500).json({ message: 'Failed to get Projects' })
    }
})

router.get('/student/:id',  async (req, res) => {
    loggedInId = req.loggedInId
    studentId = req.params.id

    try {
        const myStudent = await Students.getStudentById(loggedInId, studentId)

        if (!myStudent) {
            res.status(404).json({ message: `No Student With Id: ${studentId}`})
        } 
        else {

            const projects = await Projects.getProjectByStudent(studentId)

            if(projects.length === 0) {
                res.status(404).json({ message: "No Projects for Student"})
            } else {
                res.status(200).json(projects)
            }

        }

    } catch (err) {
        res.status(500).json({ message: 'Failed to get Projects' })
    }

})




module.exports = router
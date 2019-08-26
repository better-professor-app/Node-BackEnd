const express = require('express');

//database connection
const Students = require('./student-model');
const Projects = require('../projects/project-model')

// express router
const router = express.Router();

router.get('/', async (req, res) => {

    loggedInId = req.loggedInId

    try {
        const students = await Students.getStudents(loggedInId)

        res.status(200).json(students)
    } catch (err) {
        res.status(500).json({ message: 'Failed to get Students' })
    }
})

router.get('/:id', async (req, res) => {
    loggedInId = req.loggedInId
    studentId = req.params.id

    try {
        const student = await Students.getStudentById(loggedInId, studentId)
        const projects = await Projects.getProjectByStudent(studentId)
        const nested = {...student, projects: projects}

        if(student.length === 0) {
            res.status(404).json({ message: "No Student Found"})
        } else {
            res.status(200).json(nested)
        }

    } catch (err) {
        res.status(500).json({ message: 'Failed to get Students' })
    }
})





module.exports = router;
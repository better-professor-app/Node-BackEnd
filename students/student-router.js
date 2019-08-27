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

router.post('/', async (req, res) => {
    loggedInId = req.loggedInId
    const newStudent = req.body

    newStudent.professor_id = loggedInId
    console.log(newStudent)

    
    try {
        
        const newStudentIdArray =  await Students.addStudent(newStudent)
        const [newStudentId] = newStudentIdArray

        const newStudentinDB = await Students.getStudentById(loggedInId, newStudentId)

        res.status(201).json(newStudentinDB)      

    } catch (err) {
        res.status(500).json({ message: 'Failed to add Student' })
    }

})





module.exports = router;
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

        // const newStudentinDB = await Students.getStudentById(loggedInId, newStudentId)

        res.status(201).json(newStudentIdArray)      

    } catch (err) {
        res.status(500).json({ message: 'Failed to add Student' })
    }

})

router.put('/:id', async (req, res) => {
    loggedInId = req.loggedInId
    const studentId = req.params.id
    const newStudentInfo = req.body

    try {
        const student = await Students.getStudentById(loggedInId, studentId);
    
        if (student) {
          const updatedStudent = await Students.updateStudent(newStudentInfo, studentId);
          res.json(updatedStudent);
        } else {
          res.status(404).json({ message: 'Could not find student with given id' });
        }
      } catch (err) {
        res.status(500).json({ message: 'Failed to update Student' });
      }
})

router.delete('/:id', async (req, res) => {
    const studentId = req.params.id

    try {
        const deleted = await Students.deleteStudent(studentId);
    
        if (deleted) {
          res.json({ removed: deleted });
        } else {
          res.status(404).json({ message: 'Could not find Student with given id' });
        }
      } catch (err) {
        res.status(500).json({ message: 'Failed to delete Student' });
      }
})




module.exports = router;
const express = require('express');

//database connection
const Students = require('./student-model');
const Projects = require('../projects/project-model')

// express router
const router = express.Router();

/**
 * @swagger
 * /api/students:
 *   get:
 *     summary: Get list of Students (Token Required)
 *     security:
 *       - JWT: []
 *     description: Return List of Students
 *     tags:
 *       - Students
 *     consumes:
 *       - "application/json"
 *     produces:
 *       - "application/json"
 *     responses:
 *       200:
 *         description: Objects of Students
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Student'
 *       400:
 *         description: Invalid Token
 */

router.get('/', async (req, res) => {

    loggedInId = req.loggedInId

    try {
        const students = await Students.getStudents(loggedInId)

        res.status(200).json(students)
    } catch (err) {
        res.status(500).json({ message: 'Failed to get Students' })
    }
})

/**
 * @swagger
 * /api/students/{studentID}:
 *   get:
 *     summary: Get Student By ID (Token Required)
 *     security:
 *       - JWT: []
 *     description: Returns Student Object w/Projects
 *     tags:
 *       - Students
 *     consumes:
 *       - "application/json"
 *     produces:
 *       - "application/json"
 *     parameters:
 *       - in: path
 *         name: studentID
 *         description: "Student that needs to be fetched"
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Objects of Students
 *         schema:
 *           $ref: '#/definitions/StudentWithProject'
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *       400:
 *         description: Invalid Token
 */

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

/**
 * @swagger
 * /api/students:
 *   post:
 *     summary: Endpoint to Add Student
 *     security:
 *       - JWT: []
 *     description: Add Student - Returns New Student Ojbect
 *     tags:
 *       - Students
 *     consumes:
 *       - "application/json"
 *     produces:
 *       - "application/json"
 *     parameters:
*       - name: body
*         in: body
*         schema:
*           $ref: '#/definitions/StudentToPost'
 *     responses:
 *       201:
 *         description: Successful Registration
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Student'
 *       500:
 *         description: User Already exist
 */

router.post('/', async (req, res) => {
    loggedInId = req.loggedInId
    const newStudent = req.body

    newStudent.professor_id = loggedInId
    // console.log(newStudent)

    
    try {
        
        const newStudentIdArray =  await Students.addStudent(newStudent)
        console.log(newStudentIdArray)
        const [newStudentId] = newStudentIdArray

        const newStudentinDB = await Students.getStudentById(loggedInId, newStudentId)

        res.status(201).json(newStudentinDB)      

    } catch (err) {
        res.status(500).json({ message: 'Failed to add Student' })
    }

})

/**
 * @swagger
 * /api/students/{studentID}:
 *   put:
 *     summary: Edit Student By ID (Token Required)
 *     security:
 *       - JWT: []
 *     description: Returns Student Object w/Projects
 *     tags:
 *       - Students
 *     consumes:
 *       - "application/json"
 *     produces:
 *       - "application/json"
 *     parameters:
 *       - in: path
 *         name: studentID
 *         description: "Student that needs to be fetched"
 *         required: true
 *         type: integer
 *       - in: body
 *         schema:
*           $ref: '#/definitions/StudentToPost'
 *     responses:
 *       200:
 *         description: Number of Rows Effected 
 *         schema:
 *           type: integer
 *       400:
 *         description: Invalid Token
 */

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

/**
 * @swagger
 * /api/students/{studentID}:
 *   delete:
 *     summary: Delete Student By ID (Token Required)
 *     security:
 *       - JWT: []
 *     description: Returns Student Object w/Projects
 *     tags:
 *       - Students
 *     consumes:
 *       - "application/json"
 *     produces:
 *       - "application/json"
 *     parameters:
 *       - in: path
 *         name: studentID
 *         description: "Student that needs to be fetched"
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Number of Records Deleted 
 *         schema:
 *           type: object
 *           properties:
 *             removed: 
 *                type: integer
 *       400:
 *         description: Invalid Token
 */

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
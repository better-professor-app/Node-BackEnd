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

router.post('/', async (req, res) => {
    const newProject = req.body

    try {
        
        const newProjectIdArray =  await Projects.addProject(newProject)
        const [newProjectId] = newProjectIdArray

        res.status(201).json({ message: `Successful!`, project_id: newProjectId})      

    } catch (err) {
        res.status(500).json({ message: 'Failed to add Project' })
    }
})

router.post('/student/:id', async (req, res) => {
    loggedInId = req.loggedInId
    const studentId = req.params.id
    const info = req.body

    info.student_id = studentId

    try {
        
        const newInfoArray =  await Projects.addProjectToStudent(info)

        res.status(201).json({ message: `Successful!`, student_projectsID: newInfoArray})      

    } catch (err) {
        res.status(500).json({ message: 'Failed to add Project' })
    }


})



module.exports = router
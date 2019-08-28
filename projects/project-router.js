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
    const { name, description, project_deadline, feedback, grade} = req.body

    const deadline = new Date(project_deadline)
    console.log(deadline)
    
    const newProject = {
        name,
        description
    }

    try {
        
        const newProjectIdArray =  await Projects.addProject(newProject)
        const [newProjectId] = newProjectIdArray

        const infoToAdd = {
            project_deadline: deadline,
            feedback,
            grade,
            student_id: studentId,
            project_id: newProjectId
        }

        const newInfoArray =  await Projects.addProjectToStudent(infoToAdd)

        res.status(201).json({ message: `Project Added Successful!`, projectId: newProjectId })

    } catch (err) {
        res.status(500).json({ message: 'Failed to add Project' })
    }
})

router.put('/:id', async (req, res) => {
    loggedInId = req.loggedInId
    const projectID = req.params.id
    const { name, description, project_deadline, feedback, grade} = req.body
    
    const changes_1 = {
        name, 
        description
    }

    const changes_2 = {
        project_deadline,
        feedback,
        grade,
    }

    if(name || description) {
        try {
            const project = await Projects.getProjectsById(projectID)

            if(project) {
                const updatedProject = await Projects.upDateProject(changes_1, projectID)

                if(project_deadline || feedback || grade) {
                    try {
                        const updatedStudenProjects = await Projects.updateStudentProjects(changes_2, projectID)
                        res.status(200).json({ message: 'Update Success!!' })
                    }
                    catch (err) {
                        res.status(500).json({ message: 'Failed to update Project' });
                      }
                }
                
            } else {
                res.status(404).json({ message: 'Could not find project with given id' });
              }
        } catch (err) {
            res.status(500).json({ message: 'Failed to update Project' });
          }
    } 
})


router.delete('/:id', async (req, res) => {
    const projectId = req.params.id

    try {
        const deleted = await Projects.removeProject(projectId);
    
        if (deleted) {
          res.json({ removed: deleted });
        } else {
          res.status(404).json({ message: 'Could not find Project with given id' });
        }
      } catch (err) {
        res.status(500).json({ message: 'Failed to delete Student' });
      }

})



module.exports = router
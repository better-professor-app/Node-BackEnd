const db = require('../database/db-config')

module.exports = {
    getProjectByStudent,
    getProjects,
    addProject,
    addProjectToStudent,
    removeProject
}

function getProjects(professor_id) {

    /*
    select sp.student_id, sp.project_id, sp.project_deadline, sp.feedback, sp.notes, s.professor_id
    from [student_projects] sp
    join [students] s
        on sp.student_id = s.id
        where s.professor_id = 1
    */

   return db('student_projects as sp')
        .innerJoin('students as s', 'sp.student_id','s.id')
        .innerJoin('projects as p', 'sp.project_id', 'p.id')
        .select('sp.student_id', 'sp.project_id', 'p.name', 'sp.project_deadline', 'sp.feedback', 'sp.notes')
        .where('s.professor_id', professor_id)
}

function getProjectByStudent(id) {

    /*
    select sp.project_id, p.name, sp.notes, sp.project_deadline, sp.feedback 
    from [student_projects] sp
    join [projects] p
        on sp.project_id = p.id
        where sp.student_id = 11
    */

    return db('student_projects as sp')
        .innerJoin('projects as p', 'sp.project_id','p.id')
        .select('sp.project_id', 'p.name', 'p.description', 'sp.notes', 'sp.project_deadline', 'sp.feedback', 'sp.grade')
        .where('sp.student_id', id)
}

function addProject(newProject) {
    return db('projects')
        .insert(newProject)
}   

function addProjectToStudent(info) {
    return db('student_projects')
        .insert(info)
}

function removeProject(projectId) {
    return db('student_projects')
        .where('project_id', projectId)
        .del()
}

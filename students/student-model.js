const db = require('../database/db-config')

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent
}


function getStudents(loggedInId) {
    return db('students')
        .select('id','name','email','img','grad_program')
        .where('professor_id', loggedInId)
}

function getStudentById(professorID, studentId) {
    return db('students')
        .select('id','name','email','img','grad_program')
        .where('professor_id', professorID)
        .where('id', studentId)
        .first()
}

function addStudent(newStudent) {

    return db('students')
        .insert(newStudent)
        .returning('id')
}

function updateStudent(changes, studentId) {
    return db('students')
        .where('id', studentId)
        .update(changes)
}

function deleteStudent(studentId) {
    return db('students')
        .where('id', studentId)
        .del()
}
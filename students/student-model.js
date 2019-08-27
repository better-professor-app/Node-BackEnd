const db = require('../database/db-config')

module.exports = {
    getStudents,
    getStudentById
}


function getStudents(id) {
    return db('students')
        .select('id','name','email','img','grad_program')
        .where('professor_id', id)
}

function getStudentById(professorID, studentId) {
    return db('students')
        .select('id','name','email','img','grad_program')
        .where('professor_id', professorID)
        .where('id', studentId)
        .first()
}
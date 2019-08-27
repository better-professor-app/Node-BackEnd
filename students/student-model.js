const db = require('../database/db-config')

module.exports = {
    getStudents,
    getStudentById,
    addStudent
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

function addStudent(newStudent) {

    return db('students')
        .insert(newStudent)
        // .then(ids => {
        //     const [id] = ids;
        //     return getStudentById(id);
        //   });
}
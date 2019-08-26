const db = require('../database/db-config')

module.exports = {
    getStudents
}


function getStudents() {
    return db('students')
}
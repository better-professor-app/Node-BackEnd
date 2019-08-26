const db = require('../database/db-config')

module.exports = {
    getProjectByStudent
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
        .select('sp.project_id', 'p.name', 'sp.notes', 'sp.project_deadline', 'sp.feedback', 'sp.grade')
        .where('sp.student_id', id)
}

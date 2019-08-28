const db = require('../database/db-config')

module.exports = {
    getReminders,
    addReminder,
    getReminderById,
    updateReminder,
    deleteReminder
}


function getReminders(loggedInId) {
    return db('reminders')
        .select('id','message','created_at','time', 'date')
        .where('professor_id', loggedInId)
}

function getReminderById(professorID, reminderId) {
    return db('reminders')
        .select('id','message','created_at')
        .where('professor_id', professorID)
        .where('id', reminderId)
        .first()
}

function addReminder(newReminder) {

    return db('reminders')
        .insert(newReminder)
        .returning('id')
}

function updateReminder(changes, reminderId) {
    return db('reminders')
        .where('id', reminderId)
        .update(changes)
}

function deleteReminder(reminderId) {
    return db('reminders')
        .where('id', reminderId)
        .del()
}
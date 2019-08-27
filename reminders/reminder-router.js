const express = require('express');

//database connection
const Reminders = require('./reminder-model');

// express router
const router = express.Router();

router.get('/', async (req, res) => {

    loggedInId = req.loggedInId

    try {
        const reminders = await Reminders.getReminders(loggedInId)

        res.status(200).json(reminders)
    } catch (err) {
        res.status(500).json({ message: 'Failed to get Reminders' })
    }
})

router.post('/', async (req, res) => {
    loggedInId = req.loggedInId
    const newReminder = req.body

    newReminder.professor_id = loggedInId
    console.log(newReminder)

    
    try {
        
        const newReminderArray =  await Reminders.addReminder(newReminder)
        const [newReminderId] = newReminderArray

        const newReminderInDb = await Reminders.getReminderById(loggedInId, newReminderId)

        res.status(201).json(newReminderInDb)      

    } catch (err) {
        res.status(500).json({ message: 'Failed to add Reminder' })
    }

})

router.put('/:id', async (req, res) => {
    loggedInId = req.loggedInId
    const reminderId = req.params.id
    const newReminderInfo = req.body

    try {
        const reminder = await Reminders.getReminderById(loggedInId, reminderId);
    
        if (reminder) {
          const updatedReminder = await Reminders.updateReminder(newReminderInfo, reminderId);
          res.json(updatedReminder);
        } else {
          res.status(404).json({ message: 'Could not find student with given id' });
        }
      } catch (err) {
        res.status(500).json({ message: 'Failed to update Student' });
      }
})

router.delete('/:id', async (req, res) => {
    const reminderId = req.params.id

    try {
        const deleted = await Reminders.deleteReminder(reminderId);
    
        if (deleted) {
          res.json({ removed: deleted });
        } else {
          res.status(404).json({ message: 'Could not find Reminder with given id' });
        }
      } catch (err) {
        res.status(500).json({ message: 'Failed to delete Reminder' });
      }
})


module.exports = router;
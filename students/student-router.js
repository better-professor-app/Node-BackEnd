const express = require('express');

//database connection
const Students = require('./student-model');

// express router
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const students = await Students.getStudents()

        res.status(200).json(students)
    } catch (err) {
        res.status(500).json({ message: 'Failed to get Students' })
    }
})






module.exports = router;
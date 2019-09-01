const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const Professors = require('./professor-model')
const generateToken = require('../token/gen-token')

const authenticate = require('../auth/authenticate-middleware')


router.post('/register', (req, res) => {
    let regProfessor = req.body
    
    let hashPassword = bcrypt.hashSync(regProfessor.password, 8)
    regProfessor.password = hashPassword

    Professors.add(regProfessor)
    .then(saved => {
        res.status(201).json(saved);
    })
    .catch(error => {
        res.status(500).json(error);
    });
})

router.post('/login', (req, res) => {
    let { username, password } = req.body

    Professors.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        
        const token = generateToken(user)
        
        res.status(200).json({ 
          message: `Welcome ${user.username}!`,
          token: token   
        });
      } else {
        res.status(401).json({ message: 'YOU SHALL NOT PASS!' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    })
})

router.get('/', authenticate,  async (req, res) => {
  loggedInId = req.loggedInId

  try {
    const professorInfo = await Professors.findById(loggedInId)

    res.status(200).json(professorInfo)
  } catch (err) {
    res.status(500).json({ message: 'Failed to get Professor' })
}


})




module.exports = router
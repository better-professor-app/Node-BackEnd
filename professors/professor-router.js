const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const Professors = require('./professor-model')
const generateToken = require('../token/gen-token')


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

/**
 * @swagger
 * tags:
 *  - name: "Auth"
      description: "Access to Petstore orders"
    paths:
 *  /login:
 *   post:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Username to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 */

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


module.exports = router
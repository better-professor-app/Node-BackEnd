const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const Professors = require('./professor-model')
const generateToken = require('../token/gen-token')

// Middleware
const checkEmpty = require('../Middleware/checkEmptyString')


/**
 * @swagger
 * /api/professors/register:
 *   post:
 *     summary: Endpoint to Register
 *     description: Register Users - Return New Created Object
 *     tags:
 *       - Auth
 *     consumes:
 *       - "application/json"
 *     produces:
 *       - "application/json"
 *     parameters:
 *       - in: body
 *         name: body
 *         description: "Data Needed to Register"
 *         required: true
 *         schema:
 *           type: ojbect
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *             username:
 *               type: string
 *             password:
 *               type: string
 *               format: password
 *     responses:
 *       201:
 *         description: Successful Registration
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Professor'
 *       500:
 *         description: User Already exist
 */

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
 * /api/professors/login:
 *   post:
 *     summary: Endpoint to login all Users
 *     description: Logs in Users - Return Welcome message & token!
 *     tags:
 *       - Auth
 *     consumes:
 *       - "application/json"
 *     produces:
 *       - "application/json"
 *     parameters:
 *       - in: body
 *         name: body
 *         description: "User Credentials that Need to Login"
 *         required: true
 *         schema:
 *           type: ojbect
 *           properties:
 *             username:
 *               type: string
 *             password:
 *               type: string
 *               format: password
 *     responses:
 *       200:
 *         description: User Found and Logged in Successfully
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *             token:
 *               type: string
 *       401:
 *         description: You shall Not Pass!
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
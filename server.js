const express = require('express');
const helmet = require('helmet');

//routers
const studentRouter = require('./students/student-router')
const professorRouter = require('./professors/professor-router')

//express
const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/students', studentRouter)
server.use('/api/professors', professorRouter)



module.exports = server;
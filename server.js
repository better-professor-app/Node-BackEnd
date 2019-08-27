const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//routers
const studentRouter = require('./students/student-router')
const professorRouter = require('./professors/professor-router')
const ProjectsRouter = require('./projects/project-router')

// middleware
const authenticate = require('./auth/authenticate-middleware')

//express
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/students', authenticate, studentRouter)
server.use('/api/professors', professorRouter)
server.use('/api/projects', authenticate, ProjectsRouter)



module.exports = server;
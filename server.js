const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

//routers
const studentRouter = require('./students/student-router')
const professorRouter = require('./professors/professor-router')
const ProjectsRouter = require('./projects/project-router')
const ReminderRouter = require('./reminders/reminder-router')

// middleware
const authenticate = require('./auth/authenticate-middleware')

//express
const server = express();

const swaggerDefinition = {
    info: {
      title: 'Better-Professor API',
      version: '1.0.0',
      description: 'Endpoints to access All Resources',
    },
    host: 'localhost:5500',
    basePath: '/api',
    securityDefinitions: {
        JWT: {
            type: 'apiKey',
            name: 'Authorization',
            description: 'JWT authorization of an API',
            in: 'header',
      },
    },
  };

const options = {
swaggerDefinition,
apis: ['./*-router.js'],
};

const swaggerSpec = swaggerJSDoc(options)

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/students', authenticate, studentRouter)
server.use('/api/professors', professorRouter)
server.use('/api/projects', authenticate, ProjectsRouter)
server.use('/api/reminders', authenticate, ReminderRouter)

server.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
})

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))



module.exports = server;
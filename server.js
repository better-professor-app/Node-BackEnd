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
const checkEmpty = require('./Middleware/checkEmptyString')

//express
const server = express();

const swaggerDefinition = {
    info: {
      title: 'Better-Professor API',
      version: '1.0.0',
      description: 'Endpoints to access All Resources',
    },
    host: 'better-prof-app.herokuapp.com',
    basePath: '/',
    securityDefinitions: {
        JWT: {
            type: 'apiKey',
            name: 'authorization',
            description: 'JWT authorization of an API',
            scheme: 'bearer',
            in: 'header',
      },
    },
    schemes: ['https']
  }

const options = {
swaggerDefinition,
// apis: ['/**./*.js']
apis: ['./professors/*.js', './students/*.js', './projects/*.js', './database/**/*.js']
};

const swaggerSpec = swaggerJSDoc(options)

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/students', authenticate, checkEmpty, studentRouter)
server.use('/api/professors', checkEmpty, professorRouter)
server.use('/api/projects', authenticate, checkEmpty, ProjectsRouter)
server.use('/api/reminders', authenticate, checkEmpty, ReminderRouter)

server.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
})

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))



module.exports = server;
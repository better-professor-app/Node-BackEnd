const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const axios = require('axios')

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
apis: ['./yaml-api/*.yaml']
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

server.get('/', (req, res) => {
  res.send('Server is Configured Properly :)')
})

server.post('/new-order', (req, res) => {
  // console.log(req.body, 'data from webhook call')

  let { total_paid } = req.body.payload

  console.log(total_paid, 'total paid object')

  // axios.post("https://hooks.slack.com/services/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", req.body)
  //   .then(res2 => {
  //     // console.log(res2, 'res from slack webhook')
  //     res.status(201).json({message: 'test'})
  //   })
  //   .catch(err => {
  //     // console.log(err, 'err response')
  //     res.status(400).json({message: err.response.statusText})
  //   })
  res.status(200).json({message: "success"})
})

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))



module.exports = server;
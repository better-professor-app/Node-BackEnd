const express = require('express');
const helmet = require('helmet');

//express
const server = express();

server.use(helmet());
server.use(express.json());





module.exports = server;
const knex = require('knex')

const configOptions = require('../knexfile');

const dbEnv = process.env.DB_ENV || 'development'

module.exports = knex(configOptions[dbEnv])
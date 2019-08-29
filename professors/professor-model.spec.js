const request = require('supertest');

const db = require('../database/db-config');
const server = require('../server');

const Professors = require('../professors/professor-model')

describe('Professor-Model-Testing', () => {

    it('tests are running w/ DB_ENV set as "testing"', () => {
        // expect(process.env.DB_ENV === 'testing').toBe('testing')
        expect(process.env.DB_ENV).toBe('testing')
    })

    beforeEach(async () => {
        // guarantees that the table is cleaned out before any of the tests run
        await db('professors').truncate();
      })

    describe('insert()', () => {

        it('Should Enter Provided User into DB', async () => {

            let user = await Professors.add(
                { 
                    "name": "Jacob Hills",
                    "email": "jhills@gmail.com",
                    "password": "pass",
                    "username": "jhills"
                });
            expect(user.username).toBe('jhills');
        })
    })














})
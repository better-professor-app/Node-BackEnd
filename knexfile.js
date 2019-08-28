// Update with your config settings.

const localPg = {
  host: 'localhost',
  database: 'hobbits',
  user: 'student',
  password: 'hired'
}
const productionDBConnection = process.env.DATABASE_URL || localPg

module.exports = {

  development: {

    client: 'sqlite3',
    connection: {
      filename: './database/better-professor.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done) //turns on the FK enforcement
      }
    },
    
    production: {
      client: 'pg',
      connection: productionDBConnection,
      migrations: {
        directory: './database/migrations'
      },
      seeds: {
        directory: './database/seeds'
      },
    }
    
  }


};

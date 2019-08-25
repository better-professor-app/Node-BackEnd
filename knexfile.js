// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/better-professor.db3'
    }
  },
  useNullAsDefault: true,
  migrations: {
    directory: './database/migrations'
  },
  seeds: {
    directory: './database/seeds'
  },
  // sqlite will not enforce Foreing Keys by default
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done) //turns on the FK enforcement
    }
  }

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};

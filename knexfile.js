// Update with your config settings.

module.exports = {

  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "bubbles",
      password: "bubbles1234",
<<<<<<< HEAD
      database: "cardgame",
      charset: "utf8"
    }
  }
=======
      database: "bubbles",
      charset: "utf8"
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

>>>>>>> feature/header-login-register
};


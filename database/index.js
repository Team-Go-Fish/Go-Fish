// initialize pool/client connection to postgres database
const { Pool, Client } = require('pg');
const login = require('./config.js');

// const pool = new Pool({
//   host: 'localhost',
//   user: 'postgres',
//   password: `${config.password}`,
//   database: 'go-fish',
//   port: 5432
// });
const pool = new Pool({
  host: login.host,
  user: login.user,
  password: login.password,
  database: login.database,
  port: 5432
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  client.query('SELECT NOW()', (err, result) => {
    release()
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    console.log(result.rows)
  })
})

module.exports = pool;

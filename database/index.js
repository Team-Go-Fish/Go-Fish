// initialize pool/client connection to postgres database
const { Pool, Client } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'new_role',
  password: `password`,
  database: 'fish',
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

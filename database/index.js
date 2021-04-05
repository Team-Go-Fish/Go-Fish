// initialize pool/client connection to postgres database

const { Pool, Client } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: `password`,
  database: 'fish',
  port: 5432
});

module.exports = pool ;

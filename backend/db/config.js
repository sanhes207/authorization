const {Pool} = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: process.env.DB_CONNECTION_STRING || 'localhost',
  database: 'jwt_training',
  password: '19022001',
  port: process.env.DB_CONNECTION_PORT || 5432,
})

module.exports = pool;
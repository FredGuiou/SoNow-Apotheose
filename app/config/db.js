const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});


module.exports = {
    originalClient: pool,

    async query(...params) {
        return this.originalClient.query(...params);
    },
};
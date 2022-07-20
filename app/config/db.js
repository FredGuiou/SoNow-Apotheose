const { Pool } = require('pg');

const pool = new Pool();

module.exports = {
    originalClient: pool,

    async query(...params) {
        return this.originalClient.query(...params);
    },
};
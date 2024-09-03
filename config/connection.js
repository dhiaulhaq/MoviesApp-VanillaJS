const {Pool} = require('pg');
let pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'simulasi-livecode',
    idleTimeoutMillis: 500
});

module.exports = pool;
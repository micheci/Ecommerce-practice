import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    password: 'bellaco',
    host: 'localhost',
    port: 5432, // default Postgres port
    database: 'EcommerceTest'
});

export default pool;

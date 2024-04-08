import { Pool } from 'pg';

const connection = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export default connection;

const db = require('./db');

async function fetchData() {
  const res = await db.query('SELECT * FROM your_table');
  console.log(res.rows[0].time.toString());
}

fetchData();

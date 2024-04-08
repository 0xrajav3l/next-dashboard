import connection from '@/lib/db';

export async function getTime() {
  const [rows] = await connection.query('SELECT NOW() as time');
  return rows[0].time;
}

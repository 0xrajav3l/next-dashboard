import { getTime } from '@/app/lib/db_util';

export default async function Page() {
  const data = await getTime();
  console.log(data);
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}

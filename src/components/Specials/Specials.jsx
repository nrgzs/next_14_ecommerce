import SpecialProducts from './_components/SpecialProducts';

async function getData() {
  const res = await fetch('https://api.b-e.az/task/special-offer');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Specials() {
  const data = await getData();
  return <SpecialProducts data={data} />;
}

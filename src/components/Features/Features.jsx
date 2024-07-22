import FeatureCard from './_components/FeatureCard';

async function getData() {
  const res = await fetch('https://api.b-e.az/task/features');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Features() {
  const data = await getData();
  return (
    <div className="flex flex-wrap justify-center items-center mt-[-60px] gap-5">
      {data.map((item) => (
        <FeatureCard key={item} data={item} />
      ))}
    </div>
  );
}

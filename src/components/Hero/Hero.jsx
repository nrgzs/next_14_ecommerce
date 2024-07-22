import HeroSlider from './_components/HeroSlider';

async function getData() {
  const res = await fetch('https://api.b-e.az/task/big-sliders');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Hero() {
  const data = await getData();

  return (
    <div className=" w-full h-screen">
      <HeroSlider data={data} />
    </div>
  );
}

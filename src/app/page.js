import Features from '@/components/Features/Features';
import Hero from '@/components/Hero/Hero';
import Specials from '@/components/Specials/Specials';

export default function Home() {
  return (
    <main>
        <iframe
          src="https://player.vimeo.com/video/999027855?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          title="Set up your first video"
        ></iframe>
      <Hero />
      <Features />
      <Specials />
    </main>
  );
}

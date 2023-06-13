import Hero from '@/components/home/Hero';
import HeroImg from '@/components/home/HeroImg';

export default function Home() {
  return (
    <main className='flex flex-col lg:flex-row lg:p-10 min-h-screen overflow-y-hidden'>
      <Hero />
      <HeroImg />
    </main>
  );
}

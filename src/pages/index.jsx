import Hero from '@/components/home/Hero';
import HeroImg from '@/components/home/HeroImg';
import clsx from 'clsx';

export default function Home() {
  return (
    <main
      className={clsx(
        'bg-gradient-to-r',
        'from-white',
        'from-10%',
        'via-sky-200',
        'via-30%',
        'to-emerald-300',
        'to-90%',
        'flex',
        'flex-col',
        'lg:flex-row',
        'lg:p-10',
        'min-h-screen',
        'overflow-y-hidden'
      )}>
      <Hero />
      <HeroImg />
    </main>
  );
}

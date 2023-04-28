import How from '@/components/wipauto/How';
import LogoVoiture from '@/components/wipauto/LogoVoiture';
import NAvBarAuto from '@/components/wipauto/Navbar';
import Footer from '@/components/wipauto/footer/Footer';
import Image from 'next/image';

export default function HomeAuto() {
  return (
    <main className='relative bg-slate-700'>
      <NAvBarAuto />
      <section className=' min-h-max bg-slate-700 '>
        <div className='hero-content flex-col '>
          <h1 className='text-orange-400 text-5xl font-bold  '>
            WIP AUTO
          </h1>
          <Image
            className=''
            src='/img/voiture.svg'
            alt='voiture illustration'
            width={550}
            height={50}
            priority
          />
        </div>
      </section>
      <LogoVoiture />
      <How />
      <section className='p-4 xl:px-36 xl:py-14'>
        <p className='text-center md:text-2xl xl:text-4xl '>
          Nous vous connectons aux plus grandes enseignes de location
          et vente de voitures..
        </p>
        <div className='relative h-36 md:h-56 '>
          <Image fill src={'/img/how/collection-card.svg'} />
        </div>
      </section>
      <Footer />
    </main>
  );
}

import Image from 'next/image';

function Hero({ section }) {
  if (!section) {
    return (
      <section className='p-6 bg-white '>
        <div className='grid grid-rows-2 grid-cols-1 gap-8 '>
          <p className='after:content-[url("/img/dealer/Vector.svg")] relative after:absolute after:bottom-2 after:left-24 after:w-1 after:h-2 font-bold text-3xl capitalize leading-9'>
            trouver, réserver et louer une voiture en toute simplicité
          </p>
          <p className='font-normal text-base text-center leading-6'>
            Chaque concessionnaire propose la location de véhicule
            neuf et occasion, ainsi que l'entretien, la révision, le
            contrôle et la réparation de véhicules de marque avec un
            atelier mécanique.
          </p>
        </div>
        <div className='relative w-80 h-80 hidden '>
          <Image
            fill
            alt='illustration'
            src={'/img/dealer/heroimage.svg'}
          />
        </div>
      </section>
    );
  } else {
    return (
      <section className='h-28 border border-red-700 bg-no-repeat bg-[url("/img/backcompare.png")] p-4 '>
        <p className='text-sm w-64'>
          Trouver la voiture que vous voulez grâce aux milliers de
          particuliers qui nous font confiance
        </p>
      </section>
    );
  }
}

export default Hero;

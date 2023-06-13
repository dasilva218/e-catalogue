import Image from 'next/image';

function Hero({ section }) {
  if (!section) {
    return (
      <section className='p-3 bg-white text-black'>
        <div className=''>
          <div className='grid grid-rows-2 gap-5 items-center '>
            <p className='px-5 after:content-[url("/img/dealer/Vector.svg")] relative after:absolute after:bottom-3 md:after:-bottom-1 lg:after:bottom-6 after:left-28 md:after:left-40 lg:after:left-60 after:w-1 after:h-2 font-bold text-3xl capitalize leading-9'>
              trouver, réserver et louer une voiture en toute
              simplicité
            </p>
            <p className='font-normal '>
              Chaque concessionnaire propose la location de véhicule
              neuf et occasion, ainsi que l'entretien, la révision, le
              contrôle et la réparation de véhicules de marque avec un
              atelier mécanique.
            </p>
          </div>
          <div className='relative w-80 h-80 hidden md:block '>
            <Image
              fill
              alt='illustration'
              src={'/img/dealer/heroimage.svg'}
            />
          </div>
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

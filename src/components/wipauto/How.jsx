import Image from 'next/image';

function How() {
  return (
    <section className=' flex gap-y-4 flex-col p-5 xl:px-36 xl:py-20 md:p-8'>
      <h1 className='text-center text-2xl md:text-4xl'>
        Comment ça marche ?
      </h1>
      <p className='text-center text-base md:text-3xl md:mb-8 '>
        wip met à votre disposition un catalogue d&apos;agence et de
        particulier qui font dans la vente et la location des
        véhicules vous y trouverez également des services liés à
        l'automobile.{' '}
      </p>
      <Step />
    </section>
  );
}

export default How;

function Step() {
  return (
    <div className='grid grid-cols-5 justify-items-center '>
      <div className='flex flex-col items-center'>
        <div className='how-logo '>
          <Image src={'/img/how/recherche.svg'} alt='jjd' fill />
        </div>
        <p className='how-text'>recherchez</p>
      </div>
      <div className='how-logo '>
        <Image src={'/img/how/Vector 2.svg'} alt='jjd' fill />
      </div>
      <div className='flex flex-col items-center'>
        <div className='how-logo'>
          <Image src={'/img/how/compare.svg'} alt='jjd' fill />
        </div>
        <p className='how-text'>comparez</p>
      </div>
      <div className='how-logo'>
        <Image src={'/img/how/vector1.svg'} alt='jjd' fill />
      </div>
      <div className='flex flex-col items-center '>
        <div className='how-logo'>
          <Image src={'/img/how/argent.svg'} alt='jjd' fill />
        </div>
        <p className='how-text'>economisez</p>
      </div>
    </div>
  );
}

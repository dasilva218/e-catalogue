import Image from 'next/image';

function LogoVoiture() {
  return (
    <section className='p-7 lg:p-16 bg-white   '>
      <div className='grid grid-cols-4 md:gap-8  xl:gap-x-0 xl:gap-y-16 justify-items-center '>
        <div className='logo'>
          <Image fill src={'/img/logoVoiture/bmw.svg'} alt='jjd' />
        </div>
        <div className='logo'>
          <Image fill src={'/img/logoVoiture/ford.svg'} alt='jjd' />
        </div>
        <div className='logo'>
          <Image fill src={'/img/logoVoiture/madza.svg'} alt='jjd' />
        </div>
        <div className='logo'>
          <Image fill src={'/img/logoVoiture/nissan.svg'} alt='jjd' />
        </div>
        <div className='logo'>
          <Image
            fill
            src={'/img/logoVoiture/certifie.svg'}
            alt='jjd'
          />
        </div>
        <div className='logo'>
          <Image
            fill
            alt='jjd'
            src={'/img/logoVoiture/tesla (1).svg'}
          />
        </div>
        <div className='logo'>
          <Image alt='jjd' fill src={'/img/logoVoiture/wolf.svg'} />
        </div>
        <div className='logo'>
          <Image alt='jjd' fill src={'/img/logoVoiture/toyota.svg'} />
        </div>
      </div>
    </section>
  );
}

export default LogoVoiture;

import Image from 'next/image';

export default function () {
  return (
    <section className='relative flex-1 hidden lg:flex '>
      <Image src={'/img/home.svg'} alt='illustration' fill />
    </section>
  );
}

import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Hero() {
  const router = useRouter();

  return (
    <section className='hero-content text-center flex flex-col gap-8 flex-1 '>
      <Certifie />
      <div className='flex flex-col lg:flex-row '>
        <p className='flex-1 text-orange-400 self-center text-5xl lg:text-6xl '>
          Le Meilleur
        </p>
        <p className=' leading-tight after:content-[url("/img/underline.svg")] after:absolute after:bottom-10 after:left-0 after:right-0 relative flex-1 text-center text-5xl'>
          en un seul endroit
        </p>
      </div>
      <p className=' text-md lg:text-2xl py-6 antialiased leading-relaxed  -tracking-tight '>
        Ne vous déplacez plus ! Peu importe où vous êtes, wip vous
        offre un catalogue de service sur mesure gagnez du temps
        faites des économies et comparez vos prix.
      </p>
      <button
        onClick={() => {
          router.push('/wipauto');
        }}
        className='btn btn-warning hover:bg-orange-400 tracking-widest '>
        DECOUVRIR
      </button>
    </section>
  );
}

export function Certifie(params) {
  return (
    <div className='mt-2 flex items-center gap-4 '>
      <p className='text-orange-300 text-sm lg:text-lg '>
        &copy; wip - 2022 - tous droits réservés
      </p>
      <span>
        {' '}
        <Image
          src={'/img/certifie.svg'}
          alt='illustration'
          width={'18'}
          height={'18'}
          priority
        />{' '}
      </span>
    </div>
  );
}
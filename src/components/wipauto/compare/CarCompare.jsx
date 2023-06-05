import Image from 'next/image';
import Phone from '../svg/Phone';
import Mail from '../svg/Mail';
import Opening from '../svg/Opening';
import Localisation from '../svg/Localisation';

export default function CarCompare() {
  return (
    <div className='w-36 p-2 flex flex-col'>
      {/* image */}
      <div className='h-20 bg-slate-300 relative '>
        <Image fill alt='illustration' src={'/img/voiture.png'} />
      </div>
      {/* nom et marque du  véhicule */}
      <h1 className='text-center'>toyota avensis</h1>
      {/* information sur le vendeur */}
      <div className='p-3 flex flex-col gap-1 '>
        {/* nom */}
        <div className='text-center'>made service</div>
        {/* tel */}
        <div className='flex-info'>
          <Phone />
          <p>0775689</p>
        </div>
        {/* email */}
        <div className='flex-info'>
          <Mail />
          <p>0775689</p>
        </div>
        {/* lieu */}
        <div className='flex-info'>
          <Localisation />
          <p>0775689</p>
        </div>
        {/* horaire */}
        <div className='flex-info'>
          <Opening />
          <p>0775689</p>
        </div>
        {/* prix */}
        <p>25000 fcfa</p>
      </div>
    </div>
  );
}

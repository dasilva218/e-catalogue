import Image from 'next/image';
import { numStr } from '@/libs/helpers';

export default function CarCompare({ img, marque, model, price }) {
  return (
    <div className='w-36 p-2 flex flex-col'>
      {/* image */}
      <div className='h-20 bg-slate-300 relative '>
        <Image fill alt='illustration' src={`/img/vehicles/${img[0]}`} />
      </div>
      {/* nom et marque du  véhicule */}
      <h1 className='text-center'>
        {marque} {model}
      </h1>
      {/* information sur le vendeur */}
      <div className='p-3 flex flex-col gap-1 '>
        {/* nom */}
        
        {/* prix */}
        <p>{numStr(price)} FCFA </p>
      </div>
    </div>
  );
}

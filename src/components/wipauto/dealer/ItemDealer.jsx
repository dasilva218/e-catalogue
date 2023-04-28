import Image from 'next/image';
import Phone from '../svg/Phone';
import Mail from '../svg/Mail';
import Localisation from '../svg/Localisation';
import Opening from '../svg/Opening';

function ItemDealer({ value }) {
  return (
    <div className='card w-full border border-blue-700 bg-slate-300  shadow-xl'>
      <figure className='px-3 pt-3'>
        <img
          src='/upload/logoDealers/autocar'
          alt='Shoes'
          className='rounded-xl'
        />
      </figure>
      <div className='card-body items-center text-black text-center'>
        <h2 className='card-title'>{value.name}</h2>
        <Infos value={value} />
        <div className='card-actions mt-5'>
          <button className='btn btn-primary'>
            voir les véhicules
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDealer;

function Infos({ value }) {
  return (
    <div className='flex flex-col items-center gap-3'>
      <div className='flex items-center gap-3'>
        <Phone />
        <p>{value.phone}</p>
      </div>
      <div className='flex items-center gap-3'>
        <Mail />
        <p>{value.email}</p>
      </div>
      <div className='flex items-center gap-3'>
        <Localisation />
        <p>{value.district}</p>
      </div>
      <div className='flex items-center gap-3'>
        <Opening />
        <p>
          ouvert de {value.time.open} à {value.time.close}{' '}
        </p>
      </div>
    </div>
  );
}

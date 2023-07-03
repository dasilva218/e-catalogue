import Image from 'next/image';
import Phone from '../svg/Phone';
import Mail from '../svg/Mail';
import Localisation from '../svg/Localisation';
import Opening from '../svg/Opening';
import { useRouter } from 'next/router';

function ItemDealer({
  vente,
  _id,
  name,
  district,
  city,
  phone,
  email,
  time,
  logo,
}) {
  //state
  const ROUTE = useRouter();
  // events
  const LOOKCAR = (id) => {
    ROUTE.push(
      `/wipauto/concessionnaires/vehicules?id=${id}&service=${vente}`
    );
  };
  return (
    <div className=' w-full border md:w-1/2 lg:w-auto shadow-xl'>
      <figure className='h-56 relative '>
        <Image src={logo} alt='Shoes' fill />
      </figure>
      <div className='card-body items-center text-black text-center'>
        <h2 className='card-title'>{name}</h2>
        <Infos value={{ email, time, phone, district, city }} />
        <div className='card-actions mt-5'>
          <button
            onClick={() => LOOKCAR(_id)}
            className='btn btn-primary'>
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
        <p>
          {value.district} {value.city}
        </p>
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

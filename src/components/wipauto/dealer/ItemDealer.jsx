import Image from 'next/image';
import Phone from '../svg/Phone';
import Mail from '../svg/Mail';
import Localisation from '../svg/Localisation';
import Opening from '../svg/Opening';

function ItemDealer() {
  return (
    <div className='card w-full border border-blue-700 bg-slate-300  shadow-xl'>
      <figure className='px-3 pt-3'>
        <img
          src='/upload/logoDealers/360_F_431603644_xd9h5aAzpHEzIQ6gCVxJwhOovhHg8sHw.jpg'
          alt='Shoes'
          className='rounded-xl'
        />
      </figure>
      <div className='card-body items-center text-black text-center'>
        <h2 className='card-title'>made service</h2>
        <Infos />
        <div className='card-actions mt-5'>
          <button className='btn btn-primary'>voir les véhicules</button>
        </div>
      </div>
    </div>
  );
}

export default ItemDealer;

function Infos() {
  return (
    <div className='flex flex-col items-center gap-3'>
      <div className='flex items-center gap-3'>
        <Phone />
        <p>0778888</p>
      </div>
      <div className='flex items-center gap-3'>
        <Mail />
        <p>0778888</p>
      </div>
      <div className='flex items-center gap-3'>
        <Localisation />
        <p>0778888</p>
      </div>
      <div className='flex items-center gap-3'>
        <Opening />
        <p>0778888</p>
      </div>
    </div>
  );
}

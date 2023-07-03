import connectMongo from '@/backend/database/dbConnect';
import PARTICULARS from '@/backend/model/particular/particular';
import RENTCARP from '@/backend/model/particular/postVehicules';
import SALECARP from '@/backend/model/particular/salecarparticular';
import NAvBarAuto from '@/components/wipauto/Navbar';
import NavPage from '@/components/wipauto/particuliers/navpage/NavPage';
import Door from '@/components/wipauto/svg/Door';
import Fuel from '@/components/wipauto/svg/Fuel';
import Speed from '@/components/wipauto/svg/Speed';
import { useState } from 'react';

export default function ParticularDetails({ Proprietaire, CAR }) {
  const [car, setCar] = useState(CAR);
  const [owner, setOwner] = useState(Proprietaire);
  console.log(car);
  console.log(owner);
  return (
    <main className='max-h-full bg-white'>
      <NAvBarAuto />
      <NavPage titre={'détails voiture'} />
      <section className='bg-white h-screen'>
        {/* détails */}
        <div className='p-3'>
          <div className=''>
            <h2 className='text-2xl'>
              {' '}
              {car.marque} {car.model} {car.year}
            </h2>
            <div className='flex-element'>
              <Speed />
              <h2>{car.transmission}</h2>
            </div>
            <div className='flex-element'>
              <Door />
              <h2>{car.door}</h2>
            </div>
            <div className='flex-element'>
              <Fuel />
              <h2>{car.fuel}</h2>
            </div>
          </div>
          {/* propriétaire */}
          <div className=''>
            <h2>{owner.name}</h2>
            <p>{owner.phone}</p>
            <p>{owner.email}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export async function getServerSideProps({ res, query }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  connectMongo().catch(() =>
    res.status(405).json({ error: 'erreure dans la connexion' })
  );

  const [id, vente] = query.slug;

  let CAR = null;
  if (vente === 'true') {
    CAR = await RENTCARP.findById(id);
  } else {
    CAR = await SALECARP.findById(id);
  }

  const Proprietaire = await PARTICULARS.findById(
    CAR.foreign_key_dealer
  );

  console.log(CAR);
  console.log(Proprietaire);

  return {
    props: {
      CAR: JSON.parse(JSON.stringify(CAR)),
      Proprietaire: JSON.parse(JSON.stringify(Proprietaire)),
    },
  };
}

import { TableCar } from '@/backend/TableCar';
import connectMongo from '@/backend/database/dbConnect';
import CARDEALER from '@/backend/model/dealer/carsDealer';
import DEALERS from '@/backend/model/dealer/dealer';
import Layout from '@/components/wipauto/admin/Layout';
import { getSession } from 'next-auth/react';
import { createContext, useState } from 'react';

export const contextDealerDashboard = createContext({});

export default function Dashboard({ DEALER, carSale, carRent }) {
  // state
  const [dealer, setDealer] = useState(DEALER);
  const [carSales, setCarSales] = useState(carSale);
  const [carRents, setCarRents] = useState(carRent);
  const store = {
    dealer,
    carSales,
    carRents,
    setCarRents,
    setCarSales,
  };
  console.log(carRents);
  console.log(carSales);

  // rendu
  return (
    <contextDealerDashboard.Provider value={store}>
      <Layout>
        <div className='h-full p-11 overflow-auto'>
          <div>
            <div className='mt-8 text-gray-100 flex items-center justify-between'>
              <h2 className=' text-lg '>
                Liste des véhicules à vendre
              </h2>
              <div className='btn hover:text-fuchsia-600'>
                Ajouter un véhicule
              </div>
            </div>
            <div className='w-full h-80 mt-2 p-5 overflow-auto bg-slate-200'>
              <TableCar carSales={carSales} />
            </div>
          </div>
          {/*  */}
          <div>
            <div className='mt-8 text-gray-100 flex items-center justify-between'>
              <h2 className=' text-lg '>Véhicules en location</h2>
              <div className='btn hover:text-fuchsia-600'>
                Ajouter un véhicule
              </div>
            </div>
            <div className='w-full h-80 mt-2 p-5 overflow-auto bg-slate-200'>
              <TableCar carSales={carRents} />
            </div>
          </div>
        </div>
      </Layout>
    </contextDealerDashboard.Provider>
  );
}

export async function getServerSideProps({ req, res }) {
  // connexion a mongodb
  connectMongo().catch(() =>
    res.status(405).json({ error: 'erreure dans la connexion' })
  );
  // gestion du cache
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  // gestion de la session de l'utilisateur
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: '/wipauto/admin/concessionnaire/connexion',
        permanent: false,
      },
    };
  }

  let carSale = [];
  let carRent = [];

  const DEALER = await DEALERS.findOne({ email: session.user.email });
  const { _id, rent, sale } = DEALER;

  if (rent && sale) {
    carSale = await CARDEALER.find({
      foreign_key_dealer: _id,
      service: 'vente',
    });
    carRent = await CARDEALER.find({
      foreign_key_dealer: _id,
      service: 'location',
    });
  } else if (rent && !sale) {
    carRent = await CARDEALER.find({
      foreign_key_dealer: _id,
      service: 'location',
    });
  } else if (!rent && sale) {
    carSale = await CARDEALER.find({
      foreign_key_dealer: _id,
      service: 'vente',
    });
  }

  return {
    props: {
      DEALER: JSON.parse(JSON.stringify(DEALER)),
      carSale: JSON.parse(JSON.stringify(carSale)),
      carRent: JSON.parse(JSON.stringify(carRent)),
    },
  };
}

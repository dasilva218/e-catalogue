import connectMongo from '@/backend/database/dbConnect';
import DEALERS from '@/backend/model/dealer/dealer';
import RENTCARDEALER from '@/backend/model/dealer/rentcardealer';
import SALECARDEALER from '@/backend/model/dealer/salecardealer';
import Layout from '@/components/wipauto/admin/Layout';
import { getSession } from 'next-auth/react';
import { createContext, useState } from 'react';

export const contextDealer = createContext({});

export default function Dashboard({ DEALER, carSale, carRent }) {
  // state
  const [dealer, setDealer] = useState(DEALER);

  // rendu
  return (
    <contextDealer.Provider value={{ dealer }}>
      <Layout>
        <div className=''></div>
        <div>
          <h1>welcomme to the dashboard</h1>
        </div>
      </Layout>
    </contextDealer.Provider>
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
    carSale = await SALECARDEALER.find({ foreign_key_dealer: _id });
    carRent = await RENTCARDEALER.find({ foreign_key_dealer: _id });
  } else if (rent && !sale) {
    carRent = await RENTCARDEALER.find({ foreign_key_dealer: _id });
  } else if (!rent && sale) {
    carSale = await SALECARDEALER.find({ foreign_key_dealer: _id });
  }

  return {
    props: {
      DEALER: JSON.parse(JSON.stringify(DEALER)),
      carSale: JSON.parse(JSON.stringify(carSale)),
      carRent: JSON.parse(JSON.stringify(carRent)),
    },
  };
}

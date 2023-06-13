import connectMongo from '@/backend/database/dbConnect';
import DEALERS from '@/backend/model/dealer/dealer';
import NAvBarAuto from '@/components/wipauto/Navbar';
import Hero from '@/components/wipauto/dealer/Hero';
import ItemDealer from '@/components/wipauto/dealer/ItemDealer';
import Filter from '@/components/wipauto/filter/Filter';
import Footer from '@/components/wipauto/footer/Footer';
import Tab from '@/components/wipauto/navigation/Tab';
import { getDealers } from '@/libs/helpers';
import { createContext, useContext, useState } from 'react';

const DealerContext = createContext(null);

export default function Dealers({ DEALERSALE, DEALERENT }) {
  const [Toggle, setToggle] = useState(true);
  const [dealersale, setDealersale] = useState(DEALERSALE);
  const [dealerent, setDealerent] = useState(DEALERENT);
  const storeDealer = { dealersale, dealerent };

  return (
    <DealerContext.Provider value={storeDealer}>
      <main className='bg-white'>
        <NAvBarAuto />
        <Hero />
        <div className='h-11 bg-white'>
          <Tab state={Toggle} action={setToggle} />
        </div>
        <div className=''>
          <Filter />
          {Toggle ? <Vente /> : <Location />}
        </div>
        <Footer />
      </main>
    </DealerContext.Provider>
  );
}

// composant vente
const Vente = () => {
  const { dealersale } = useContext(DealerContext);
  return (
    <section className='bg-white p-5'>
      <div className='flex flex-col  md:flex-row lg:flex-row lg:flex-wrap lg:gap-5 lg:justify-center md:flex-wrap gap-y-3'>
        {dealersale.map((item) => (
          <ItemDealer key={item._id} vente={'vente'} {...item} />
        ))}
      </div>
    </section>
  );
};

// composant location
const Location = () => {
  const { dealerent } = useContext(DealerContext);
  return (
    <section className='bg-white p-5'>
      <div className='flex flex-col  md:flex-row lg:flex-row lg:flex-wrap lg:gap-5 lg:justify-center md:flex-wrap gap-y-3'>
        {dealerent.map((item) => (
          <ItemDealer key={item._id} vente={'location'} {...item} />
        ))}
      </div>
    </section>
  );
};

export async function getServerSideProps({ res }) {
  const dealers = await getDealers();
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  connectMongo().catch(() =>
    res.status(405).json({ error: 'erreure dans la connexion' })
  );

  const DEALERSALE = await DEALERS.find({ sale: true });
  const DEALERENT = await DEALERS.find({ rent: true });

  return {
    props: {
      DEALERSALE: JSON.parse(JSON.stringify(DEALERSALE)),
      DEALERENT: JSON.parse(JSON.stringify(DEALERENT)),
    },
  };
}

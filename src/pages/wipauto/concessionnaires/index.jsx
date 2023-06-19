import connectMongo from '@/backend/database/dbConnect';
import DEALERS from '@/backend/model/dealer/dealer';
import NAvBarAuto from '@/components/wipauto/Navbar';
import Hero from '@/components/wipauto/dealer/Hero';
import ItemDealer from '@/components/wipauto/dealer/ItemDealer';
import Filter from '@/components/wipauto/filter/Filter';
import Footer from '@/components/wipauto/footer/Footer';
import Tab from '@/components/wipauto/navigation/Tab';
import { getDealers } from '@/libs/helpers';
import clsx from 'clsx';
import { createContext, useContext, useState } from 'react';

export const DealerContext = createContext(null);

export default function Dealers({ DEALERSALE, DEALERENT }) {
  const [Toggle, setToggle] = useState(true);
  const [dealersale, setDealersale] = useState(DEALERSALE);
  const [dealerent, setDealerent] = useState(DEALERENT);
  const [selectedRadio, setSelectedRadio] = useState('');
  const storeDealer = {
    dealersale,
    dealerent,
    selectedRadio,
    setSelectedRadio,
  };

  return (
    <DealerContext.Provider value={storeDealer}>
      <main className={clsx('bg-white')}>
        <NAvBarAuto />
        <Hero />
        <div className='h-11 bg-white'>
          <Tab state={Toggle} action={setToggle} />
        </div>
        <div className={clsx('lg:p-10')}>
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
  const { dealersale, selectedRadio } = useContext(DealerContext);
  return (
    <section className='bg-white p-5'>
      <div className='flex flex-col  md:flex-row lg:flex-row lg:flex-wrap lg:gap-5 lg:justify-center md:flex-wrap gap-y-3'>
        {dealersale
          .filter((item) => item.city.includes(selectedRadio))
          .map((item) => (
            <ItemDealer key={item._id} vente={'vente'} {...item} />
          ))}
      </div>
    </section>
  );
};

// composant location
const Location = () => {
  const { dealerent, selectedRadio } = useContext(DealerContext);
  return (
    <section className='bg-white p-5'>
      <div className='flex flex-col  md:flex-row lg:flex-row lg:flex-wrap lg:gap-5 lg:justify-center md:flex-wrap gap-y-3'>
        {dealerent
          .filter((item) => item.city.includes(selectedRadio))
          .map((item) => (
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

import connectMongo from '@/backend/database/dbConnect';
import RENTCARP from '@/backend/model/particular/rentcarparticular';
import SALECARP from '@/backend/model/particular/salecarparticular';
import NAvBarAuto from '@/components/wipauto/Navbar';
import Hero from '@/components/wipauto/dealer/Hero';
import Tab from '@/components/wipauto/navigation/Tab';
import { numStr } from '@/libs/helpers';
import { useRouter } from 'next/router';
import { createContext, useContext, useState } from 'react';

const ParticularContext = createContext(null);

export default function Particulars({ CARVENTE, CARLOCATION }) {
  const [Toggle, setToggle] = useState(true);
  const [carvente, setCarvente] = useState(JSON.parse(CARVENTE));
  const [carlocation, setLocation] = useState(
    JSON.parse(CARLOCATION)
  );
  const ROUTER = useRouter();

  const route = (id, vente) => {
    ROUTER.push(`/wipauto/particuliers/${id}/${vente}`);
  };
  const StoreParticular = { carvente, carlocation, route };

  return (
    <ParticularContext.Provider value={StoreParticular}>
      <main className='border border-red-200'>
        <NAvBarAuto />
        <Hero section={true} />
        <div className='h-11 bg-white absolute top-40 left-4 w-11/12'>
          <Tab state={Toggle} action={setToggle} />
        </div>
        {Toggle ? <Vente /> : <Location />}
      </main>
    </ParticularContext.Provider>
  );
}

// composant vehicule en vente
const Vente = () => {
  const { carvente } = useContext(ParticularContext);
  return (
    <section className=' pt-9 pl-2 pr-2 bg-white'>
      <div className='flex flex-col gap-5'>
        {carvente.map((item) => (
          <Particularcar vente={true} key={item._id} {...item} />
        ))}
      </div>
    </section>
  );
};

// composant véhicule en location
const Location = () => {
  const { carlocation } = useContext(ParticularContext);
  return (
    <section className=' pt-9 pl-2 pr-2 bg-white'>
      <div className='flex  flex-col gap-5'>
        {carlocation.map((item) => (
          <Particularcar vente={false} key={item._id} {...item} />
        ))}
      </div>
    </section>
  );
};

const Particularcar = ({
  _id,
  marque,
  model,
  city,
  price,
  vente,
}) => {
  const { route } = useContext(ParticularContext);
  return (
    <div className=' border bg-white shadow-xl'>
      <figure className='rounded h-44 rounded-b-lg border '>
        <img
          className='h-full w-full'
          src='/img/dealer/heroimage.svg'
          alt='Shoes'
        />
      </figure>
      <div className='p-2'>
        <h2 className='card-title'>
          {marque} {model}
        </h2>
        <h2>{city}</h2>
      </div>
      <div className='border flex justify-around p-2 rounded-b-lg'>
        <p onClick={() => route(_id, vente)} className=''>
          DETAILS
        </p>
        {vente ? (
          <p>{numStr(price)} FCFA</p>
        ) : (
          <p>{numStr(price)} FCFA / jour</p>
        )}
      </div>
    </div>
  );
};

export async function getServerSideProps({ res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  connectMongo().catch(() =>
    res.status(405).json({ error: 'erreure dans la connexion' })
  );

  const CARVENTE = await RENTCARP.find({});
  const CARLOCATION = await SALECARP.find({});

  return {
    props: {
      CARVENTE: JSON.stringify(CARVENTE),
      CARLOCATION: JSON.stringify(CARLOCATION),
    },
  };
}

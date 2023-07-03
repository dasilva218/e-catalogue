// import connectMongo from '@/backend/database/dbConnect';
import NAvBarAuto from '@/components/wipauto/Navbar';
import Hero from '@/components/wipauto/dealer/Hero';
import { numStr } from '@/libs/helpers';

import { createContext, useContext, useState } from 'react';

const ParticularContext = createContext(null);

export default function Particulars() {
  return (
    <ParticularContext.Provider value={''}>
      <main className='border border-red-200'>
        <NAvBarAuto page={'particuliers'} />
        <section>
          <Hero section={true} />
        </section>
      </main>
    </ParticularContext.Provider>
  );
}

export async function getServerSideProps({ res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  /*connectMongo().catch(() =>
    res.status(405).json({ error: 'erreure dans la connexion' })
  );*/

  return {
    props: {},
  };
}

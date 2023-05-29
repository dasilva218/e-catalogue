import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

function Index() {
  const route = useRouter();
  const { id } = route.query;
  const dealers = useSelector((state) => state.dealers.dealers);
  const dealer = dealers.filter((value) => value._id === id);
  // const car = dealer[0].rent ? dealer[0].rentcar : dealer[0].salecar;

  return (
    <main>
      <div className='flex h-40 border items-center justify-around border-red-700'>
        <h1 className=''>Liste des véhicules</h1>
        <div className='border border-blue-600 w-40 h-36'>
          {/* <Image src={dealer[0].logo} fill /> */}
        </div>
      </div>
      <section>
        <Car />
      </section>
    </main>
  );
}

export default Index;

function Car(params) {
  return (
    <div className='w-40 p-3 border border-red-700'>
      <div className='w-full h-24 border border-red-700'></div>
      <div className='p-3'>
        <div className='flex gap-4'>
          <p>toyota</p>
          <p>avensis</p>
        </div>
        <div className=''>50 000 fcfa</div>
      </div>
      <div className='flex gap-5'>
        <button>Détails</button>
        <button>Comparer</button>
      </div>
    </div>
  );
}

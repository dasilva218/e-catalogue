import Door from '@/components/wipauto/svg/Door';
import Fuel from '@/components/wipauto/svg/Fuel';
import Speed from '@/components/wipauto/svg/Speed';
import { getDealers } from '@/libs/helpers';
import { setDealers } from '@/redux/slices/dealers.slice';
import Router from 'next/dist/server/router';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Index({ dealerServer }) {
  const dispatch = useDispatch();
  dispatch(setDealers(dealerServer));

  // const ROUTER = useRouter();
  // console.log(ROUTER);
  // const path = (rent, model, marque) =>
  //   ROUTER.push(
  //     `/wipauto/concessionnaires/compare?rent=${rent}&model=${model}&marque=${marque}`
  //   );
  // const { id } = ROUTER.query;
  // const dealers = useSelector((state) => state.dealers.dealers);
  // const dealer = dealers.filter((value) => value._id === id);
  // const cars = dealer[0].rent ? dealer[0].rentcar : dealer[0].salecar;
  //render
  return (
    <main>
      <div className='flex h-40 border items-center justify-around border-red-700'>
        <h1 className=''>Liste des véhicules</h1>
        <div className='border border-blue-600 w-40 h-36'>
          {/* <Image src={dealer[0].logo} fill /> */}
        </div>
      </div>
      <section className='p-3 flex justify-between gap-2 flex-wrap'>
        {/* {cars.map((item) => (
          <Car
            chemin={path}
            key={item._id}
            value={item}
            rent={dealer[0].rent}
          />
        ))} */}
      </section>
    </main>
  );
}

export default Index;

export async function getServerSideProps(ctx) {
  const dealerServer = await getDealers();

  return {
    props: {
      dealerServer,
    },
  };
}

function Car({ value, rent, chemin }) {
  const [open, setOpen] = useState(false);

  return (
    <div className='w-40 p-3 border border-red-700'>
      <div className='w-full h-24 border border-red-700'></div>
      <div className='p-3'>
        <div className='flex gap-4'>
          <p>{value.marque}</p>
          <p>{value.model}</p>
        </div>
        <div className=''>{value.price} fcfa</div>
      </div>
      <div className='flex gap-5'>
        <button onClick={() => setOpen(true)}>details</button>
        <button
          onClick={() => chemin(rent, value.model, value.marque)}>
          comparer
        </button>
      </div>
      {open && (
        <Modal
          {...value}
          open={open}
          onclose={() => setOpen(false)}
        />
      )}
    </div>
  );
}

function Modal({
  open,
  onclose,
  marque,
  model,
  price,
  door,
  fuel,
  transmission,
}) {
  return (
    <div className='fixed inset-0 p-3 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div
        onClick={onclose}
        className={`btn btn-sm btn-circle absolute right-2 top-2 `}>
        ✕
      </div>
      <div className='card p-3 w-96 bg-base-100 shadow-xl'>
        <div className='card-body flex items-center text-center'>
          <h2 className='card-title'>
            {marque} {model}
          </h2>
          <h2 className='card-title'>A partir de {price} XAF/jour</h2>
        </div>
        <div className='carousel w-full mb-5'>
          {[1, 2, 3, 4].map((item) => {
            return (
              <div
                id='slide1'
                className='carousel-item relative w-full'>
                <img
                  src='\assets\auto show (1) - Fait avec PosterMyWall.jpg'
                  className='w-full'
                />
                <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                  <a href='#slide4' className='btn btn-circle'>
                    ❮
                  </a>
                  <a href='#slide2' className='btn btn-circle'>
                    ❯
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <Property>
          <div className='flex items-center gap-2 '>
            <Door />
            <p>
              {door} {door > 1 ? 'portières' : 'portière'}
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <Speed />
            <p>{transmission}</p>
          </div>
          <div className='flex items-center gap-2'>
            <Fuel />
            <p>{fuel}</p>
          </div>
        </Property>
      </div>
      {/**Modal */}
    </div>
  );
}

function Property({ children }) {
  return (
    <div className='flex  bg-slate-100 items-center justify-around'>
      {children}
    </div>
  );
}

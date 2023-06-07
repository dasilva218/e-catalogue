import Door from '@/components/wipauto/svg/Door';
import Fuel from '@/components/wipauto/svg/Fuel';
import Speed from '@/components/wipauto/svg/Speed';
import DEALERS from '@/backend/model/dealer/dealer';
import { useRouter } from 'next/router';
import SALECARDEALER from '@/backend/model/dealer/salecardealer';
import RENTCARDEALER from '@/backend/model/dealer/rentcardealer';
import { useState } from 'react';
import Image from 'next/image';

export default function Vehicles({ DEALER, CARS, SERVICE }) {
  const [dealer, setDealer] = useState(JSON.parse(DEALER));
  const [cars, setCars] = useState(JSON.parse(CARS));
  const [service, setService] = useState(SERVICE);
  const ROUTER = useRouter();
  const path = (service, model, marque) =>
    ROUTER.push(
      `/wipauto/compare?service=${service}&model=${model}&marque=${marque}`
    );

  console.log(cars);
  console.log(dealer);
  console.log(service);
  return (
    <main>
      <div className='flex h-40 border items-center justify-around border-red-700'>
        <h1 className=''>{dealer.name}</h1>
        <div className='border border-blue-600 w-40 max-h-36'>
          <img
            className='h-full'
            src={dealer.logo}
            alt='ss'
            srcset=''
          />
        </div>
      </div>
      <section className='p-3 flex justify-between gap-2 flex-wrap'>
        {cars.map((item) => (
          <Car
            key={item._id}
            value={item}
            root={path}
            service={service}
          />
        ))}
      </section>
    </main>
  );
}

function Car({ value, service, root }) {
  const [open, setOpen] = useState(false);

  return (
    <div className='w-40 p-3 border border-red-700'>
      <div className='w-full h-24 border border-red-700'>
        <img src={value.img[0]} alt='ds' srcset='' />
      </div>
      <div className='p-3'>
        <div className='flex gap-4'>
          <p>{value.marque}</p>
          <p>{value.model}</p>
        </div>
        <div className=''>
          {service === 'location' ? (
            <p>{value.price} FCFA / jour </p>
          ) : (
            <p>{value.price} FCFA </p>
          )}
        </div>
      </div>
      <div className='flex gap-5'>
        <button onClick={() => setOpen(true)}>details</button>
        <button
          onClick={() => root(service, value.model, value.marque)}>
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

export async function getServerSideProps({ query, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  const DEALER = JSON.stringify(await DEALERS.findById(query.id));
  const CARS =
    query.service === 'location'
      ? JSON.stringify(
          await RENTCARDEALER.find({
            foreign_key_dealer: query.id,
          })
        )
      : JSON.stringify(
          await SALECARDEALER.find({
            foreign_key_dealer: query.id,
          })
        );

  return {
    props: { DEALER, CARS, SERVICE: query.service },
  };
}

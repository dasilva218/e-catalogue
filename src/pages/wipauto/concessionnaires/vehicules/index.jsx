import Door from '@/components/wipauto/svg/Door';
import Fuel from '@/components/wipauto/svg/Fuel';
import Speed from '@/components/wipauto/svg/Speed';
import DEALERS from '@/backend/model/dealer/dealer';
import { useRouter } from 'next/router';
import SALECARDEALER from '@/backend/model/dealer/salecardealer';
import RENTCARDEALER from '@/backend/model/dealer/rentcardealer';
import { useState } from 'react';
import connectMongo from '@/backend/database/dbConnect';
import { numStr } from '@/libs/helpers';
import Breadcrumb from '@/components/wipauto/breadcrumbs/Breadcrumb';
import Footer from '@/components/wipauto/footer/Footer';

export default function Vehicles({ DEALER, CARS, SERVICE }) {
  const [dealer, setDealer] = useState(JSON.parse(DEALER));
  const [cars, setCars] = useState(JSON.parse(CARS));
  const [service, setService] = useState(SERVICE);
  const ROUTER = useRouter();

  const path = (service, model, marque) =>
    ROUTER.push(
      `/wipauto/compare?service=${service}&model=${model}&marque=${marque}`
    );

  return (
    <main className='bg-white text-black'>
      <div className='flex h-40  items-center justify-around border-red-700'>
        <h1 className='lg:text-2xl'>{dealer.name}</h1>
        <div className='border border-blue-600 w-40 max-h-36'>
          <img
            className='h-full'
            src={dealer.logo}
            alt='ss'
            srcset=''
          />
        </div>
      </div>
      <div className='flex justify-center'>
        <Breadcrumb
          onClick={() => ROUTER.back()}
          page={'Détails véhicule'}
        />
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
      <Footer />
    </main>
  );
}

function Car({ value, service, root }) {
  console.log(service);
  const [open, setOpen] = useState(false);

  return (
    <div className='w-40 lg:w-72 p-3 shadow-xl'>
      <div className='w-full h-40'>
        <img className='w-full' src={value.img[0]} alt='ds' />
      </div>
      <div className='p-3 flex flex-col gap-3'>
        <div className='flex text-sm font-bold gap-2'>
          <p>{value.marque}</p>
          <p>{value.model}</p>
          <p>{value.year}</p>
        </div>
        <div className='text-sm font-bold'>
          {service === 'location' ? (
            <p>{numStr(value.price)} FCFA / jour </p>
          ) : (
            <p>{numStr(value.price)} FCFA </p>
          )}
        </div>
      </div>
      <div className='flex gap-5 justify-evenly text-sm font-bold'>
        <button
          className='btn btn-xs btn-ghost btn-outline'
          onClick={() => setOpen(true)}>
          details
        </button>
        <button
          className='btn btn-xs btn-ghost btn-outline'
          onClick={() => root(service, value.model, value.marque)}>
          comparer
        </button>
      </div>
      {open && (
        <Modal
          {...value}
          service={service}
          onclose={() => setOpen(false)}
        />
      )}
    </div>
  );
}

function Modal({
  service,
  onclose,
  marque,
  model,
  price,
  door,
  fuel,
  transmission,
  img,
}) {
  return (
    <div className='fixed inset-0 p-3 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div
        onClick={onclose}
        className={`btn btn-sm btn-circle absolute right-2 top-2 `}>
        ✕
      </div>
      <div className='card p-3 w-1/2 bg-white shadow-xl'>
        <div className='card-body flex items-center text-center'>
          <h2 className='card-title'>
            {marque} {model}
          </h2>
          {service === 'vente' ? (
            <h2 className='card-title'>
              A partir de {numStr(price)} FCFA{' '}
            </h2>
          ) : (
            <h2 className='card-title'>
              A partir de {numStr(price)} FCFA / jour
            </h2>
          )}
        </div>
        <div className='carousel w-full mb-5'>
          {img.map((item, index) => {
            return (
              <div
                key={index}
                id='slide1'
                className='carousel-item relative w-full'>
                <img src={item} className='w-full' />
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

  connectMongo().catch(() =>
    res.status(405).json({ error: 'erreure dans la connexion' })
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

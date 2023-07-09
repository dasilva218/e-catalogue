import Door from '@/components/wipauto/svg/Door';
import Fuel from '@/components/wipauto/svg/Fuel';
import Speed from '@/components/wipauto/svg/Speed';
import DEALERS from '@/backend/model/dealer/dealer';
import { useRouter } from 'next/router';
import { useState } from 'react';
import connectMongo from '@/backend/database/dbConnect';
import { numStr } from '@/libs/helpers';
import Breadcrumb from '@/components/wipauto/breadcrumbs/Breadcrumb';
import Footer from '@/components/wipauto/footer/Footer';
import CARDEALER from '@/backend/model/dealer/carsDealer';
import Image from 'next/image';

export default function Vehicles({ DEALER, CARS, SERVICE }) {
  const [dealer, setDealer] = useState(DEALER);
  const [cars, setCars] = useState(CARS);
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
        <div className=' relative w-40 h-36'>
          <Image alt='ss' fill src={dealer.logo} />
        </div>
      </div>
      <div className='flex justify-center'>
        <Breadcrumb
          onClick={() => ROUTER.push("/wipauto/concessionnaires")}
          page={'Détails véhicule'}
        />
      </div>
      {/* {cars ?? (
        <div className='flex justify-center items-center h-40'>
          <h1 className='text-3xl'>Aucun véhicules</h1>
        </div>
      )} */}
      <section className='p-3 flex justify-between gap-2 flex-wrap'>
        {cars?.map((item) => (
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
  const [open, setOpen] = useState(false);
  return (
    <div className='w-40 lg:w-72 p-3 shadow-xl'>
      <div className='w-full relative h-40'>
        <Image
          className='w-full'
          src={`/img/vehicles/${value.img[0]}`}
          alt='ds'
          fill
        />
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
        <div className='carousel w-full'>
          {img.map((item, index) => (
            <div
              key={item._id}
              id={`slide${index}`}
              className='carousel-item relative w-full h-64'>
              <Image src={`/img/vehicles/${item}`} alt='' fill />
              <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                <a
                  href={`#slide${index - 1}`}
                  className='btn btn-circle'>
                  ❮
                </a>
                <a
                  href={`#slide${index + 1}`}
                  className='btn btn-circle'>
                  ❯
                </a>
              </div>
            </div>
          ))}
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

  const DEALER = JSON.parse(
    JSON.stringify(await DEALERS.findById(query.id))
  );
  const CARS =
    query.service === 'location'
      ? JSON.parse(
          JSON.stringify(
            await CARDEALER.find({
              foreign_key_dealer: query.id,
              service: query.service,
            })
          )
        )
      : JSON.parse(
          JSON.stringify(
            await CARDEALER.find({
              foreign_key_dealer: query.id,
              service: query.service,
            })
          )
        );

  return {
    props: { DEALER, CARS, SERVICE: query.service },
  };
}

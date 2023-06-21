import { numStr } from '@/libs/helpers';
import { useContext } from 'react';
import { contextDealer } from '@/pages/wipauto/admin/concessionnaire/dashboard';

export function TableCar({ carSales }) {
  return (
    <div className='w*full h-full'>
      <table className='table h-full w-full'>
        <thead>
          <tr>
            <th>
              {/* <label>
                <input type='checkbox' className='checkbox' />
              </label> */}
            </th>
            <th>marque / model</th>
            <th>caractéristique</th>
            <th>prix</th>
          </tr>
        </thead>
        <tbody>
          {carSales.map((item, index) => (
            <Tr key={index} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Tr({ _id, marque, model, price, fuel, service }) {
  const { setCarSales, setCarRents } = useContext(contextDealer);
  // suppression d'un véhicule
  // const Handledelete = async (id, service) => {
  //   connectMongo().catch(() =>
  //     res.status(405).json({ error: 'erreure dans la connexion' })
  //   );

  //   let confirm = window.confirm('Le voulez vous vraiment ?');
  //   if (confirm) {
  //     // const Response = await CARDEALER.deleteOne(id);
  //     if (service === 'vente') {
  //       setCarSales(car);
  //     } else if (service === 'location') {
  //       setCarRents(car);
  //     }
  //   }
  // };

  return (
    <tr>
      <td>
        <button
          onClick={() => Handledelete(_id, service)}
          className='cursor'>
          supprimer
        </button>
      </td>
      <td>
        <div className='flex items-center space-x-3'>
          <div className='avatar'>
            {/* <div className='mask  mask-squircle w-12 h-12'>
              <img
                className='object-contain'
                src={img}
                alt='Avatar Tailwind CSS Component'
              />
            </div> */}
          </div>
          <div>
            <div className='font-bold'>{marque}</div>
            <div className='text-sm opacity-50'>{model}</div>
          </div>
        </div>
      </td>
      <td>
        {'transmission'}
        <br />
        <span className='badge badge-ghost badge-sm'>{fuel}</span>
      </td>
      <td> {numStr(price)} FCFA </td>
    </tr>
  );
}

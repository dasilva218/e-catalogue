import { DealerContext } from '@/pages/wipauto/concessionnaires';
import clsx from 'clsx';
import { useContext } from 'react';

function Filter() {
  const VILLE = ['libreville', 'owendo', 'akanda'];
  const { selectedRadio, setSelectedRadio } =
    useContext(DealerContext);
  return (
    <div className='flex border justify-between mt-3 bg-white'>
      {selectedRadio ? (
        <p
          onClick={() => setSelectedRadio('')}
          className={clsx(
            'text-white',
            'flex justify-center',
            'items-center',
            'btn btn-info',
            'order-2',
            'p-2',
            'text-xs'
          )}>
          annuler le filtre
        </p>
      ) : (
        <p
          className={clsx(
            'text-white',
            'flex justify-center',
            'items-center',
            'order-2',
            'bg-orange-400',
            'p-2',
            'text-xs'
          )}>
          filtre par commune
        </p>
      )}

      <form className=' bg-white p-2 flex gap-6 text-gray-950'>
        {VILLE.map((item, index) => (
          <p key={index} className='flex-filter'>
            <input
              id={item}
              checked={item === selectedRadio}
              type='radio'
              name='radio-6'
              className='radio radio-warning'
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={item}>{item}</label>
          </p>
        ))}
      </form>
    </div>
  );
}

export default Filter;

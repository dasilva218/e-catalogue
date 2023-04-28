import { useForm } from 'react-hook-form';

function Filter({ action }) {
  const {
    register,
    getValues,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onchange' });
  action(getValues('radio-6'));

  return (
    <div className='flex border '>
      <p className='text-white bg-orange-300 p-2 text-xs'>
        filtre par commune
      </p>
      <form className=' p-2 flex gap-6 text-gray-950'>
        <p className='flex-filter'>
          <input
            value="libreville"
            id='libreville'
            type='radio'
            {...register('radio-6')}
            className='radio radio-warning input-size'
          />
          <label htmlFor='libreville'>Libreville</label>
        </p>
        <p className='flex-filter'>
          <input
            value={'akanda'}
            id='akanda'
            type='radio'
            {...register('radio-6')}
            className='radio radio-warning input-size'
          />
          <label htmlFor='akanda'>Akanda</label>
        </p>
        <p className='flex-filter'>
          <input
            value={'owendo'}
            id='owendo'
            type='radio'
            {...register('radio-6')}
            className='radio radio-warning input-size'
          />
          <label htmlFor='owendo'>Owendo</label>
        </p>
      </form>
    </div>
  );
}

export default Filter;

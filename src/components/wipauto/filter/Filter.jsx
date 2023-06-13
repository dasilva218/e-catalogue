function Filter() {
  return (
    <div className='flex justify-between mt-3 bg-white'>
      <p className='text-white bg-orange-300 order-2 p-2 text-xs'>
        filtre par commune
      </p>
      <form className=' bg-white p-2 flex gap-6 text-gray-950'>
        <p className='flex-filter'>
          <input
            id='libreville'
            type='radio'
            name='radio-6'
            className='radio radio-warning'
          />
          <label htmlFor='libreville'>Libreville</label>
        </p>
        <p className='flex-filter'>
          <input
            value={'akanda'}
            id='akanda'
            type='radio'
            className='radio radio-warning input-size'
          />
          <label htmlFor='akanda'>Akanda</label>
        </p>
        <p className='flex-filter'>
          <input
            value={'owendo'}
            id='owendo'
            type='radio'
            className='radio radio-warning input-size'
          />
          <label htmlFor='owendo'>Owendo</label>
        </p>
      </form>
    </div>
  );
}

export default Filter;

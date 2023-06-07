import { useSelector } from 'react-redux';
import ItemDealer from './ItemDealer';

function Location() {
  // state
  const dealers = useSelector((state) => state.dealers.dealers);

  const dealersRent = dealers.filter((value) => value.rent === true);
  //render
  return (
    <div className='p-3 '>
      <div className='flex flex-col gap-2 justify-between  border'>
        {dealersRent.map((value) => (
          <ItemDealer
            key={value._id}
            service={'location'}
            value={value}
          />
        ))}
      </div>
    </div>
  );
}

export default Location;

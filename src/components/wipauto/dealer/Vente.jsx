import { useSelector } from 'react-redux';
import ItemDealer from './ItemDealer';

function Vente() {
  // state
  const dealers = useSelector((state) => state.dealers.dealers);

  const dealersSale = dealers.filter((value) => value.sale === true);
  //render
  return (
    <div className='p-3 '>
      <div className='flex flex-col md:flex-row gap-2 justify-between  border'>
        {dealersSale.map((value) => (
          <ItemDealer
            key={value._id}
            service={'vente'}
            value={value}
          />
        ))}
      </div>
    </div>
  );
}

export default Vente;

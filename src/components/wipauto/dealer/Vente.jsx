import ItemDealer from './ItemDealer';

function Vente() {
  return (
    <div className='p-3 '>
      dui
      <div className='flex flex-col gap-2 justify-between  border'>
        {[1, 2, 3, 4, 5].map(() => (
          <ItemDealer />
        ))}
      </div>
    </div>
  );
}

export default Vente;

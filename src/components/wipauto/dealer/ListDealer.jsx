import { useState } from 'react';
import Tab from '../navigation/Tab';
import Vente from './Vente';
import Location from './Location';

function ListDealer() {
  // state
  const [Toggle, setToggle] = useState(true);
  // event

  // render
  return (
    <section className='p-3 bg-white '>
      {/* components button */}
      <Tab state={Toggle} action={setToggle} />
      {Toggle ? <Vente /> : <Location />}
    </section>
  );
}

export default ListDealer;

import NAvBarAuto from '@/components/wipauto/Navbar';
import Hero from '@/components/wipauto/dealer/Hero';
import ListDealer from '@/components/wipauto/dealer/ListDealer';
import { getDealers } from '@/libs/helpers';
import { setDealers } from '@/redux/slices/dealers.slice';
import { useDispatch } from 'react-redux';

function Dealers({ dealers }) {
  const dispatch = useDispatch();
  dispatch(setDealers(dealers));

  return (
    <main className=''>
      <NAvBarAuto />
      <Hero />
      <ListDealer />
    </main>
  );
}

export default Dealers;

export async function getServerSideProps(ctx) {
  const dealers = await getDealers();

  return {
    props: {
      dealers,
    },
  };
}

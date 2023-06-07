import NAvBarAuto from '@/components/wipauto/Navbar';
import Hero from '@/components/wipauto/dealer/Hero';
import Tab from '@/components/wipauto/navigation/Tab';

export default function () {
  return (
    <main className='border border-red-200'>
      <NAvBarAuto />
      <Hero section={true} />
      <div className='h-11 bg-white absolute top-40 left-4 w-11/12'>
        <Tab/>
      </div>
      {/* <div className='h-56 pt-9 bg-white'>
        dddd
      </div> */}
    </main>
  );
}

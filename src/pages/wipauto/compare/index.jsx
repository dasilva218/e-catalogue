import CarCompare from '@/components/wipauto/compare/CarCompare';

export default function Index() {
  return (
    <main className='bg-white'>
      <nav className='h-11 flex items-center text-orange-400'>
        <h1>WIP</h1>
      </nav>
      <div className="h-28 bg-[url('/img/backcompare.png')] "></div>
      <section className='p-3'>
        <div className='flex flex-wrap justify-around border border-red-600'>
          {[1, 2, 3, 4].map((item) => (
            <CarCompare />
          ))}
        </div>
      </section>
    </main>
  );
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      data: null,
    },
  };
}

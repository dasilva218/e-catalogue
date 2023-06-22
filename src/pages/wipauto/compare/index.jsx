import connectMongo from '@/backend/database/dbConnect';
// import DEALERS from '@/backend/model/dealer/dealer';
import SALECARDEALER from '@/backend/model/dealer/salecardealer';
import CarCompare from '@/components/wipauto/compare/CarCompare';

export default function Index({ CARCOMPARE }) {
  console.log(CARCOMPARE);
  return (
    <main className='bg-white'>
      <nav className='h-11 flex items-center text-orange-400'>
        <h1>WIP</h1>
      </nav>
      <div className="h-28 bg-[url('/img/backcompare.png')] "></div>
      <section className='p-3'>
        <div className='flex flex-wrap justify-around border border-red-600'>
          {CARCOMPARE.map((item) => (
            <CarCompare {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}

export async function getServerSideProps(ctx) {
  const { marque, model, service } = ctx.query;

  connectMongo().catch(() =>
    res.status(405).json({ error: 'erreure de la connexion' })
  );

  const CARCOMPARE = await SALECARDEALER.find({
    marque: marque,
    model: model,
  });

  return {
    props: {
      CARCOMPARE: JSON.parse(JSON.stringify(CARCOMPARE)),
    },
  };
}

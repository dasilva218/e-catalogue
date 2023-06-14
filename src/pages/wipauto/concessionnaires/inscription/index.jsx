import NAvBarAuto from '@/components/wipauto/Navbar';

export default function Inscription() {
  return (
    <main className=''>
      <NAvBarAuto />
      <section className='h-28 bg-no-repeat bg-[url("/img/backcompare.png")] p-4 '></section>
      <Breadcrumbs />
      <section className='bg-white p-3'>
        <h1 className='flex justify-center text-black text-2xl bg-white p-5'>
          Création de compte
        </h1>
        <div className='card mt-4 h-60 border border-red-800 bg-white shadow-xl'>
          
        </div>
      </section>
    </main>
  );
}

function Breadcrumbs(params) {
  return (
    <div className='text-md font-bold flex justify-center text-black bg-slate-300 breadcrumbs'>
      <ul className='text-center'>
        <li>
          <a>Accueil</a>
        </li>
        <li>
          <a>Documents</a>
        </li>
      </ul>
    </div>
  );
}

import { contextDealerDashboard } from '@/pages/wipauto/admin/concessionnaire/dashboard';
import { signOut } from 'next-auth/react';
import { useContext } from 'react';
import AddIcon from '@mui/icons-material/Add';

function Layout({ children }) {
  const { setOpenModal, OpenModal } = useContext(
    contextDealerDashboard
  );

  return (
    <main className=' border h-screen overflow-hidden '>
      <Nav />
      <div className='flex h-full '>
        <aside className='p-5 bg-slate-600'>
          <ul className='menu w-56 h-full rounded-box'>
            <li
              className='btn hover:text-fuchsia-600'
              onClick={() => setOpenModal(!OpenModal)}>
              <span>Ajouter un véhicule</span>
            </li>
          </ul>
        </aside>
        <aside className='h-full pb-10 bg-cyan-700 flex-grow overflow-auto '>
          {children}
        </aside>
      </div>
    </main>
  );
}

export default Layout;

function Nav() {
  const { dealer } = useContext(contextDealerDashboard);
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl'>
          Bienvenu {dealer.name.toUpperCase()}
        </a>
      </div>
      <div className='flex-none'>
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            className='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow'>
            <div className='card-body'>
              <span className='font-bold text-lg'>8 Items</span>
              <span className='text-info'>Subtotal: $999</span>
              <div className='card-actions'>
                <button className='btn btn-primary btn-block'>
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='dropdown dropdown-end'>
          <label
            tabIndex={0}
            className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <img src={dealer.logo} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
            <li>
              {/* <a className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </a> */}
            </li>

            <li>
              <button
                onClick={() =>
                  signOut({
                    callbackUrl:
                      '/wipauto/admin/concessionnaire/connexion',
                  })
                }>
                Déconnexion
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

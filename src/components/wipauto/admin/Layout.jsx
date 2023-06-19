import { contextDealer } from '@/pages/wipauto/admin/concessionnaire/dashboard';
import { signOut } from 'next-auth/react';
import { useContext } from 'react';

export default function Layout({ children }) {
  // state
  const { dealer } = useContext(contextDealer);
  // rendu
  return (
    <main className=' border h-screen  '>
      <header className=' p-3 border border-cyan-400 '>
        <nav className='flex items-center justify-between'>
          <span> {dealer.name} </span>
          <div>
            <div
              onClick={() =>
                signOut({
                  callbackUrl:
                    '/wipauto/admin/concessionnaire/connexion',
                })
              }
              className='flex btn items-center gap-2'>
              <span>se deconnecter</span>
            </div>
          </div>
        </nav>
      </header>
      <div className='flex'>{children}</div>
    </main>
  );
}

import { signOut } from 'next-auth/react';

export default function Layout({ children }) {
  return (
    <main className=' border h-screen  '>
      <header className=' p-3 border border-cyan-400 '>
        <nav className='flex justify-between'>
          <span>Dashboard</span>
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

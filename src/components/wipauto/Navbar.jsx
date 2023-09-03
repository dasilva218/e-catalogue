import clsx from 'clsx';
import Link from 'next/link';

export default function NAvBarAuto({ page }) {
  const menu = [
    'accueil',
    'concessionnaires',
    'particuliers',
    'services',
  ];
  const menu1 = ['connexion'];
  const MENU2 = ['vehicules', 'autres'];
  return (
    <div
      className={clsx(
        'flex',
        'p-2',
        'justify-between',
        'items-center',
        'bg-base-200'
      )}>
      <details className='lg:invisible dropdown'>
        <summary className={clsx('btn', 'btn-square', 'btn-ghost')}>
          {' '}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-5 h-5 stroke-current'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </summary>
        <ul className='p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52'>
          {menu.map((item, index) => (
            <li className='p-3' key={index}>
              <Link href={`/wipauto/${encodeURIComponent(item)}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </details>

      <ul
        className={clsx(
          'lg:p-2',
          'lg:w-52',
          'hidden',
          'lg:visible',
          'lg:flex',
          'lg:flex-row'
        )}>
        {menu.map((item, index) => (
          <li className='p-3' key={index}>
            <Link href={`/wipauto/${encodeURIComponent(item)}`}>
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <div className='text-orange-400  '>
        <Link href={'/'}>
          {' '}
          <h2 className='text-2xl'>wip</h2>{' '}
        </Link>
      </div>
      <details className='dropdown dropdown-left'>
        {page === 'particuliers' ? (
          <summary>Faire un poste</summary>
        ) : (
          <summary>compte</summary>
        )}
        <ul className='p-2 shadow  dropdown-content bg-base-100 rounded-box w-52'>
          {(page != 'particuliers' ? menu1 : MENU2).map(
            (item, index) => (
              <li className='p-3' key={index}>
                {page !== 'particuliers' ? (
                  <Link
                    href={`/wipauto/admin/concessionnaire/${encodeURIComponent(
                      item
                    )}`}>
                    {item}
                  </Link>
                ) : (
                  <Link
                    href={`/wipauto/particuliers/formulaires/${encodeURIComponent(
                      item
                    )}`}>
                    {item}
                  </Link>
                )}
              </li>
            )
          )}
        </ul>
      </details>
    </div>
  );
}

export default function NAvBarAuto() {
  const menu = [
    'Accueil',
    'concessionnaire',
    'particulier',
    'services',
  ];
  return (
    <div className='navbar flex-row justify-between bg-base-200 sticky z-10 top-0 '>
      <div className='navbar-start  flex justify-start flex-1'>
        <div className='dropdown'>
          <button className='btn btn-square btn-ghost'>
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
          </button>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
            {menu.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className='navbar-center justify-end text-orange-400 flex-1 '>
        <a className='btn btn-ghost normal-case text-xl'>wip</a>
      </div>
    </div>
  );
}

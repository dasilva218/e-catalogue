function Breadcrumb({ page, onClick }) {
  return (
    <div className='text-sm breadcrumbs'>
      <ul>
        <li className="text-red-400" onClick={onClick}>RETOUR</li>
        <li>
          <a>{page}</a>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumb;

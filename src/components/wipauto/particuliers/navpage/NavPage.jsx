const NavPage = ({ titre }) => {
  const Choice = ['retour', titre];
  return (
    <div className='text-lg flex justify-center bg-slate-200 text-black breadcrumbs'>
      <ul>
        {Choice.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default NavPage;

import { Link } from 'react-router-dom';

const Layout = (props: any) => {
  return (
    <div>
      <div className='p-4 bg-blue-500 text-white flex justify-center space-x-4'>
        <Link to='/'>Home</Link>
        <Link to='/cssDemo'>Styles</Link>
        <Link to='/mobxDemo'>Mobx</Link>
        <Link to='/envVar'>EnvVar</Link>
        <Link to='/protected'>Protected</Link>
        <Link to='/button'>Button</Link>
        <Link to='/toaster'>Toaster</Link>
        <Link to='/translations'>translations</Link>
        <Link to='/modal'>Modal</Link>
        <Link to='/cardList'>cardList</Link>
        <Link to='/sideNav'>sideNavigation</Link>
        <Link to='/tabs'>tabs</Link>
      </div>
      {props.children}
    </div>
  );
};
export default Layout;

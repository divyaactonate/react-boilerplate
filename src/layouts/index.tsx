import { Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='p-4 bg-blue-500 text-white flex justify-center space-x-4'>
      <Link to='/'>Home</Link>
      <Link to='/cssDemo'>Styles</Link>
      <Link to='/mobxDemo'>Mobx</Link>
      <Link to='/envVar'>EnvVar</Link>
      <Link to='/protected'>Protected</Link>
    </div>
  )
}
export default Layout

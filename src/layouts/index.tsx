import { Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='p-4 bg-blue-500 text-white flex justify-center space-x-4'>
      <Link to='/'>Home</Link>
      <Link to='/css'>Styles</Link>
      <Link to='/mobx'>Mobx</Link>
      <Link to='/env'>EnvVar</Link>
    </div>
  )
}
export default Layout

// import './globals.scss'
import { Counter } from './Counter/Counter'
import './styles.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Mobx from '@components/page'
import StyledComponent from '@components/StyleComponent'

// TODO :: Not working
// import style from './globals.scss'

const Home = () => <div className='flex justify-center items-center'>Home</div>

const Tailwind = () => {
  return (
    <>
      <h1 className='text-white text-xl bg-black p-20'>
        React TypeScript WebpPack Starter Template
      </h1>
    </>
  )
}
const EnvVar = () => {
  console.log('process.env.NAME', process.env.NAME)
  console.log('process.env.NAME', process.env.name)

  return (
    <>
      <h1 className='text-white text-xl bg-black p-20'>
        process.env.name : {process.env.name}
        <br />
        process.env.NAME : {process.env.NAME}
      </h1>
    </>
  )
}
export const App = () => {
  return (
    <Router>
      <div className='p-4 bg-blue-500 text-white flex justify-center space-x-4'>
        <Link to='/'>Home</Link>
        <Link to='/about'>State</Link>
        <Link to='/tailwind'>Plain Css</Link>
        <Link to='/env'>EnvVar</Link>
        <Link to='/mobx'>MObx</Link>
        <Link to='/styled'>StyledComponent</Link>
      </div>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={Counter} />
      <Route path='/tailwind' component={Tailwind} />
      <Route path='/env' component={EnvVar} />
      <Route path='/mobx' component={Mobx} />
      <Route path='/styled' component={StyledComponent} />
    </Router>
  )
}

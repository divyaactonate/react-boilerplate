import { Counter } from './Counter'
// import './style.css'
import './globals.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => <div>Home</div>

const About = () => {
  console.log('process.env.NAME', process.env.NAME)
  console.log('process.env.NAME', process.env.name)

  return (
    <>
      <h1 className='text-white text-xl bg-black p-20'>
        React TypeScript Webpack Starter Template
        {process.env.NAME}
      </h1>
      <Counter />
    </>
  )
}
export const App = () => {
  return (
    <Router>
      <div className='p-20 flex justify-center space-x-4'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
    </Router>
  )
}

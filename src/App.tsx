import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes'
import Layout from '@layouts/index'

export const App = () => {
  return (
    <Router>
      <Layout />
      <Routes />
    </Router>
  )
}

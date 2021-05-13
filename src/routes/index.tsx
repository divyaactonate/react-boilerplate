import Styles from '@pages/cssDemo'
import EnvVar from '@pages/envVar'
import Home from '@pages/index'
import Mobx from '@pages/mobxDemo'
import { Route } from 'react-router-dom'

export const Routes = () => {
  return (
    <>
      <Route exact path='/' component={Home} />
      <Route path='/css' component={Styles} />
      <Route path='/mobx' component={Mobx} />
      <Route path='/env' component={EnvVar} />
    </>
  )
}

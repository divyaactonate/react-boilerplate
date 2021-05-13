import { useAuth } from '@store/auth'
import { Redirect, Route } from 'react-router-dom'

interface Props {
  component: any
  [name: string]: any
}

const UnprotectedRoute = ({ component, ...rest }: Props) => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    // send to route
    return <Route {...rest} component={component} />
  } else {
    // redirect to signin route
    return <Redirect to={'/home'} />
  }
}

export default UnprotectedRoute

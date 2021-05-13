import { inject, observer } from 'mobx-react'
import { Redirect, Route } from 'react-router-dom'
// import { useAuth } from '@store/index'

interface Props {
  component: any
  [name: string]: any
}

const ProtectedRoute = ({ component, isAuthenticated, ...rest }: Props) => {
  console.log(component, isAuthenticated, rest)

  //  const { isAuthenticated } = useAuth()
  if (isAuthenticated) {
    // send to route
    return <Route {...rest} component={component} />
  } else {
    // redirect to signin route
    return <Redirect to={'/'} />
  }
}
export default inject(({ store }) => store.authStore)(observer(ProtectedRoute))

// export default ProtectedRoute

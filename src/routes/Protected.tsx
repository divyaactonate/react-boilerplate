import { inject, observer } from 'mobx-react'
import { Redirect, Route } from 'react-router-dom';
// import { useAuth } from '@store/index'

interface Props {
  component: any;
  [name: string]: any;
}

const ProtectedRoute = ({ component, authStore, ...rest }: Props) => {
  if (authStore.isAuthenticated === true) {
    // send to route
    return <Route {...rest} component={component} />;
  } else {
    // redirect to signin route
    return <Redirect to={'/'} />;
  }
};

export default inject(({ store }) => store)(observer(ProtectedRoute))

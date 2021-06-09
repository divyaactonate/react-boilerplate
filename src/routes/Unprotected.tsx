import { Redirect, Route } from 'react-router-dom';
// import { inject, observer } from 'mobx-react';
import { useAuth } from '@store/index';

interface Props {
  component: any;
  [name: string]: any;
}

const UnprotectedRoute = ({ component, ...rest }: Props) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    // if (!authStore.isAuthenticated) {
    // send to route
    return <Route {...rest} component={component} />;
  } else {
    // redirect to signin route
    return <Redirect to={'/'} />;
  }
};

export default UnprotectedRoute;
// export default inject(({ store }) => store)(observer(UnprotectedRoute));

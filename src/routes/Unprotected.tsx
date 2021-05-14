import { Redirect, Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

interface Props {
  component: any;
  [name: string]: any;
}

const UnprotectedRoute = ({ component, authStore, ...rest }: Props) => {
  if (!authStore.isAuthenticated) {
    // send to route
    return <Route {...rest} component={component} />;
  } else {
    // redirect to signin route
    return <Redirect to={'/home'} />;
  }
};

// export default UnprotectedRoute;
export default inject(({ store }) => store)(observer(UnprotectedRoute));

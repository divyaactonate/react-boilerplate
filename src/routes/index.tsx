import Styles from '@pages/cssDemo';
import EnvVar from '@pages/envVar';
import Home from '@pages/index';
import Login from '@pages/login';
import Mobx from '@pages/mobxDemo';
import React from 'react';
// import { Route } from 'react-router-dom'
import { BrowserRouter, Switch } from 'react-router-dom';
import ProtectedRoute from './Protected';
import UnprotectedRoute from './Unprotected';

// eslint-disable-next-line react/display-name
const ProtectedPage: any = React.lazy(() => import('@pages/protected'));

const Loading = () => <p>Loading....</p>;

const LazyWithSuspense =
  (MComp: React.FC): any =>
  (props: any): any => {
    return (
      <React.Suspense fallback={<Loading />}>
        <MComp {...props} />
      </React.Suspense>
    );
  };
export const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <UnprotectedRoute exact path='/' component={Home} />
          <UnprotectedRoute exact path='/login' component={Login} />
          <UnprotectedRoute path='/cssDemo' component={Styles} />
          <UnprotectedRoute path='/mobxDemo' component={Mobx} />
          <UnprotectedRoute path='/envVar' component={EnvVar} />
          <ProtectedRoute
            path='/protected'
            // component={ProtectedComponent}
            component={LazyWithSuspense(ProtectedPage)}
            exact={true}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

// return (
//   <>
//     {/* <Route exact path='/' component={Home} />
//     <Route exact path='/login' component={Login} /> */}
//     {/* <Route exact path='/protected' component={ProtectedComponent} /> */}
//     {/* <Route path='/cssDemo' component={Styles} />
//     <Route path='/mobxDemo' component={Mobx} />
//   <Route path='/envVar' component={EnvVar} />*/}
//     <Unprotected exact path='/' component={Home} />
//     <Unprotected exact path='/login' component={Login} />
//     <Unprotected path='/cssDemo' component={Styles} />
//     <Unprotected path='/mobxDemo' component={Mobx} />
//     <Unprotected path='/envVar' component={EnvVar} />
//     <ProtectedRoute
//       path='/protected'
//       component={LazyWithSuspense(ProtectedComponent)}
//       exact={true}
//     />
//   </>
// );

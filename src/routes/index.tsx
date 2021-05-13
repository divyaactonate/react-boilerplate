import Styles from '@pages/cssDemo';
import EnvVar from '@pages/envVar';
import Home from '@pages/index';
import Login from '@pages/login';
import Mobx from '@pages/mobxDemo';
import ProtectedComponent from '@pages/protected';
import React from 'react';
// import { Route } from 'react-router-dom'
import ProtectedRoute from './Protected';
import Unprotected from './Unprotected';

const LazyWithSuspense =
  (Comp: any, blank = false) =>
  (props: any) => {
    return (
      <React.Suspense fallback={<>Loading....</>}>
        <Comp {...props} />
      </React.Suspense>
    );
  };
export const Routes = () => {
  return (
    <>
      {/* <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} /> */}
      {/* <Route exact path='/protected' component={ProtectedComponent} /> */}
      {/* <Route path='/cssDemo' component={Styles} />
      <Route path='/mobxDemo' component={Mobx} />
    <Route path='/envVar' component={EnvVar} />*/}
      <Unprotected exact path='/' component={Home} />
      <Unprotected exact path='/login' component={Login} />
      <Unprotected path='/cssDemo' component={Styles} />
      <Unprotected path='/mobxDemo' component={Mobx} />
      <Unprotected path='/envVar' component={EnvVar} />
      <ProtectedRoute
        path='/protected'
        component={LazyWithSuspense(ProtectedComponent)}
        exact={false}
      />
    </>
  );
};

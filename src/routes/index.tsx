import Button from '@pages/button';
import Card from '@pages/card';
import Styles from '@pages/cssDemo';
import EnvVar from '@pages/envVar';
import Home from '@pages/index';
import Login from '@pages/login';
import Mobx from '@pages/mobxDemo';
import Modal from '@pages/modal';
import Toaster from '@pages/toaster';
import WindowManager from '@pages/windowManager';
import Tabs from '@pages/tabs';
import Translations from '@pages/translations';
import { FC, lazy, Suspense } from 'react';
// import { Route } from 'react-router-dom'
import { BrowserRouter, Switch } from 'react-router-dom';
import ProtectedRoute from './Protected';
import UnprotectedRoute from './Unprotected';
import CardList from '@pages/cardList';

// eslint-disable-next-line react/display-name
const ProtectedPage: any = lazy(() => import('@pages/protected'));

const Loading = () => <p>Loading....</p>;

const LazyWithSuspense =
  (MComp: FC): any =>
  (props: any): any => {
    return (
      <Suspense fallback={<Loading />}>
        <MComp {...props} />
      </Suspense>
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
          <UnprotectedRoute path='/button' component={Button} />
          <UnprotectedRoute path='/toaster' component={Toaster} />
          <UnprotectedRoute path='/modal' component={Modal} />
          <UnprotectedRoute path='/windowManager' component={WindowManager} />
          <UnprotectedRoute path='/translations' component={Translations} />
          <UnprotectedRoute path='/card' component={Card} />
          <UnprotectedRoute path='/tabs' component={Tabs} />
          <UnprotectedRoute path='/cardList' component={CardList} />

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

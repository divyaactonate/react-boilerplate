import Button from '@pages/button';
import Card from '@pages/card';
import CardList from '@pages/cardList';
import Styles from '@pages/cssDemo';
import EnvVar from '@pages/envVar';
import Home from '@pages/index';
import Login from '@pages/login';
import Mobx from '@pages/mobxDemo';
import Modal from '@pages/modal';
import SideNav from '@pages/sideNav';
import LoginPage from '@pages/loginPage';
import Tabs from '@pages/tabs';
import Toaster from '@pages/toaster';
import Translations from '@pages/translations';
import { FC, lazy, Suspense } from 'react';
// import { Route } from 'react-router-dom'
import { BrowserRouter, Switch } from 'react-router-dom';
import ProtectedRoute from './Protected';
import UnprotectedRoute from './Unprotected';

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
          <UnprotectedRoute exact path='/loginPage' component={LoginPage} />
          <ProtectedRoute path='/cssDemo' component={Styles} />
          <ProtectedRoute path='/mobxDemo' component={Mobx} />
          <ProtectedRoute path='/envVar' component={EnvVar} />
          <ProtectedRoute path='/button' component={Button} />
          <ProtectedRoute path='/toaster' component={Toaster} />
          <ProtectedRoute path='/modal' component={Modal} />
          <ProtectedRoute path='/translations' component={Translations} />
          <ProtectedRoute path='/card' component={Card} />
          <ProtectedRoute path='/tabs' component={Tabs} />
          <ProtectedRoute path='/cardList' component={CardList} />
          <ProtectedRoute path='/sideNav' component={SideNav} />
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

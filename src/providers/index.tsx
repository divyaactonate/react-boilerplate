import { AuthProvider, ContactProvider, store } from '@store/index';
import { Provider } from 'mobx-react';
import { FC } from 'react';
// import GlobalStyles from './styles/GlobalStyles'
import { ToastProvider } from './toaster';

function combineProviders(...providers: FC[]) {
  return ({ children }: any) =>
    providers.reduce(
      (prev, CurrentProvider) => <CurrentProvider>{prev}</CurrentProvider>,
      children
    );
}

const CombinedProviders = combineProviders(ContactProvider, AuthProvider);

function AllProviders({ children }: any) {
  return (
    <Provider store={store}>
      {/* <GlobalStyles /> new */}
      <CombinedProviders>
        <ToastProvider />
        {children}
      </CombinedProviders>
    </Provider>
  );
}

export { AllProviders };

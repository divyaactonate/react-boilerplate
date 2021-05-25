import { BeautifyProvider } from '@library/theme';
import { AuthProvider, ContactProvider, store } from '@store/index';
import { Provider } from 'mobx-react';
import { FC } from 'react';
import { GLOBAL_THEME } from '../styles/global-theme';
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
    <BeautifyProvider theme={GLOBAL_THEME}>
      <Provider store={store}>
        {/* <GlobalStyles /> new */}
        <CombinedProviders>
          <ToastProvider />
          {children}
        </CombinedProviders>
      </Provider>
    </BeautifyProvider>
  );
}

export { AllProviders };

import { ContactProvider, AuthProvider } from '@store/index'
import { store } from '@store/index'
import { Provider } from 'mobx-react'
import { FC } from 'react'

function combineProviders(...providers: FC[]) {
  return ({ children }: any) =>
    providers.reduce(
      (prev, CurrentProvider) => <CurrentProvider>{prev}</CurrentProvider>,
      children
    )
}

const CombinedProviders = combineProviders(ContactProvider, AuthProvider)

function AllProviders({ children }: any) {
  return (
    <Provider store={store}>
      <CombinedProviders>{children}</CombinedProviders>
    </Provider>
  )
}

export { AllProviders }

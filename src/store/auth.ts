import { Logger } from '@libs/logger'
import { services } from '@src/api'
import createStore from '@store/createStore'
import { action, makeObservable, observable } from 'mobx'
import { enableStaticRendering } from 'mobx-react'

// eslint-disable-next-line react-hooks/rules-of-hooks
enableStaticRendering(typeof window === 'undefined')
const { AuthApi: service } = services

class AuthStore {
  isAuthenticated: boolean
  loading: boolean

  constructor() {
    this.isAuthenticated = false
    this.loading = false
    makeObservable(this, {
      isAuthenticated: observable,
      login: action,
    })
  }

  login = async (email: any, password: any) => {
    try {
      this.loading = true
      console.log(email, password)
      await service.signin(email, password)
      this.isAuthenticated = true
    } catch (err) {
      Logger.error('ERR :: Auth ADD Operation')
    } finally {
      this.loading = false
    }
  }
}
const {
  Consumer: AuthConsummer,
  Provider: AuthProvider,
  useStore: useAuth,
} = createStore(new AuthStore())

export { AuthConsummer, useAuth, AuthStore, AuthProvider }

import { ContactStore } from './contact'
import { AuthStore } from './auth'

export const store = {
  contactStore: new ContactStore(),
  authStore: new AuthStore(),
}

export * from './contact'
export * from './auth'

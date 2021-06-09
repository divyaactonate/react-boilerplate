import { Logger } from '@utils/logger';
import { services } from '@src/api';
import createStore from '@store/createStore';
import { action, makeObservable, observable } from 'mobx';
import { enableStaticRendering } from 'mobx-react';
import React from 'react';

// eslint-disable-next-line react-hooks/rules-of-hooks
enableStaticRendering(typeof window === 'undefined');
const { ContactService: service } = services;

class ContactStore {
  contacts: any[];
  loading: boolean;

  constructor() {
    this.contacts = [];
    this.loading = false;
    makeObservable(this, {
      contacts: observable,
      loading: observable,
      addContact: action,
      getContacts: action,
      deleteContact: action,
    });
  }
  get Contacts() {
    return this.contacts;
  }
  addContact = async (contact: any) => {
    try {
      this.loading = true;
      const res = await service.add(contact);
      this.contacts.push(contact);
      return res;
    } catch (err) {
      Logger.error('ERR :: Contact ADD Operation', err);
    } finally {
      this.loading = false;
    }
  };
  getContacts = async () => {
    try {
      this.loading = true;
      const res = await service.getAll();
      this.contacts = res;
      return res;
    } catch (err) {
      Logger.error('ERR :: Contact GET Operation', err);
    } finally {
      this.loading = false;
    }
  };
  clearContacts = async () => {
    try {
      this.loading = true;
      const res = await service.clear();
      this.contacts = [];
      return res;
    } catch (err) {
      Logger.error('ERR :: Contact GET Operation');
    } finally {
      this.loading = false;
    }
  };
  deleteContact = async (contactId: string) => {
    try {
      await service.delete(contactId);
      this.contacts = this.contacts.filter((c) => c.id !== contactId);
    } catch (err) {
      Logger.error('ERR :: Contact DELETE Operation', err);
    }
  };
}
const {
  Consumer: ContactConsummer,
  Provider: ContactProvider,
  useStore: useContact,
}: {
  Consumer: React.Consumer<ContactStore>;
  Provider: React.FC;
  useStore: () => ContactStore;
} = createStore(new ContactStore());

export { ContactConsummer, useContact, ContactStore, ContactProvider };

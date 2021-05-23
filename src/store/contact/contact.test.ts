import { ContactStore } from './index';

describe('ContactStore', () => {
  it('creates new contacts', async () => {
    const store = new ContactStore();
    expect(store.Contacts.length).toBe(0);
    await store.addContact({
      name: 'vaibhav',
      phone: '66',
      id: '2021-05-12T14:29:43.045Z',
    });
    await store.addContact({
      name: 'kaushal',
      phone: '34',
      id: '2021-05-13T14:16:01.718Z',
    });
    expect(store.Contacts.length).toBe(2);
    expect(store.contacts[0].name).toBe('vaibhav');
    expect(store.contacts[1].phone).toBe('34');
    await store.deleteContact('2021-05-12T14:29:43.045Z');
    await store.deleteContact('2021-05-13T14:16:01.718Z');
  });
  it('delete contact', async () => {
    const store = new ContactStore();
    await store.addContact({
      name: 'vaibhav',
      phone: '66',
      id: '2021-05-12T14:29:43.045Z',
    });

    let contact = store.Contacts.find((c) => c.id === '2021-05-12T14:29:43.045Z');

    expect(contact.name).toBe('vaibhav');
    expect(store.Contacts.length).toBe(1);
    expect(store.Contacts[0].name).toBe('vaibhav');

    await store.deleteContact('2021-05-12T14:29:43.045Z');
    contact = store.Contacts.find((c) => c.id === '2021-05-12T14:29:43.045Z');
    expect(contact).toBeUndefined();
  });
  it('get contact', async () => {
    const store = new ContactStore();
    store.addContact({
      name: 'vaibhav',
      phone: '66',
      id: '2021-05-12T14:29:43.045Z',
    });

    const contacts = await store.getContacts();
    expect(contacts.length).toBe(1);
    expect(store.Contacts.length).toBe(1);
    expect(store.contacts[0].name).toBe('vaibhav');
    await store.deleteContact('2021-05-12T14:29:43.045Z');
    expect(store.Contacts.length).toBe(0);
  });
});

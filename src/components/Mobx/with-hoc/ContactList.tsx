import { ContactStore } from '@store/contact';
import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';
import { DeleteIcon, PhoneIcon, UserIcon } from '@library/icons';

function ContactList({ contactStore }: { contactStore: ContactStore }) {
  const { contacts, deleteContact, loading, getContacts } = contactStore;
  console.log(contacts);

  const removeContact = async (id: number) => {
    if (!window.confirm('Are you sure?')) {
      return;
    }
    deleteContact(id);
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className='flex flex-col items-center'>
      {contacts?.length > 0 ? (
        contacts.map((contact: any) => (
          <div
            key={contact.id}
            className='flex items-center p-2 mb-4 transition-shadow duration-150 bg-white border rounded-lg shadow-sm w-72 hover:shadow-md group '
          >
            <img
              src='https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
              alt='headshot'
              className='border-2 border-blue-300 rounded-full w-14 h-14'
            />
            <div className='relative w-full p-2'>
              <button
                className='absolute top-6 right-0 text-red-600 cursor-pointer group-hover:block focus:outline-none'
                onClick={() => removeContact(contact.id)}
              >
                <DeleteIcon className='' />
              </button>

              <div className='flex items-center'>
                <UserIcon className='mr-2' />
                <p className='font-semibold text-gray-700'>{contact.name}</p>
              </div>
              <div className='flex items-center'>
                <PhoneIcon className='mr-2' />
                <p className='font-light text-gray-700'>{contact.phone}</p>
              </div>
            </div>
          </div>
        ))
      ) : contacts ? (
        <p>You have no contacts yet</p>
      ) : loading ? (
        <p>Loading..</p>
      ) : null}
    </div>
  );
}
export default inject(({ store }) => store)(observer(ContactList));
// export default observer(ContactList);

// tslint:disable: linebreak-style

import { useContact } from '@store/contact';
import { observer } from 'mobx-react';
import { useRef, useState } from 'react';
import { Loading } from '@library/icons';

function ContactInput() {
  const { addContact } = useContact();
  const nameInputRef: any = useRef();
  const phoneInputRef: any = useRef();
  const [loading, setLoading] = useState(false);

  const submitForm = async (event: any) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const phone = phoneInputRef.current.value;
    if (name === '' || phone === '') {
      return;
    }
    setLoading(true);
    await addContact({ name, phone, id: new Date() });
    nameInputRef.current.value = '';
    phoneInputRef.current.value = '';
    setLoading(false);
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <div className='mx-auto w-72'>
          <div className='flex justify-center w-full my-4'>
            <input
              type='text'
              className='rounded-l-lg px-2 py-1 placeholder-gray-400 placeholder-opacity-75 transition-shadow duration-150 border shadow-sm w-36 focus:outline-none focus:border-blue-300 hover:shadow-md focus:shadow-md'
              placeholder='name'
              ref={nameInputRef}
              disabled={loading}
            />
            <input
              type='text'
              className='rounded-r-lg px-2 py-1 placeholder-gray-400 placeholder-opacity-75 transition-shadow duration-150 border shadow-sm w-36 focus:outline-none focus:border-blue-300 hover:shadow-md focus:shadow-md'
              placeholder='phone'
              ref={phoneInputRef}
              disabled={loading}
            />
          </div>
          <button
            type='submit'
            className='flex items-center justify-center w-full px-2 py-1 mx-auto my-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none disabled:opacity-50'
            disabled={loading}
          >
            {loading && (
              <Loading text-white animate-spin className='mr-2 text-white animate-spin' />
            )}
            {loading ? 'Adding' : 'Add'}
          </button>
        </div>
      </form>
    </>
  );
}
export default observer(ContactInput);
// export default inject(({ store }) => store.contactStore)(observer(ContactInput));

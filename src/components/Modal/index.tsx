/**
 *
 * Modal
 *
 */

import { useState } from 'react';
import Modal from '@shared/Modal';

const MyModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className='flex mt-32 items-center justify-center'>
        <button
          type='button'
          onClick={openModal}
          className='px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
        >
          Open dialog
        </button>
      </div>
      <Modal title='Payment successful' open={isOpen} closeModal={closeModal}>
        <div>
          <div className='mt-2'>
            <p className='text-sm text-gray-500'>
              Your payment has been successfully submitted. We’ve sent your an email with all of the
              details of your order.
            </p>
          </div>

          <div className='mt-4'>
            <button
              type='button'
              className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
              onClick={closeModal}
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default MyModal;

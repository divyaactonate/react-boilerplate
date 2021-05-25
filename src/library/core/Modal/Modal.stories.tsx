import { storiesOf } from '@storybook/react';
import { useState } from 'react';
import { Modal } from '.';

storiesOf('@beautify/core/Modal', module)
  .add('xs', () => {
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
            Open Modal-{'xs'}
          </button>
        </div>
        <Modal size={'xs'} title='Modal Title' opened={isOpen} onClose={closeModal}>
          <div>
            {/* <div className='mt-2'>
            <p className='text-sm text-gray-500'>
              Your payment has been successfully submitted. We’ve sent your an email with all of the
              details of your order.
            </p>
          </div> */}

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
  })
  .add('sm', () => {
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
            Open Modal-{'sm'}
          </button>
        </div>
        <Modal size={'sm'} title='Modal Title' opened={isOpen} onClose={closeModal}>
          <div>
            {/* <div className='mt-2'>
            <p className='text-sm text-gray-500'>
              Your payment has been successfully submitted. We’ve sent your an email with all of the
              details of your order.
            </p>
          </div> */}

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
  })
  .add('md', () => {
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
            Open Modal-{'md'}
          </button>
        </div>
        <Modal size={'md'} title='Modal Title' opened={isOpen} onClose={closeModal}>
          <div>
            {/* <div className='mt-2'>
            <p className='text-sm text-gray-500'>
              Your payment has been successfully submitted. We’ve sent your an email with all of the
              details of your order.
            </p>
          </div> */}

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
  })
  .add('lg', () => {
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
            Open Modal-{'lg'}
          </button>
        </div>
        <Modal size={'lg'} title='Modal Title' opened={isOpen} onClose={closeModal}>
          <div>
            {/* <div className='mt-2'>
            <p className='text-sm text-gray-500'>
              Your payment has been successfully submitted. We’ve sent your an email with all of the
              details of your order.
            </p>
          </div> */}

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
  })
  .add('xl', () => {
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
            Open Modal-{'xl'}
          </button>
        </div>
        <Modal size={'xl'} title='Modal Title' opened={isOpen} onClose={closeModal}>
          <div>
            {/* <div className='mt-2'>
            <p className='text-sm text-gray-500'>
              Your payment has been successfully submitted. We’ve sent your an email with all of the
              details of your order.
            </p>
          </div> */}

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
  });

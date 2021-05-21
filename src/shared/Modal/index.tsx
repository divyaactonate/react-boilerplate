/**
 *
 * Modal
 *
 */

import { ElementType, FC, Fragment, ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export interface ModalProps {
  open: boolean;
  closeModal: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
  overlayClass?: string;
  titleClass?: string;
  unmount?: boolean;
  titleComponent?: ElementType<any> | undefined;
}

const Modal: FC<ModalProps> = (props) => {
  const {
    open = false,
    unmount = true,
    closeModal,
    titleClass,
    className,
    titleComponent = 'h3',
    overlayClass,
    title,
    children,
  } = props;
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        unmount={unmount}
        // static={true}
        as='div'
        className={className || 'fixed inset-0 z-10 overflow-y-auto'}
        onClose={closeModal}
      >
        <div className='min-h-screen px-4 text-center'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className={overlayClass || 'fixed inset-0'} />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className='inline-block h-screen align-middle' aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
              {title && (
                <Dialog.Title
                  as={titleComponent}
                  className={titleClass || 'text-lg font-medium leading-6 text-gray-900'}
                >
                  Payment successful
                </Dialog.Title>
              )}
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;

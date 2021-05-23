/**
 *
 * Dialog
 *
 */

import { ElementType, FC, Fragment, ReactNode } from 'react';
import { Dialog as DialogBase, Transition } from '@headlessui/react';
import { useScrollLock } from '@library/hooks';

export interface DialogProps {
  opened: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
  overlayClass?: string;
  titleClass?: string;
  unmount?: boolean;
  titleComponent?: ElementType<any> | undefined;
}

export const Dialog: FC<DialogProps> = (props) => {
  const {
    opened = false,
    unmount = true,
    onClose,
    titleClass,
    className,
    titleComponent = 'h3',
    overlayClass,
    title,
    children,
  } = props;
  useScrollLock(opened);

  return (
    <Transition appear show={opened} as={Fragment}>
      <DialogBase
        unmount={unmount}
        // static={true}
        as='div'
        className={className || 'fixed inset-0 z-10 overflow-y-auto'}
        onClose={onClose}
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
            <DialogBase.Overlay className={overlayClass || 'fixed inset-0'} />
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
                <DialogBase.Title
                  as={titleComponent}
                  className={titleClass || 'text-lg font-medium leading-6 text-gray-900'}
                >
                  Payment successful
                </DialogBase.Title>
              )}
              {children}
            </div>
          </Transition.Child>
        </div>
      </DialogBase>
    </Transition>
  );
};
Dialog.displayName = '@beautify/core/Dialog';

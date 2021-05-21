/**
 *
 * Modal
 *
 */
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import { useScrollLock } from '@library/hooks';
import { DefaultProps } from '@library/theme/types';
import { ElementType, FC, Fragment } from 'react';
import cn from 'classnames';
import { getSizeValue } from '@library/utils/get-size-value/get-size-value';

export const sizes = {
  xs: 'w-3/12	',
  sm: 'w-4/12	',
  md: 'w-6/12	',
  lg: 'w-8/12	',
  xl: 'w-10/12',
  full: 'w-full',
};

export interface ModalProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Mounts modal if true */
  opened: boolean;

  /** Called when close button clicked and when escape key is pressed */
  onClose(): void;

  /** Modal title, displayed in header before close button */
  title?: React.ReactNode;

  /**Whether the element should be unmounted or hidden based on the open/closed state. */
  unmount?: boolean;

  /** Modal z-index property */
  zIndex?: number;

  /** Control vertical overflow behavior */
  overflow?: 'outside' | 'inside';

  /** Hides close button, modal still can be closed with escape key and by clicking outside */
  hideCloseButton?: boolean;

  /** Overlay below modal opacity, defaults to 0.75 in light theme and to 0.85 in dark theme */
  overlayOpacity?: number;

  /** Overlay below modal color, defaults to theme.black in light theme and to theme.colors.dark[9] in dark theme */
  overlayColor?: string;

  /** Modal body width */
  size?: string | number;

  /** Modal body transition */
  // transition?: MantineTransition;

  /** Duration in ms of modal transitions, set to 0 to disable all animations */
  // transitionDuration?: number;

  /** Modal body transitionTimingFunction, defaults to theme.transitionTimingFunction */
  // transitionTimingFunction?: string;

  /** Close button aria-label and title attributes */
  closeButtonLabel?: string;

  /** id base, used to generate ids to connect modal title and body with aria- attributes, defaults to random id */
  // id?: string;
  overlayClass?: string;
  titleClass?: string;
  titleComponent?: ElementType<any> | undefined;
}

export const Modal: FC<ModalProps> = ({
  className,
  opened,
  unmount = true,
  // themeOverride,
  title,
  onClose,
  children,
  titleClass,
  titleComponent = 'h3',
  hideCloseButton = false,
  overlayClass,
  // overlayOpacity,
  size = 'md',
  // transitionDuration = 300,
  // closeButtonLabel,
  // overlayColor,
  // zIndex = 1000,
  overflow = 'outside',
  // transition = 'slide-down',
  // id,
  // ...others
}) => {
  useScrollLock(opened);

  return (
    <Transition appear show={opened} as={Fragment}>
      <Dialog
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
            <div
              className={cn(
                `inline-block p-6 my-8 
                overflow-hidden text-left align-middle 
                transition-all transform bg-white shadow-xl rounded-2xl`,
                getSizeValue({ sizes, size })
              )}
            >
              {(title || !hideCloseButton) && (
                <div className='flex items-center justify-between mb-4'>
                  <Dialog.Title
                    as={titleComponent}
                    className={
                      titleClass ||
                      'text-lg font-medium overflow-ellipsis block break-words leading-6 text-gray-900'
                    }
                  >
                    {title}
                  </Dialog.Title>

                  {!hideCloseButton && (
                    // <ActionIcon onClick={onClose}>
                    <XIcon
                      onClick={onClose}
                      className='w-10 cursor-pointer p-2 hover:bg-gray-100 rounded-full'
                    />
                    // </ActionIcon>
                  )}
                </div>
              )}
              <div
                tw='break-words'
                css={[overflow === 'inside' && `max-height: calc(100vh - 185px);overflow-y:auto`]}
              >
                {children}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

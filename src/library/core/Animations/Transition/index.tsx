import { Transition } from '@headlessui/react';
import { Fragment } from 'react';

export interface GroupTransitionProps {
  enter?: string;
  enterFrom?: string;
  enterTo?: string;
  leave?: string;
  leaveFrom?: string;
  show: boolean;
  leaveTo?: string;
  children: React.ReactNode;
}
export const GroupTransition = ({
  children,
  enter = 'transform transition ease-in duration-[400ms]',
  enterFrom = 'opacity-0 rotate-[-120deg] scale-75',
  enterTo = 'opacity-0 rotate-[-120deg] scale-75',
  leave = 'transform duration-200 transition ease-in-out',
  leaveFrom = 'opacity-100 rotate-0 scale-100',
  leaveTo = 'opacity-0 scale-95',
  show = false,
}: GroupTransitionProps) => {
  return (
    <Transition
      as={Fragment}
      show={show}
      enter={enter}
      enterFrom={enterFrom}
      enterTo={enterTo}
      leave={leave}
      leaveFrom={leaveFrom}
      leaveTo={leaveTo}
    >
      {children}
    </Transition>
  );
};

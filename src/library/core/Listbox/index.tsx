/**
 *
 * ListBox
 *
 */

import { FC, Fragment } from 'react';
import { Listbox as SelectList, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { Logger } from '@libs/logger';

export interface ListBoxProps {
  /** List of elements   */
  data?: any;

  /** Method that will be called on menu selection from list   */
  onChange?: (val?: any) => void;

  /** Element detail selected from list box   */
  value?: any;

  /** Disabled list box   */
  disabled?: boolean;

  /** list box style  */
  className?: string;
}

export const ListBox: FC<ListBoxProps> = ({
  data = [],
  onChange = (e) => Logger.info(e),
  value,
  disabled = false,
  className,
}: ListBoxProps) => {
  return (
    <div className={`flex items-center justify-center w-72 ml-2`}>
      <div className={`w-full max-w-xs mx-auto`}>
        <SelectList value={value} onChange={onChange} disabled={disabled}>
          <div className={`relative mt-1`}>
            <SelectList.Button
              className={`${className ? className : ''} ${
                disabled ? 'bg-gray-200 cursor-not-allowed text-gray-400' : 'cursor-pointer'
              }
            relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm`}
            >
              <span className='block truncate'>{value.name}</span>
              <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                <SelectorIcon className='w-5 h-5 text-gray-400' aria-hidden='true' />
              </span>
            </SelectList.Button>
            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <SelectList.Options
                className={`absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}
              >
                {data.length > 0 &&
                  data.map((person?: any, personIdx?: any) => (
                    <SelectList.Option
                      key={personIdx}
                      className={({ active }) =>
                        `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                        cursor-default select-none relative py-2 pl-10 pr-4`
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span
                              className={`${active ? 'text-amber-600' : 'text-amber-600'}
                              absolute inset-y-0 left-0 flex items-center pl-3`}
                            >
                              <CheckIcon className='w-5 h-5' aria-hidden='true' />
                            </span>
                          ) : null}
                        </>
                      )}
                    </SelectList.Option>
                  ))}
              </SelectList.Options>
            </Transition>
          </div>
        </SelectList>
      </div>
    </div>
  );
};
ListBox.displayName = '@beautify/core/ListBox';

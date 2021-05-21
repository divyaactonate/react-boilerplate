/**
 *
 * Listbox
 *
 */

import { FC } from 'react';
import { Listbox as SelectList } from '@headlessui/react';

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
];

export interface ListboxProps {
  data?: any;
  onChange?: (val?: any) => void;
}

const Listbox: FC<ListboxProps> = ({
  data = people,
  onChange = (e) => {
    console.log(e);
  },
}: ListboxProps) => {
  return (
    <div data-testid='Listbox'>
      <SelectList value={data[0]} onChange={onChange}>
        {({ open }) => (
          <>
            <SelectList.Button>{data[0].name}</SelectList.Button>
            {open && (
              <div>
                {/*
                Using `static`, `Listbox.Options` is always rendered and
                ignores the `open` state.
              */}
                <SelectList.Options static>
                  {people.map((person) => (
                    <SelectList.Option key={person.id} value={person}>
                      {person.name}
                    </SelectList.Option>
                  ))}
                </SelectList.Options>
              </div>
            )}
          </>
        )}
      </SelectList>
    </div>
  );
};

export default Listbox;

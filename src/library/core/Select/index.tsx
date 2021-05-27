/** @jsxImportSource @emotion/react */
// Please remove above line if not using twin css

import cx from 'clsx';
import { useStyles } from './Select.styles';
import { DefaultProps } from '@library/theme';

export type SelectProps = DefaultProps;

export const Select = ({ themeOverride }: SelectProps) => {
  const { classes } = useStyles({ themeOverride });

  return (
    <div data-beautify-select className={cx(classes.select)}>
      <div>
        <label htmlFor='location' className='block text-sm font-medium text-gray-700'>
          Location
        </label>
        <select
          id='location'
          name='location'
          className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
        >
          <option>USA</option>
          <option selected>Canada</option>
          <option>EU</option>
        </select>
      </div>
    </div>
  );
};
Select.displayName = '@beautify/core/Select';

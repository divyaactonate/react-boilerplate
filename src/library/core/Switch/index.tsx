/**
 *
 * Switch
 *
 */

import { FC } from 'react';
import { Switch as ToggleSwitch } from '@headlessui/react';

export interface SwitchProps {
  checked?: boolean;
  passive?: boolean;
  onChange?: (val: any) => void;
  className?: string;
  label?: string;
  activeColor?: string;
  deactiveColor?: string;
}

export const Switch: FC<SwitchProps> = ({
  checked = true,
  passive = true,
  onChange = (e) => {
    console.log(e);
  },
  className,
  label = '',
  activeColor = 'bg-blue-600',
  deactiveColor = 'bg-gray-200',
}: SwitchProps) => {
  return (
    <ToggleSwitch.Group>
      <div className='flex items-center'>
        <ToggleSwitch.Label className='mr-4' passive={passive}>
          {label}
        </ToggleSwitch.Label>
        <ToggleSwitch
          checked={checked}
          onChange={onChange}
          className={`${checked ? activeColor : deactiveColor} ${className ? className : ''}
          relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent`}
        >
          <span
            className={`${
              checked ? 'translate-x-6' : 'translate-x-1'
            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
          />
        </ToggleSwitch>
      </div>
    </ToggleSwitch.Group>
  );
};

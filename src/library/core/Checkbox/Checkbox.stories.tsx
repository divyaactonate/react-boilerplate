import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Checkbox } from '.';
import { DEFAULT_THEME } from '@library/theme/default-theme';

function CheckboxWrapper(props: Omit<React.ComponentProps<typeof Checkbox>, 'value' | 'onChange'>) {
  const [value, onChange] = useState(true);
  return (
    <Checkbox
      checked={value}
      onChange={(event) => onChange(event.currentTarget.checked)}
      {...props}
    />
  );
}

const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
  <Checkbox key={size} size={size} label={`Checkbox ${size}`} style={{ marginTop: 15 }} />
));
const radius = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((radius) => (
  <Checkbox key={radius} radius={radius} label={`Checkbox ${radius}`} style={{ marginTop: 15 }} />
));
const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Checkbox key={color} color={color} {...props} label={color} style={{ marginTop: 15 }} />
  ));

storiesOf('@beautify/core/Checkbox', module)
  .add('Themes', () => <div style={{ padding: 15 }}>{getThemes({ checked: true })}</div>)
  .add('Sizes', () => <div style={{ padding: 15 }}>{sizes}</div>)
  .add('Radius', () => <div style={{ padding: 15 }}>{radius}</div>)
  .add('Controlled', () => <CheckboxWrapper label='Controlled' style={{ padding: 15 }} />)
  .add('Indeterminate', () => (
    <Checkbox indeterminate label='Indeterminate' style={{ padding: 15 }} />
  ))
  .add('Disabled', () => (
    <div style={{ padding: 15 }}>
      <label className='inline-flex items-center mt-3'>
        <input
          type='checkbox'
          className='form-checkbox h-8 w-8 bg-green-500 text-yellow-600'
          checked
        />
        <span className='ml-2 text-gray-700'>label</span>
      </label>
      <Checkbox label='Disabled' disabled />
      <Checkbox checked label='Disabled checked' disabled style={{ marginTop: 15 }} />
    </div>
  ))
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh', padding: 50 }}>
      {getThemes({ themeOverride: { colorScheme: 'dark' }, checked: true })}
      <Checkbox
        themeOverride={{ colorScheme: 'dark' }}
        label='Checkbox'
        style={{ marginTop: 15 }}
      />
      <Checkbox
        themeOverride={{ colorScheme: 'dark' }}
        label='Disabled'
        disabled
        style={{ marginTop: 15 }}
      />
      <Checkbox
        themeOverride={{ colorScheme: 'dark' }}
        checked
        label='Disabled checked'
        disabled
        style={{ marginTop: 15 }}
      />
    </div>
  ));

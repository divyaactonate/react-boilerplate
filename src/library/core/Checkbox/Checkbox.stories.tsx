import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Checkbox } from './index';
import { DEFAULT_THEME } from '@library/theme/default-theme';
const CheckboxWrapper = (
  props: Omit<React.ComponentProps<typeof Checkbox>, 'value' | 'onChange'>
) => {
  const [value, onChange] = useState(true);
  return (
    <Checkbox
      checked={value}
      onChange={(event) => onChange(event.currentTarget.checked)}
      {...props}
    />
  );
};

const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
  <Checkbox
    color='blue'
    key={size}
    size={size}
    label={`Checkbox ${size}`}
    style={{ marginTop: 15 }}
  />
));

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Checkbox key={color} color={color} {...props} label={color} style={{ marginTop: 15 }} />
  ));

storiesOf('@beautify/core/Checkbox', module)
  .add('Themes', () => <div style={{ padding: 15 }}>{getThemes({ checked: true })}</div>)
  .add('Sizes', () => <div style={{ padding: 15 }}>{sizes}</div>)
  .add('Controlled', () => <CheckboxWrapper label='Controlled' style={{ padding: 15 }} />)
  .add('Indeterminate', () => (
    <Checkbox indeterminate label='Indeterminate' style={{ padding: 15 }} />
  ))
  .add('Disabled', () => (
    <div style={{ padding: 15 }}>
      <Checkbox label='Disabled' disabled />
      <Checkbox checked label='Disabled checked' disabled style={{ marginTop: 15 }} />
    </div>
  ))
  .add('NewwChain', () => {
    const initialValues = [
      { label: 'Receive email notifications', checked: false, key: '1' },
      { label: 'Receive sms notifications', checked: false, key: '2' },
      { label: 'Receive push notifications', checked: false, key: '3' },
    ];
    const [values, setValue] = useState(initialValues);

    const allChecked = values.every((value) => value.checked);
    console.log(allChecked);

    const indeterminate = values.some((value) => value.checked) && !allChecked;

    const onCheck = (key: number, value: boolean) => {
      const newValue = [...values];
      newValue[key].checked = value;
      setValue([...newValue]);
    };
    const toogle = () => {
      let newValue = [...values];
      newValue = newValue.map((value) => ({ ...value, checked: !allChecked }));
      setValue([...newValue]);
    };
    const items = values.map((value, index) => (
      <Checkbox
        style={{ marginTop: 2, marginLeft: 33 }}
        label={value.label}
        key={value.key}
        checked={value.checked}
        onChange={(event) => onCheck(index, event.currentTarget.checked)}
      />
    ));

    return (
      <div>
        <Checkbox
          checked={allChecked}
          indeterminate={indeterminate}
          label='Receive all notifications'
          onChange={toogle}
        />
        {items}
      </div>
    );
  })
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

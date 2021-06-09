import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Switch } from './index';
import { DEFAULT_THEME } from '@library/theme/default-theme';
import { BeautifyProvider } from '@library/theme';

function SwitchWrapper(props: Omit<React.ComponentProps<typeof Switch>, 'value' | 'onChange'>) {
  const [value, onChange] = useState(true);
  return (
    <Switch
      checked={value}
      onChange={(event) => onChange(event.currentTarget.checked)}
      {...props}
    />
  );
}

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Switch key={color} color={color} {...props} label={color} style={{ marginTop: 15 }} />
  ));

const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as any[]).map((size) => (
  <Switch color='blue' key={size} size={size} label={`Switch ${size}`} style={{ marginTop: 15 }} />
));

storiesOf('@beautify/core/Forms/Switch', module)
  .add('Themes', () => <div style={{ padding: 15 }}>{getThemes({ defaultChecked: true })}</div>)
  .add('Sizes', () => <div style={{ padding: 15 }}>{sizes}</div>)
  .add('Controlled', () => (
    <SwitchWrapper color='blue' label='Controlled' style={{ padding: 15 }} />
  ))
  .add('Autofocus', () => (
    <SwitchWrapper color='blue' label='Autofocus' style={{ padding: 15 }} autoFocus />
  ))
  .add('Disabled', () => (
    <div style={{ padding: 15 }}>
      <Switch defaultChecked={false} label='Disabled' disabled color='gray' />
      <Switch checked label='Disabled checked' disabled color='gray' style={{ marginTop: 15 }} />
    </div>
  ))
  .add('Dark theme', () => (
    <BeautifyProvider theme={{ colorScheme: 'dark' }}>
      <div
        style={{ backgroundColor: DEFAULT_THEME.colors.dark[7], padding: 40, minHeight: '100vh' }}
      >
        {getThemes({ defaultChecked: true })}
        <Switch label='Disabled' disabled style={{ marginTop: 15 }} />
        <Switch checked label='Disabled checked' disabled style={{ marginTop: 15 }} />
        <SwitchWrapper label='Controlled' style={{ marginTop: 15 }} />
      </div>
    </BeautifyProvider>
  ));

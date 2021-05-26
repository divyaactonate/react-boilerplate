import React from 'react';
import { storiesOf } from '@storybook/react';
import { ActionIcon } from './index';
import { Group } from '@library/core/Group';
import { DEFAULT_THEME } from '@library/theme/default-theme';

const GearIcon = (props: any) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
    />
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
    />
  </svg>
);

const getThemes = (props?: any, iconProps?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <ActionIcon key={color} color={color} {...props}>
      <GearIcon {...iconProps} />
    </ActionIcon>
  ));

storiesOf('@beautify/core/ActionIcon', module)
  .add('Themes', () => <Group style={{ padding: 20 }}>{getThemes()}</Group>)
  .add('Variants', () => (
    <>
      <p>Default</p>
      <Group style={{ padding: 20 }}>{getThemes()}</Group>

      <p>Transparent Variant</p>
      <Group style={{ padding: 20 }}>{getThemes({ variant: 'transparent' })}</Group>

      <p>Filled Variant</p>
      <Group style={{ padding: 20 }}>{getThemes({ variant: 'filled' })}</Group>

      <p>Light Variant</p>
      <Group style={{ padding: 20 }}>{getThemes({ variant: 'light' })}</Group>

      <p>Outline Variant</p>
      <Group style={{ padding: 20 }}>{getThemes({ variant: 'outline' })}</Group>
    </>
  ))
  .add('Disabled', () => (
    <>
      <Group>{getThemes({ disabled: true })}</Group>
      <Group>{getThemes({ disabled: true, variant: 'filled' })}</Group>
      <Group>{getThemes({ disabled: true, variant: 'transparent' })}</Group>
    </>
  ))
  .add('Sizes', () => (
    <>
      <Group>{getThemes({ size: 'xs' }, { style: { width: 12, height: 12 } })}</Group>
      <Group style={{ marginTop: 20 }}>
        {getThemes({ size: 'sm' }, { style: { width: 14, height: 14 } })}
      </Group>
      <Group style={{ marginTop: 20 }}>
        {getThemes({ size: 'md' }, { style: { width: 16, height: 16 } })}
      </Group>
      <Group style={{ marginTop: 20 }}>
        {getThemes({ size: 'lg' }, { style: { width: 22, height: 22 } })}
      </Group>
      <Group style={{ marginTop: 20 }}>
        {getThemes({ size: 'xl' }, { style: { width: 28, height: 28 } })}
      </Group>
      <Group style={{ marginTop: 20 }}>
        {getThemes({ size: 100 }, { style: { width: 80, height: 80 } })}
      </Group>
    </>
  ))
  .add('Autofocus', () => (
    <ActionIcon autoFocus>
      <GearIcon />
    </ActionIcon>
  ))
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh', padding: 30 }}>
      <Group>{getThemes({ variant: 'filled', themeOverride: { colorScheme: 'dark' } })}</Group>
      <Group style={{ marginTop: 20 }}>
        {getThemes({ variant: 'transparent', themeOverride: { colorScheme: 'dark' } })}
      </Group>
      <Group style={{ marginTop: 20 }}>
        {getThemes({ variant: 'hover', themeOverride: { colorScheme: 'dark' } })}
      </Group>
      <Group style={{ marginTop: 20 }}>
        {getThemes({ variant: 'outline', themeOverride: { colorScheme: 'dark' } })}
      </Group>
      <Group style={{ marginTop: 20 }}>
        {getThemes({ variant: 'light', themeOverride: { colorScheme: 'dark' } })}
      </Group>
      <Group style={{ marginTop: 20 }}>
        {getThemes({ disabled: true, variant: 'filled', themeOverride: { colorScheme: 'dark' } })}
      </Group>
      <Group style={{ marginTop: 20 }}>
        {getThemes({ disabled: true, variant: 'outline', themeOverride: { colorScheme: 'dark' } })}
      </Group>
    </div>
  ));

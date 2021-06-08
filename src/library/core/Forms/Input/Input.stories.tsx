import { storiesOf } from '@storybook/react';
import { Input } from './index';
import { DEFAULT_THEME } from '@library/theme/default-theme';

const MagnifyingGlassIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-4 w-4'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    />
  </svg>
);

const getStates = (props?: any) => (
  <div style={{ maxWidth: 300, padding: 50 }}>
    <Input placeholder='Text' {...props} />
    <Input placeholder='Tel' type='tel' style={{ marginTop: 15 }} {...props} />
    <Input placeholder='Number' type='number' {...props} style={{ marginTop: 15 }} />
    <Input placeholder='Search' type='search' {...props} style={{ marginTop: 15 }} />
    <Input placeholder='Email' type='email' {...props} style={{ marginTop: 15 }} />
    <Input placeholder='Url' type='url' {...props} style={{ marginTop: 15 }} />
    <Input
      placeholder='Invalid'
      icon={<MagnifyingGlassIcon />}
      invalid
      style={{ marginTop: 15 }}
      {...props}
    />
    <Input placeholder='Disabled' disabled style={{ marginTop: 15 }} {...props} />
    <Input
      placeholder='With icon'
      icon={<MagnifyingGlassIcon />}
      style={{ marginTop: 15 }}
      {...props}
    />
    <Input
      style={{ marginTop: 15 }}
      placeholder='With right section'
      rightSection={<MagnifyingGlassIcon />}
      {...props}
    />
    <Input
      style={{ marginTop: 15 }}
      placeholder='Right Section width'
      rightSection={<MagnifyingGlassIcon />}
      rightSectionWidth={50}
      {...props}
    />
  </div>
);

storiesOf('@beautify/core/Input', module)
  .add('Default variant', () => <>{getStates()}</>)
  .add('Filled variant', () => <>{getStates({ variant: 'filled' })}</>)
  .add('Unstyled variant', () => <>{getStates({ variant: 'unstyled' })}</>)
  .add('Custom component: button', () => (
    <>
      {getStates({ component: 'button', children: 'Input button' })}
      {getStates({
        variant: 'filled',
        component: 'button',
        children: 'Input button',
      })}
      {getStates({
        variant: 'unstyled',
        component: 'button',
        children: 'Input button',
      })}
    </>
  ))
  // .add('Custom component: Textarea', () => (
  //   <>
  //     {getStates({ component: Textarea, inputStyle: { paddingTop: 9, paddingBottom: 9 } })}
  //     {getStates({
  //       variant: 'filled',
  //       component: Textarea,
  //       inputStyle: { paddingTop: 9, paddingBottom: 9 },
  //     })}
  //     {getStates({
  //       variant: 'unstyled',
  //       component: Textarea,
  //       inputStyle: { paddingTop: 9, paddingBottom: 9 },
  //     })}
  //   </>
  // ))
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh', padding: 50 }}>
      {getStates({
        themeOverride: { colorScheme: 'dark' },
        inputStyle: { paddingTop: 9, paddingBottom: 9 },
      })}
      {getStates({
        variant: 'filled',
        themeOverride: { colorScheme: 'dark' },
        inputStyle: { paddingTop: 9, paddingBottom: 9 },
      })}
      {getStates({
        variant: 'unstyled',
        themeOverride: { colorScheme: 'dark' },
        inputStyle: { paddingTop: 9, paddingBottom: 9 },
      })}
    </div>
  ));

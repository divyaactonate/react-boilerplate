import { storiesOf } from '@storybook/react';
import { InputField } from './index';
import { DEFAULT_THEME } from '@library/theme/default-theme';

const actionIcon = (
  <div>
    <svg
      className={'w-3 h-3'}
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
      />
    </svg>
  </div>
);

const getStates = (props?: any) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
    }}
  >
    <InputField placeholder='Text' {...props} style={{ marginTop: 15, width: 'fit' }} />
    <InputField placeholder='Tel' type='tel' style={{ marginTop: 15 }} {...props} />
    <InputField placeholder='Number' type='number' {...props} style={{ marginTop: 15 }} />
    <InputField placeholder='Search' type='search' {...props} style={{ marginTop: 15 }} />
    <InputField placeholder='Email' type='email' {...props} style={{ marginTop: 15 }} />
    <InputField placeholder='Password' type='password' {...props} style={{ marginTop: 15 }} />
    <InputField placeholder='Url' type='url' {...props} style={{ marginTop: 15 }} />
    <InputField
      placeholder='Invalid'
      icon={
        <svg
          className={'w-4 h-4'}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='4'
          ></circle>
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          ></path>
        </svg>
      }
      invalid
      style={{ marginTop: 15 }}
      {...props}
    />
    <InputField placeholder='Disabled' disabled style={{ marginTop: 15 }} {...props} />
    <InputField
      placeholder='With icon'
      icon={
        <svg
          className={'w-3 h-3'}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
          />
        </svg>
      }
      style={{ marginTop: 15 }}
      {...props}
    />
    <InputField
      style={{ marginTop: 15 }}
      placeholder='With right section'
      rightSection={actionIcon}
      {...props}
    />
    <InputField
      style={{ marginTop: 15 }}
      icon={
        <svg
          className={'w-3 h-3'}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
          />
        </svg>
      }
      placeholder='Right Section width'
      rightSection={actionIcon}
      rightSectionWidth={50}
      {...props}
    />
  </div>
);

storiesOf('@beautify/core/InputField', module)
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

import { storiesOf } from '@storybook/react';
import { Breadcrum } from './index';
import { Text } from '@library/core/Text';
import { DEFAULT_THEME } from '@library/theme/default-theme';
import { Tooltip } from '@library/core';

const items = [
  { title: 'beautify', href: 'https://beautify.dev' },
  { title: 'beautify hooks', href: 'https://beautify.dev/hooks/getting-started' },
  { title: 'use-id', href: 'https://beautify.dev/hooks/use-id' },
].map((item, index) => (
  <Text<'a'>
    variant='link'
    style={{ cursor: 'pointer' }}
    color={'gray'}
    component='a'
    onClick={() => {
      items.length - 1 === index ? null : (window.location.href = item.href);
    }}
    key={index}
  >
    {item.title}
  </Text>
));

const items1 = [
  { title: 'BI Hub Root', href: 'https://beautify.dev' },
  { title: 'BI Hub', href: 'https://beautify.dev' },
  { title: 'String 3', href: 'https://beautify.dev' },
  { title: 'Text 4', href: 'https://beautify.dev' },
  { title: 'P 5', href: 'https://beautify.dev' },
  { title: 'Testing', href: 'https://beautify.dev' },
  { title: 'Unit testing', href: 'https://beautify.dev' },
  { title: 'Design', href: 'https://beautify.dev' },
].map((item, index) => (
  <Text<'a'>
    variant='link'
    style={{
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      maxWidth: 80,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }}
    color={'gray'}
    component='a'
    onClick={() => {
      items1.length - 1 === index ? null : (window.location.href = item.href);
    }}
    key={index}
  >
    <Tooltip
      placement='bottom-start'
      text={
        <div className='flex justify-center items-center text-white w-50 rounded-sm p-2 bg-blue-500  text-sm shadow-sm'>
          {item.title}
        </div>
      }
    >
      {item.title}
    </Tooltip>
  </Text>
));

storiesOf('@beautify/core/Breadcrum', module)
  .add('General usage', () => (
    <div style={{ padding: 50 }}>
      <Breadcrum>{items}</Breadcrum>
      <Breadcrum style={{ marginTop: 40 }}>{items1}</Breadcrum>
      {/* <Tooltip
        placement='top-end'
        text={
          <div className='flex justify-center items-center text-white w-50 rounded-sm p-2 bg-blue-500  text-sm shadow-sm'>
            top-end
          </div>
        }
      >
        <button className='px-4 py-2 border bg-purple-600 rounded-lg border-black-200 ext-md text-white ml-3'>
          top-end
        </button>
      </Tooltip> */}
    </div>
  ))
  .add('Custom separator', () => (
    <div style={{ padding: 50 }}>
      <Breadcrum style={{ marginTop: 20 }} separator='→'>
        {items}
      </Breadcrum>

      <Breadcrum
        style={{ marginTop: 20 }}
        separator={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='grey'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        }
      >
        {items}
      </Breadcrum>
    </div>
  ))
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh', padding: 50 }}>
      <Breadcrum themeOverride={{ colorScheme: 'dark' }}>
        {[
          { title: 'beautify', href: 'https://beautify.dev' },
          { title: 'beautify hooks', href: 'https://beautify.dev/hooks/getting-started' },
          { title: 'use-id', href: 'https://beautify.dev/hooks/use-id' },
        ].map((item, index) => (
          <Text<'a'>
            variant='link'
            style={{ cursor: 'pointer' }}
            component='a'
            onClick={() => (window.location.href = item.href)}
            key={index}
            themeOverride={{ colorScheme: 'dark' }}
          >
            {item.title}
          </Text>
        ))}
      </Breadcrum>
    </div>
  ));

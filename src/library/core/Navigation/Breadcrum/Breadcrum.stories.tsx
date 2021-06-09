import { storiesOf } from '@storybook/react';
import { Breadcrum } from './index2';
import { Text } from '../../Typography/Text';
import { DEFAULT_THEME } from '@library/theme/default-theme';

const items = [
  { title: 'beautify', href: 'https://beautify.dev' },
  { title: 'beautify hooks', href: 'https://beautify.dev/hooks/getting-started' },
  { title: 'use-id', href: 'https://beautify.dev/hooks/use-id' },
].map((item, index) => (
  <Text<'a'>
    variant='link'
    style={{ cursor: 'pointer' }}
    color={items1.length - 1 === index ? 'gray' : 'blue'}
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
    color={items1.length - 1 === index ? 'gray' : 'blue'}
    component='a'
    onClick={() => {
      items1.length - 1 === index ? null : (window.location.href = item.href);
    }}
    key={index}
  >
    {item.title}
  </Text>
));

storiesOf('@beautify/core/Navigation/Breadcrum', module)
  .add('General usage', () => (
    <div style={{ padding: 50 }}>
      <Breadcrum
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
      <Breadcrum
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
        style={{ marginTop: 40 }}
      >
        {items1}
      </Breadcrum>
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

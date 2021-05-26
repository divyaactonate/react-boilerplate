import { storiesOf } from '@storybook/react';
import { Breadcrum } from './index';
import { Text } from '@library/core/Text';
import { DEFAULT_THEME } from '@library/theme/default-theme';

const items = [
  { title: 'Mantine', href: 'https://mantine.dev' },
  { title: 'Mantine hooks', href: 'https://mantine.dev/hooks/getting-started' },
  { title: 'use-id', href: 'https://mantine.dev/hooks/use-id' },
].map((item, index) => (
  <Text<'a'> variant='link' color={'blue'} component='a' href={item.href} key={index}>
    {item.title}
  </Text>
));

storiesOf('@beautify/core/Breadcrum', module)
  .add('General usage', () => (
    <div style={{ padding: 50 }}>
      <Breadcrum>{items}</Breadcrum>
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
          { title: 'Mantine', href: 'https://mantine.dev' },
          { title: 'Mantine hooks', href: 'https://mantine.dev/hooks/getting-started' },
          { title: 'use-id', href: 'https://mantine.dev/hooks/use-id' },
        ].map((item, index) => (
          <Text<'a'>
            variant='link'
            component='a'
            href={item.href}
            key={index}
            themeOverride={{ colorScheme: 'dark' }}
          >
            {item.title}
          </Text>
        ))}
      </Breadcrum>
    </div>
  ));

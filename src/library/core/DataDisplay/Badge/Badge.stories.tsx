import React from 'react';
import { storiesOf } from '@storybook/react';
import { Badge } from './index';
import { DEFAULT_THEME } from '@library/theme/default-theme';
import { ActionIcon } from '../ActionIcon';
import { Avatar } from '../Avatar';
import { Group } from '../../Others/Group';

const Cross1Icon = (props?: any) => (
  <svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    className='h-4 w-4'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
  </svg>
);

const CustomComponent = ({
  pads,
  children,
  ...others
}: {
  pads: string;
  children: React.ReactNode;
}) => (
  <div {...others}>
    {pads} {children} {pads}
  </div>
);

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors)
    .filter((color) => color !== 'dark')
    .map((color) => (
      <Badge style={{ padding: 10, margin: 5 }} key={color} color={color} {...props}>
        {color}
      </Badge>
    ));

const section = (
  <ActionIcon size='xs' color='blue' radius='xl' variant='transparent'>
    <Cross1Icon style={{ width: 10, height: 10 }} />
  </ActionIcon>
);

storiesOf('@beautify/core/DataDisplay/Badge', module)
  .add('Themes', () => (
    <>
      <Group style={{ padding: 10 }}>{getThemes()}</Group>
      <Group style={{ padding: 10 }}>{getThemes({ variant: 'outline' })}</Group>
      <Group style={{ padding: 10 }}>{getThemes({ variant: 'filled' })}</Group>
    </>
  ))
  .add('Sizes', () => (
    <>
      <p>Size: xs</p>
      <Group style={{ padding: 10 }}>
        {getThemes({ size: 'xs', variant: 'filled' })}
        {getThemes({ size: 'xs', variant: 'outline' })}
        {getThemes({ size: 'xs', variant: 'light' })}
      </Group>

      <p>Size: sm</p>

      <Group style={{ padding: 10 }}>
        {getThemes({ size: 'sm', variant: 'filled' })}
        {getThemes({ size: 'sm', variant: 'outline' })}
        {getThemes({ size: 'sm', variant: 'light' })}
      </Group>

      <p>Size: md</p>

      <Group style={{ padding: 10 }}>
        {getThemes({ size: 'md', variant: 'filled' })}
        {getThemes({ size: 'md', variant: 'outline' })}
        {getThemes({ size: 'md', variant: 'light' })}
      </Group>

      <p>Size: lg</p>

      <Group style={{ padding: 10 }}>
        {getThemes({ size: 'lg', variant: 'filled' })}
        {getThemes({ size: 'lg', variant: 'outline' })}
        {getThemes({ size: 'lg', variant: 'light' })}
      </Group>

      <p>Size: xl</p>

      <Group style={{ padding: 10 }}>
        {getThemes({ size: 'xl', variant: 'filled' })}
        {getThemes({ size: 'xl', variant: 'outline' })}
        {getThemes({ size: 'xl', variant: 'light' })}
      </Group>
    </>
  ))
  .add('Full width', () => (
    <div style={{ width: 300, padding: 20, background: '#f9f9f9' }}>
      <Badge fullWidth>Full width badge</Badge>
      <Badge fullWidth variant='filled' style={{ marginTop: 10 }}>
        Full width badge
      </Badge>
      <Badge fullWidth variant='outline' style={{ marginTop: 10 }}>
        Full width badge
      </Badge>
    </div>
  ))
  .add('Right and left section', () => (
    <Group style={{ padding: 40 }}>
      <Badge className='p-5 m-2' rightSection={section}>
        Badge with right section
      </Badge>

      <Badge
        className='p-5 m-2'
        size='lg'
        color='lime'
        leftSection={
          <Avatar
            size={'2xl'}
            style={{ marginRight: 5 }}
            src='https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4'
          />
        }
      >
        Badge with Avatar
      </Badge>

      <Badge className='p-5 m-2' variant='outline' leftSection={section}>
        Badge with left section
      </Badge>
    </Group>
  ))
  .add('Overflow', () => (
    <div style={{ width: 180 }}>
      <Badge className='py-5 px-2 ' color='red' fullWidth>
        Badge with overflow that shows ellipse
      </Badge>
      <Badge className='py-5 px-2' fullWidth variant='filled' style={{ marginTop: 10 }}>
        Badge with overflow that shows ellipse
      </Badge>
      <Badge
        className='py-5 px-2'
        color='blue'
        fullWidth
        variant='outline'
        style={{ marginTop: 10 }}
      >
        Badge with overflow that shows ellipse
      </Badge>
    </div>
  ))
  .add('Custom component', () => (
    <Group style={{ padding: 20 }}>
      <Badge
        className='p-5 m-2'
        color='red'
        component='a'
        href='https://beautify.dev'
        target='_blank'
      >
        Link badge
      </Badge>
      <Badge className='p-5 m-2' component='button' type='button'>
        Button badge
      </Badge>
      <Badge className='p-5 m-2' color='blue' component={CustomComponent} pads='$$$'>
        Custom component
      </Badge>
    </Group>
  ))
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh' }}>
      <Group style={{ padding: 10 }}>{getThemes({ themeOverride: { colorScheme: 'dark' } })}</Group>
      <Group style={{ padding: 10 }}>
        {getThemes({ themeOverride: { colorScheme: 'dark' }, variant: 'outline' })}
      </Group>
      <Group style={{ padding: 10 }}>
        {getThemes({ themeOverride: { colorScheme: 'dark' }, variant: 'filled' })}
      </Group>
    </div>
  ));

import { Link, MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { ExternalLinkIcon, CalendarIcon } from '@heroicons/react/solid';
import { Button } from './index';
import { BeautifyCase, BeautifySize } from '../../theme';
import { DEFAULT_THEME } from '@library/theme/default-theme';
import { Group } from '../Group';

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Button key={color} color={color} {...props}>
      {color}
    </Button>
  ));

const getLinkThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Button
      component='a'
      href='https://actonate.com/'
      target='_blank'
      key={color}
      color={color}
      {...props}
    >
      link - {color}
    </Button>
  ));

const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as BeautifySize[]).map((size) => (
  <Button key={size} size={size}>
    Button {size}
  </Button>
));
const cases = (['uppercase', 'lowercase', 'capitalize', 'normal-case'] as BeautifyCase[]).map(
  (textCase) => (
    <Button key={textCase} transform={textCase}>
      {textCase}
    </Button>
  )
);

storiesOf('@beautify/core/Button', module)
  .add('Themes', () => (
    <>
      <div className='flex space-x-5 ' style={{ padding: 20 }}>
        {getThemes()}
      </div>
      <div className='flex space-x-5 ' style={{ padding: 20 }}>
        {getThemes({ variant: 'light' })}
      </div>
      <div className='flex space-x-5 ' style={{ padding: 20 }}>
        {getThemes({ variant: 'outline' })}
      </div>
      <div className='flex space-x-5 ' style={{ padding: 20 }}>
        {getThemes({ variant: 'link' })}
      </div>
    </>
  ))
  .add('Link button themes', () => (
    <>
      <div className='flex space-x-5 ' style={{ padding: 20 }}>
        {getLinkThemes()}
      </div>
      <div className='flex space-x-5 ' style={{ padding: 20 }}>
        {getLinkThemes({ variant: 'outline' })}
      </div>
      <div className='flex space-x-5 ' style={{ padding: 20 }}>
        {getLinkThemes({ variant: 'link' })}
      </div>
    </>
  ))
  .add('Sizes', () => <div style={{ padding: 20 }}>{sizes}</div>)
  .add('Text Cases', () => <div style={{ padding: 20 }}>{cases}</div>)
  .add('Icons', () => (
    <>
      <div className='flex space-x-5 ' style={{ padding: 20 }}>
        {getThemes({ leftIcon: <CalendarIcon className='w-5' /> })}
      </div>
      <div className='flex space-x-5 ' style={{ padding: 20 }}>
        {getLinkThemes({
          rightIcon: <ExternalLinkIcon className='w-5' />,
          variant: 'outline',
        })}
      </div>

      <div className='flex space-x-5 ' style={{ padding: 20 }}>
        {getLinkThemes({
          rightIcon: <ExternalLinkIcon className='w-5' />,
          variant: 'link',
        })}
      </div>

      <div className='flex items-center space-x-5 ' style={{ padding: 20 }}>
        {getThemes({
          leftIcon: <CalendarIcon className='w-5' />,
          rightIcon: <ExternalLinkIcon className='w-5' />,
        })}
      </div>
    </>
  ))
  .add('Disabled', () => (
    <>
      <div className='flex space-x-5 ' style={{ padding: 20 }}>
        {getThemes({ disabled: true })}
      </div>
      <div className='flex space-x-5 ' style={{ padding: 20 }}>
        {getThemes({ variant: 'outline', disabled: true })}
      </div>
      <div className='flex space-x-5 ' style={{ padding: 20 }}>
        {getThemes({ variant: 'light', disabled: true })}
      </div>
      <div className='flex space-x-5 ' style={{ padding: 20 }}>
        {getThemes({ variant: 'link', disabled: true })}
      </div>
    </>
  ))
  .add('Full width', () => (
    <div style={{ padding: 20 }}>
      <Button fullWidth>Full width button</Button>
      <Button component='a' fullWidth style={{ marginTop: 20 }}>
        Full width link button
      </Button>
      <Button variant='link' fullWidth style={{ marginTop: 20 }}>
        Full width link variant
      </Button>
    </div>
  ))
  .add('Overflow', () => (
    <div style={{ width: 120, padding: 20, backgroundColor: '#f3f3f3' }}>
      <Button fullWidth>Full width button</Button>
      <Button component='a' fullWidth style={{ marginTop: 20 }}>
        Full width link button
      </Button>
      <Button variant='link' fullWidth style={{ marginTop: 20 }}>
        Full width link variant
      </Button>
    </div>
  ))
  .add('React router', () => (
    <MemoryRouter>
      <div style={{ padding: 20 }}>
        <Button component={Link} to='/'>
          Router button
        </Button>
      </div>
    </MemoryRouter>
  ))
  .add('Loader', () => (
    <Button loadingText='Loading..' isLoading>
      Loader
    </Button>
  ))
  .add('Only spinner', () => <Button isLoading>Loader</Button>)
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh', padding: 50 }}>
      <Group style={{ padding: 20 }}>{getThemes({ themeOverride: { colorScheme: 'dark' } })}</Group>
      <Group style={{ padding: 20 }}>
        {getThemes({ themeOverride: { colorScheme: 'dark' }, variant: 'light' })}
      </Group>
      <Group style={{ padding: 20 }}>
        {getThemes({ themeOverride: { colorScheme: 'dark' }, variant: 'outline' })}
      </Group>
      <Group style={{ padding: 20 }}>
        {getThemes({ themeOverride: { colorScheme: 'dark' }, variant: 'link' })}
      </Group>
      <Group style={{ padding: 20 }}>
        {getThemes({ themeOverride: { colorScheme: 'dark' }, disabled: true })}
      </Group>
      <Group style={{ padding: 20 }}>
        {getThemes({ themeOverride: { colorScheme: 'dark' }, variant: 'outline', disabled: true })}
      </Group>
      <Group style={{ padding: 20 }}>
        {getThemes({ themeOverride: { colorScheme: 'dark' }, variant: 'link', disabled: true })}
      </Group>
    </div>
  ));

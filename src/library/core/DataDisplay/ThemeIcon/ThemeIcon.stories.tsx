import { storiesOf } from '@storybook/react';
import { ReplyIcon } from '@heroicons/react/solid';
import { Group } from '../../Others/Group';
import { ThemeIcon } from '.';
import { DEFAULT_THEME } from '@library/theme/default-theme';
import { BeautifyProvider } from '@library/theme';

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <ThemeIcon key={color} color={color} style={{ marginTop: 20 }} size='lg' {...props}>
      <ReplyIcon />
    </ThemeIcon>
  ));
const getSizes = (props?: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
    <ThemeIcon key={size} style={{ marginTop: 20 }} size={size} {...props}>
      <ReplyIcon />
    </ThemeIcon>
  ));
const getRadius = (props?: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((radius) => (
    <ThemeIcon key={radius} style={{ marginTop: 20 }} radius={radius} {...props}>
      <ReplyIcon />
    </ThemeIcon>
  ));
storiesOf('@beautify/core/DataDisplay/ThemeIcon', module)
  .add('Size', () => <Group style={{ padding: 20 }}>{getSizes()}</Group>)

  .add('Radius', () => <Group style={{ padding: 20 }}>{getRadius()}</Group>)
  .add('Filled variant', () => <Group style={{ padding: 20 }}>{getThemes()}</Group>)

  .add('Light variant', () => (
    <Group style={{ padding: 20 }}>{getThemes({ variant: 'light' })}</Group>
  ))
  .add('Dark theme', () => (
    <BeautifyProvider theme={{ colorScheme: 'dark' }}>
      <div
        style={{ backgroundColor: DEFAULT_THEME.colors.dark[7], padding: 40, minHeight: '100vh' }}
      >
        <Group style={{ padding: 20 }}>{getThemes()}</Group>
        <Group style={{ padding: 20 }}>{getThemes({ variant: 'light' })}</Group>
      </div>
    </BeautifyProvider>
  ));

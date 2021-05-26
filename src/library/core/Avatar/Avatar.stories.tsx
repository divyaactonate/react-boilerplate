import { storiesOf } from '@storybook/react';
import { PaperClipIcon } from '@heroicons/react/solid';
import { Group } from '../Group';
import { Avatar } from '.';
import { DEFAULT_THEME } from '@library/theme/default-theme';

const getSizes = (props?: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((size) => <Avatar key={size} size={size} {...props} />);

const getRadius = (props?: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((size) => <Avatar key={size} radius={size} {...props} />);

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => <Avatar key={color} color={color} {...props} />);

const image = 'https://avatars.githubusercontent.com/u/4598631?v=4';

storiesOf('@beautify/core/Avatar', module)
  .add('Sizes', () => (
    <Group>{getSizes({ src: image, radius: 'md', style: { margin: '20px' } })}</Group>
  ))
  .add('Radius', () => (
    <Group>{getRadius({ src: image, size: 'xl', style: { margin: '20px' } })}</Group>
  ))
  .add('Placeholder', () => <Group>{getSizes({ radius: 'lg', style: { margin: '20px' } })}</Group>)
  .add('Icon avatar', () => (
    <Group style={{ padding: 15 }}>
      {getThemes({
        size: 'xl',
        style: { margin: '20px' },
        children: <PaperClipIcon style={{ width: 40, height: 40 }} />,
      })}
    </Group>
  ))
  .add('Letter avatar', () => (
    <Group style={{ padding: 15 }}>
      {getThemes({ size: 'xl', children: 'VR', radius: 'xl', style: { margin: '20px' } })}
    </Group>
  ))
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh' }}>
      <Group style={{ padding: 15 }}>
        {getThemes({
          themeOverride: { colorScheme: 'dark' },
          children: <PaperClipIcon style={{ width: 24, height: 24 }} />,
        })}
      </Group>
      <Group style={{ padding: 15 }}>
        {getThemes({
          themeOverride: { colorScheme: 'dark' },
          children: 'VR',
        })}
      </Group>
      <Group style={{ padding: 15 }}>{getSizes({ themeOverride: { colorScheme: 'dark' } })}</Group>
      <Group style={{ padding: 15 }}>
        {getSizes({ src: image, themeOverride: { colorScheme: 'dark' } })}
      </Group>
    </div>
  ));

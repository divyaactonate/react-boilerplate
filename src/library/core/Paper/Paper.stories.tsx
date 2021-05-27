import { DEFAULT_THEME } from '@library/theme/default-theme';
import { storiesOf } from '@storybook/react';
import { Text } from '../Text';
import { Paper } from './index';

const getShadows = (props?: any) =>
  (['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'inner'] as const).map((shadow) => (
    <Paper style={{ width: 260, margin: 30 }} key={shadow} shadow={shadow} padding='md' {...props}>
      <Text {...props}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, temporibus excepturi,
        placeat quam eius quisquam ad nostrum magnam molestias voluptates minima minus natus
        dignissimos reiciendis quasi repellat quos voluptas ullam.
      </Text>
    </Paper>
  ));
const getPaddings = (props?: any) =>
  (
    [
      'none',
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
      '2xl',
      '3xl',
      '4xl',
      '5xl',
      '6xl',
      '7xl',
      '8xl',
      '9xl',
    ] as const
  ).map((padding) => (
    <Paper style={{ width: 260, margin: 30 }} key={padding} padding={padding} {...props}>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, temporibus excepturi,
        placeat quam eius quisquam ad nostrum magnam molestias voluptates minima minus natus
        dignissimos reiciendis quasi repellat quos voluptas ullam.
      </Text>
    </Paper>
  ));
const getRadius = (props?: any) =>
  (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((radius) => (
    <Paper style={{ width: 260, margin: 30 }} key={radius} radius={radius} {...props}>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, temporibus excepturi,
        placeat quam eius quisquam ad nostrum magnam molestias voluptates minima minus natus
        dignissimos reiciendis quasi repellat quos voluptas ullam.
      </Text>
    </Paper>
  ));

storiesOf('@beautify/core/Paper', module)
  .add('Radius', () => <div style={{ padding: 40 }}>{getRadius()}</div>)
  .add('Padding', () => <div style={{ padding: 40 }}>{getPaddings()}</div>)
  .add('Shadows', () => <div style={{ padding: 40 }}>{getShadows()}</div>)
  .add('Dark theme', () => (
    <div style={{ backgroundColor: DEFAULT_THEME.colors.dark[5], padding: 40 }}>
      {getShadows({ themeOverride: { colorScheme: 'dark' } })}
    </div>
  ));

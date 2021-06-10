import { BeautifyHeading } from '@library/theme';
import { DEFAULT_THEME } from '@library/theme/default-theme';
import { storiesOf } from '@storybook/react';
import { Title } from '.';

const getThemes = () =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Title key={color} color={color}>
      Color-{color} title
    </Title>
  ));
const getSizes = (themeOverride?: any) =>
  ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] as BeautifyHeading[]).map((order) => (
    <Title themeOverride={themeOverride} key={order} order={order}>
      Order-{order} title
    </Title>
  ));

storiesOf('@beautify/core/Typography/Title', module)
  .add('Themes', () => <div>{getThemes()}</div>)
  .add('Sizes', () => <div>{getSizes()}</div>)
  .add('Dark theme', () => (
    <div style={{ backgroundColor: DEFAULT_THEME.colors.dark[7], padding: 40, minHeight: '100vh' }}>
      {getSizes({ colorScheme: 'dark' })}
    </div>
  ));

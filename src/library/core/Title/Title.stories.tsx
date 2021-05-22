import { BeautifyHeading } from '@library/theme';
import { tailwindColors } from '@library/theme/colors';
import { storiesOf } from '@storybook/react';
import { Title } from '.';

const getThemes = () =>
  Object.keys(tailwindColors).map((color) => (
    <Title key={color} color={color}>
      Color-{color} title
    </Title>
  ));
const getSizes = () =>
  ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] as BeautifyHeading[]).map((order) => (
    <Title key={order} order={order}>
      Order-{order} title
    </Title>
  ));

storiesOf('@beautify/core/Title', module)
  .add('Themes', () => <div>{getThemes()}</div>)
  .add('Sizes', () => <div>{getSizes()}</div>);

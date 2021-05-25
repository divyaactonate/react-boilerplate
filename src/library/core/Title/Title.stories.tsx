import { BeautifyHeading, tailwindColors } from '@library/theme';

import { storiesOf } from '@storybook/react';
import { Title } from '.';

const getThemes = () =>
  Object.keys(tailwindColors).map((colorScheme) => (
    <Title key={colorScheme} colorScheme={colorScheme}>
      Color-{colorScheme} title
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

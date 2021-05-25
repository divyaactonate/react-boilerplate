import { storiesOf } from '@storybook/react';
import { Text } from '../Text';
import { Title } from '../Title';
import { Container } from '.';
import { tailwindColors } from '@library/theme';

const content = (
  <Text>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit natus illum quaerat dicta maxime
    dolore saepe sit quibusdam error eos libero exercitationem vitae a qui rerum, eveniet expedita.
    Eos, ipsa!
  </Text>
);

const containers = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
  <Container size={size} key={size} style={{ marginTop: 20 }}>
    <Title order={4}>Container size: {size}</Title>
    {content}
  </Container>
));
const getThemes = () =>
  Object.keys(tailwindColors).map((colorScheme) => (
    <Container key={colorScheme} colorScheme={colorScheme} style={{ marginTop: 20 }}>
      <Title order={4}>Container size: {colorScheme}</Title>
      {content}
    </Container>
  ));
storiesOf('@beautify/core/Container', module)
  .add('Themes', () => <>{getThemes()}</>)
  .add('Sizes', () => <>{containers}</>)
  .add('Fluid', () => (
    <Container fluid>
      <Title order={4}>Fluid Container</Title>
      {content}
    </Container>
  ));

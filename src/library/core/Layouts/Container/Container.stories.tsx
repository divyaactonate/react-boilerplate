import { DEFAULT_THEME } from '@library/theme/default-theme';
import { storiesOf } from '@storybook/react';
import { Container } from '.';
import { Text } from '../../Typography/Text';
import { Title } from '../../Typography/Title';

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
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Container key={color} color={color} style={{ marginTop: 20 }}>
      <Title order={4}>Container size: {color}</Title>
      {content}
    </Container>
  ));
storiesOf('@beautify/core/Layouts/Container', module)
  .add('Themes', () => <>{getThemes()}</>)
  .add('Sizes', () => <>{containers}</>)
  .add('Fluid', () => (
    <Container fluid>
      <Title order={4}>Fluid Container</Title>
      {content}
    </Container>
  ));

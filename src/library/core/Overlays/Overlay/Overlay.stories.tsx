import { storiesOf } from '@storybook/react';
import { Overlay } from '.';

storiesOf('@beautify/core/Overlay', module)
  .add('General usage', () => <Overlay color='#000' opacity={0.5} />)
  .add('Different Color', () => <Overlay color='blue' opacity={0.5} />)
  .add('Opacity 0.2', () => <Overlay color='green' opacity={0.2} />)
  .add('Custom component', () => (
    <Overlay color='#000' opacity={0.5} component='a' href='https://google.com' target='_blank' />
  ));

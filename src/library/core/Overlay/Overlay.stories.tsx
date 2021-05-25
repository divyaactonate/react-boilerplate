import { storiesOf } from '@storybook/react';
import { Overlay } from '.';

storiesOf('@beautify/core/Overlay', module)
  .add('General usage', () => <Overlay color='#000' opacity={0.5} />)
  .add('Custom component', () => (
    <Overlay color='#000' opacity={0.5} component='a' href='https://google.com' target='_blank' />
  ));

import { storiesOf } from '@storybook/react';
import { Button } from '../Button';
import { Group } from '.';

const positions = (['start', 'center', 'end', 'between', 'around', 'evenly'] as const).map(
  (position) => (
    <div style={{ padding: 15, backgroundColor: '#f3f3f3', margin: 20 }} key={position}>
      <Group position={position}>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Group>
    </div>
  )
);

const spacingsRow = ([0, 2, 6, 8, 10, 12, 14] as const).map((spacing) => (
  <div style={{ padding: 15, backgroundColor: '#f3f3f3', margin: 20 }} key={spacing}>
    <Group direction='row' spacing={spacing}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Group>
  </div>
));
const spacingsColumn = ([0, 2, 6, 8, 10, 12, 14] as const).map((spacing) => (
  <div style={{ padding: 15, backgroundColor: '#f3f3f3', margin: 20 }} key={spacing}>
    <Group direction='column' spacing={spacing}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Group>
  </div>
));

storiesOf('@beautify/core/Group', module)
  .add('Positions', () => <>{positions}</>)
  .add('SpacingsRow', () => <>{spacingsRow}</>)
  .add('SpacingsColumn', () => <>{spacingsColumn}</>)
  .add('No wrap', () => (
    <div style={{ padding: 15, maxWidth: 200, backgroundColor: '#f3f3f3' }}>
      <Group wrap='nowrap'>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Group>
    </div>
  ))
  .add('wrap', () => (
    <div style={{ padding: 15, maxWidth: 200, backgroundColor: '#f3f3f3' }}>
      <Group wrap='wrap'>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Group>
    </div>
  ))
  .add('Grow', () => (
    <div style={{ padding: 15, backgroundColor: '#f3f3f3' }}>
      <Group grow>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </Group>
    </div>
  ));

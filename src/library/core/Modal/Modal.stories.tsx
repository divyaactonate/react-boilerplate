import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../Button';
import { Text } from '../Text';
import { Portal } from '../Portal';
import { Modal } from '.';
import { DEFAULT_THEME } from '@library/theme/default-theme';
import { BeautifyProvider } from '@library/theme';

const Form = () => {
  return <>Hello</>;
};

function WrappedModal(props: Omit<React.ComponentProps<typeof Modal>, 'opened' | 'onClose'>) {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ padding: 50 }}>
      <Button onClick={() => setOpened(true)}>Open Modal</Button>
      <Modal opened={opened} onClose={() => setOpened(false)} {...props} />
    </div>
  );
}

function InPortal() {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ padding: 50 }}>
      <Button onClick={() => setOpened(true)}>Open Modal</Button>
      <Portal>
        <Modal title='Authenticate in portal' opened={opened} onClose={() => setOpened(false)}>
          <Form />
        </Modal>
      </Portal>
    </div>
  );
}

storiesOf('@beautify/core/Modal', module)
  .add('General usage', () => (
    <WrappedModal title='Modal Title'>
      <Form />
    </WrappedModal>
  ))
  .add('Horizontal overflow', () => (
    <WrappedModal title='This title is so large that there is no space to fit it all on single line and it will wrap on the second one or may be even on the third one'>
      IDecidedToPutSoMuchUnbreakableContentInsideModalSoThatItWillOverflow
    </WrappedModal>
  ))
  .add('Inside portal', () => <InPortal />)
  .add('Vertical scroll', () => (
    <WrappedModal title='Modal Title'>
      {Array(100)
        .fill('REACT IS NOT A FRAMEWORK')
        .map((c, i) => (
          <Text key={i} weight={'extrabold'}>
            {c}
          </Text>
        ))}
    </WrappedModal>
  ))
  .add('Inside overflow', () => (
    <WrappedModal title='Modal Title' overflow='inside'>
      {Array(100)
        .fill('REACT IS NOT A FRAMEWORK')
        .map((c, i) => (
          <Text key={i} weight={'extrabold'}>
            {c}
          </Text>
        ))}
    </WrappedModal>
  ))
  .add('xs', () => (
    <WrappedModal title='Modal Title' size='xs'>
      <Form />
    </WrappedModal>
  ))
  .add('sm', () => (
    <WrappedModal title='Modal Title' size='sm'>
      <Form />
    </WrappedModal>
  ))
  .add('md', () => (
    <WrappedModal title='Modal Title' size='md'>
      <Form />
    </WrappedModal>
  ))
  .add('lg', () => (
    <WrappedModal title='Modal Title' size='lg'>
      <Form />
    </WrappedModal>
  ))
  .add('xl', () => (
    <WrappedModal title='Modal Title' size='xl'>
      <Form />
    </WrappedModal>
  ))
  .add('full', () => (
    <WrappedModal title='Modal Title' size='full'>
      <Form />
    </WrappedModal>
  ))
  .add('Radius', () => (
    <WrappedModal title='Modal Title' radius='xl'>
      <Form />
    </WrappedModal>
  ))
  .add('Dark theme', () => (
    <BeautifyProvider theme={{ colorScheme: 'dark' }}>
      <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh', padding: 50 }}>
        <WrappedModal title='Modal Title'>
          <Form />
        </WrappedModal>
      </div>
    </BeautifyProvider>
  ));

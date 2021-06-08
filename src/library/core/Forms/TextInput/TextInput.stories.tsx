import { BeautifySize } from '@library/theme';
import { storiesOf } from '@storybook/react';
import { TextInput } from './index';
import { ArrowLeftIcon, ArrowSmRightIcon } from '@heroicons/react/solid';

const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as any[]).map((s) => (
  <TextInput defaultValue='kaushal' key={s} size={s} />
));
const radius = (['xs', 'sm', 'md', 'lg', 'xl'] as BeautifySize[]).map((size) => (
  <TextInput defaultValue='kaushal' key={size} radius={size} />
));
storiesOf('@beautify/core/TextInput', module)
  .add('default', () => <TextInput />)
  .add('Sizes', () => <div style={{ padding: 20 }}>{sizes}</div>)
  .add('Radius', () => <div style={{ padding: 20 }}>{radius}</div>)
  .add('Icon', () => (
    <>
      <TextInput leftIcon={<ArrowLeftIcon className='w-8' />} />
      <TextInput defaultValue='kaushal' rightIcon={<ArrowSmRightIcon className='w-8' />} />
      <TextInput
        leftIcon={<ArrowLeftIcon className='w-8' />}
        rightIcon={<ArrowSmRightIcon className='w-8' />}
      />
    </>
  ));

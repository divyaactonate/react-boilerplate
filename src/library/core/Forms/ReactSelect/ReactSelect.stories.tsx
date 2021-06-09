import { BeautifySize } from '@library/theme';
import { storiesOf } from '@storybook/react';
import { ReactSelect } from './index';

export const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as any[]).map((size) => (
  <ReactSelect wrapperClass='w-56' options={colourOptions} key={size} size={size} />
));
const radius = (['xs', 'sm', 'md', 'lg', 'xl'] as BeautifySize[]).map((size) => (
  <ReactSelect wrapperClass='w-56' options={colourOptions} key={size} radius={size} />
));
storiesOf('@beautify/core/Forms/ReactSelect', module)
  .add('default', () => <ReactSelect wrapperClass='w-56' options={colourOptions} />)
  .add('Sizes', () => (
    <div className='flex flex-col space-y-6' style={{ padding: 20 }}>
      {sizes}
    </div>
  ))
  .add('radius', () => <div style={{ padding: 20 }}>{radius}</div>)
  .add('loading', () => <ReactSelect wrapperClass='w-56' isLoading options={colourOptions} />)
  .add('multiple mode', () => (
    <ReactSelect wrapperClass='w-56' mode='multiple' options={colourOptions} />
  ))
  .add('default value', () => (
    <div style={{ padding: 20 }}>
      <ReactSelect wrapperClass='w-56' defaultValue='ocean' options={colourOptions} />
      <ReactSelect
        wrapperClass='w-56'
        defaultValue={['ocean', 'blue']}
        mode='multiple'
        options={colourOptions}
      />
    </div>
  ));

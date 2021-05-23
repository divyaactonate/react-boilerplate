import { BeautifySize } from '@library/theme';
import { tailwindColors } from '@library/theme/colors';
import { storiesOf } from '@storybook/react';
import { Spinner } from './index';

const sizes = [2, 4, 6, 8, 10, 12, 14, 16, 20].map((size) => (
  <Spinner key={size} size={size}></Spinner>
));
const getThemes = () =>
  Object.keys(tailwindColors).map((colorScheme) => (
    <Spinner size={20} speed='0.9s' thickness='lg' key={colorScheme} color={colorScheme}></Spinner>
  ));
const getNorders = () =>
  (['sm', 'md', 'lg'] as BeautifySize[]).map((tick) => (
    <Spinner size={20} speed='0.9s' thickness={tick} key={tick}></Spinner>
  ));
const speeds = () =>
  ['0.5', '0.6', '0.7', '0.8', '0.9'].map((tick) => (
    <Spinner size={20} speed={tick + 's'} thickness={'md'} key={tick}></Spinner>
  ));
storiesOf('@beautify/core/Spinner', module)
  .add('default', () => <Spinner size={20} />)
  .add('sizes', () => <>{sizes}</>)
  .add('colors', () => <>{getThemes()}</>)
  .add('borders', () => <>{getNorders()}</>)
  .add('speed', () => <>{speeds()}</>);

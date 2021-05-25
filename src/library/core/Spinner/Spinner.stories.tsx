import { BeautifySize } from '@library/theme';
import { DEFAULT_THEME } from '@library/theme/default-theme';
import { storiesOf } from '@storybook/react';
import { Spinner } from './index';

const sizes = [2, 4, 6, 8, 10, 12, 14, 16, 20].map((size) => (
  <Spinner key={size} size={size}></Spinner>
));
const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((colorScheme) => (
    <Spinner
      size={20}
      speed='0.9s'
      thickness='lg'
      key={colorScheme}
      color={colorScheme}
      {...props}
    ></Spinner>
  ));
const getBorders = () =>
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
  .add('borders', () => <>{getBorders()}</>)
  .add('speed', () => <>{speeds()}</>)
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh', padding: 50 }}>
      {getThemes({ colorScheme: 'dark' })}
    </div>
  ));

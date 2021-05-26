import { DEFAULT_THEME } from '@library/theme/default-theme';
import { storiesOf } from '@storybook/react';
import { Loader } from './index';

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Loader key={color} color={color} style={{ display: 'block', marginTop: 15 }} {...props} />
  ));

const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
  <Loader key={size} size={size} style={{ display: 'block', marginTop: 15 }} />
));

storiesOf('@beautify/core/Loader', module)
  .add('Themes', () => <div className='flex space-x-6 '>{getThemes()}</div>)
  .add('Sizes', () => <div className='flex space-x-6'>{sizes}</div>);

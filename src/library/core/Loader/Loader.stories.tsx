import { tailwindColors } from '@library/theme';
import { storiesOf } from '@storybook/react';
import { Loader } from './index';

const getThemes = (props?: any) =>
  Object.keys(tailwindColors).map((colorScheme) => (
    <Loader
      key={colorScheme}
      colorScheme={colorScheme}
      style={{ display: 'block', marginTop: 15 }}
      {...props}
    />
  ));

const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
  <Loader key={size} size={size} style={{ display: 'block', marginTop: 15 }} />
));

storiesOf('@beautify/core/Loader', module)
  .add('Themes', () => <div className='flex space-x-6 '>{getThemes()}</div>)
  .add('Sizes', () => <div className='flex space-x-6'>{sizes}</div>);

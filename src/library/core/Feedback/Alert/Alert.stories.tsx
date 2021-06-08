import { storiesOf } from '@storybook/react';
import { Alert } from '.';
import { BellIcon } from '@heroicons/react/outline';
import { DEFAULT_THEME } from '@library/theme/default-theme';

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Alert key={color} color={color} {...props} style={{ marginTop: 20 }}>
      Alert body with {color} color, Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptatem, reiciendis?
    </Alert>
  ));
const statuses = ['error', 'success', 'warning', 'info'].map((color: any) => (
  <Alert key={color} status={color} style={{ marginTop: 20 }}>
    Alert body with {color} color, Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Voluptatem, reiciendis?
  </Alert>
));

const variant = ['subtle', 'solid', 'leftAccent', 'topAccent'].map((color: any) => (
  <Alert key={color} variant={color} style={{ marginTop: 20 }}>
    Data uploaded to the server. Fire on
  </Alert>
));

const shadows = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'inner'].map((color: any) => (
  <Alert key={color} shadow={color} style={{ marginTop: 20 }}>
    Data uploaded to the server. Fire on
  </Alert>
));
storiesOf('@beautify/core/Alert', module)
  .add('Themes', () => (
    <div style={{ maxWidth: 800, padding: 50 }}>{getThemes({ title: 'Alert title' })}</div>
  ))
  .add('Status', () => <div style={{ maxWidth: 800, padding: 50 }}>{statuses}</div>)
  .add('CustomIcon', () => (
    <div style={{ maxWidth: 800, padding: 50 }}>
      <Alert
        icon={<BellIcon className='w-10 text-purple-600' />}
        color='purple'
        style={{ marginTop: 20 }}
      >
        Data uploaded to the server. Fire on
      </Alert>
    </div>
  ))
  .add('shadows', () => <div style={{ maxWidth: 800, padding: 50 }}>{shadows}</div>)

  .add('variant', () => <div style={{ maxWidth: 800, padding: 50 }}>{variant}</div>)
  .add('Without title', () => <div style={{ maxWidth: 800, padding: 50 }}>{getThemes({})}</div>)
  .add('Content overflow', () => (
    <div style={{ maxWidth: 800, padding: 50 }}>
      <Alert title='Alert title that is too large and will definitely take more that one line to render'>
        Alert body
      </Alert>

      <Alert
        title='AlertTitleWithoutSpacesThatWillNotBreakToAnotherLineAndWillDamageTheLayout'
        style={{ marginTop: 20 }}
      >
        AlertBodyWithoutSpacesThatWillNotBreakToAnotherLineAndWillDamageTheLayout
      </Alert>
    </div>
  ))
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh' }}>
      <div style={{ maxWidth: 800, padding: 50 }}>
        {getThemes({ title: 'Alert title', themeOverride: { colorScheme: 'dark' } })}
        {getThemes({ themeOverride: { colorScheme: 'dark' } })}
      </div>
    </div>
  ));

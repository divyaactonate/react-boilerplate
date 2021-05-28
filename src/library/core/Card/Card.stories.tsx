import { storiesOf } from '@storybook/react';
import { Card } from './index';

storiesOf('@beautify/core/Card', module)
  .add('With image', () => {
    return (
      <div className='ml-10 mt-10 max-w-sm'>
        <Card image='/public/assets/img/tdms/loginScreen.png' />
      </div>
    );
  })
  .add('Wthout image', () => {
    return (
      <div className='ml-10 mt-10 max-w-sm'>
        <Card image='' />
      </div>
    );
  })
  .add('Dark theme', () => {
    return (
      <div className='ml-10 mt-10 max-w-sm'>
        <Card themeOverride={{ colorScheme: 'dark' }} image='' />
      </div>
    );
  });

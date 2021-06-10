import { BeautifyCase, BeautifySize } from '@library/theme';
import { storiesOf } from '@storybook/react';
import { TextInput } from '..';
import { InputsWrapper } from './index';

const cases = (['uppercase', 'lowercase', 'capitalize', 'normal-case'] as BeautifyCase[]).map(
  (s) => (
    <InputsWrapper transform={s} key={s} label='Email address'>
      <TextInput placeholder='you@example.com' defaultValue='Kaushal' />
    </InputsWrapper>
  )
);
const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as BeautifySize[]).map((size) => (
  <InputsWrapper key={size} size={size} label='Email address'>
    <TextInput placeholder='you@example.com' defaultValue='Kaushal' />
  </InputsWrapper>
));
storiesOf('@beautify/core/Forms/InputsWrapper', module)
  .add('default', () => (
    <InputsWrapper label='Email address'>
      <TextInput placeholder='you@example.com' defaultValue='Kaushal' />
    </InputsWrapper>
  ))
  .add('Sizes', () => <div style={{ padding: 20 }}>{sizes}</div>)
  .add('cases', () => <div style={{ padding: 20 }}>{cases}</div>)
  .add('required', () => (
    <InputsWrapper required label='Email address'>
      <TextInput placeholder='you@example.com' defaultValue='Kaushal' />
    </InputsWrapper>
  ))
  .add('error', () => (
    <InputsWrapper isInvalid errorMessage='it has some error' required label='Email address'>
      <TextInput placeholder='you@example.com' defaultValue='Kaushal' />
    </InputsWrapper>
  ));

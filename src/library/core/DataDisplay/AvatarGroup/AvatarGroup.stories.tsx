import { DEFAULT_THEME } from '@library/theme/default-theme';
import { storiesOf } from '@storybook/react';
import { Avatar } from '..';
import { AvatarGroup } from './index';
const image = 'https://avatars.githubusercontent.com/u/4598631?v=4';

storiesOf('@beautify/core/AvatarGroup', module)
  .add('default', () => (
    <AvatarGroup size='md' max={2}>
      <Avatar src={image} />
      <Avatar src='https://bit.ly/sage-adebayo' />
      <Avatar src='https://bit.ly/kent-c-dodds' />
      <Avatar src='https://bit.ly/prosper-baba' />
      <Avatar src='https://bit.ly/code-beast' />
    </AvatarGroup>
  ))
  .add('Dark theme', () => (
    <AvatarGroup
      style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh', padding: 50 }}
      themeOverride={{ colorScheme: 'dark' }}
      size='md'
      max={2}
    >
      <Avatar src={image} />
      <Avatar src='https://bit.ly/sage-adebayo' />
      <Avatar src='https://bit.ly/kent-c-dodds' />
      <Avatar src='https://bit.ly/prosper-baba' />
      <Avatar src='https://bit.ly/code-beast' />
    </AvatarGroup>
  ))
  .add('Name', () => (
    <AvatarGroup size='md' spacing={5} max={3}>
      <Avatar> HI</Avatar>
      <Avatar>HI</Avatar>
      <Avatar>HI</Avatar>
      <Avatar>HI</Avatar>
      <Avatar>HI</Avatar>
    </AvatarGroup>
  ))
  .add('Spacing', () => (
    <AvatarGroup size='xl' spacing={9} max={3}>
      <Avatar src={image}> HI</Avatar>
      <Avatar src={image}>HI</Avatar>
      <Avatar src={image}>HI</Avatar>
      <Avatar src={image}>HI</Avatar>
      <Avatar src={image}>HI</Avatar>
    </AvatarGroup>
  ))
  .add('Max prop', () => (
    <AvatarGroup size='xl' spacing={2} max={4}>
      <Avatar src={image}> HI</Avatar>
      <Avatar src={image}>HI</Avatar>
      <Avatar src={image}>HI</Avatar>
      <Avatar src={image}>HI</Avatar>
      <Avatar src={image}>HI</Avatar>
      <Avatar src={image}>HI</Avatar>
      <Avatar src={image}>HI</Avatar>
      <Avatar src={image}>HI</Avatar>
      <Avatar src={image}>HI</Avatar>
      <Avatar src={image}>HI</Avatar>
    </AvatarGroup>
  ));

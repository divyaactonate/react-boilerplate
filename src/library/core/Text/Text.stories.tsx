import { tailwindColors } from '@library/theme/colors';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Anchor, Text } from '.';

const CustomComponent = ({
  emoji,
  children,
  ...others
}: {
  emoji: string;
  children: React.ReactNode;
}) => (
  <div {...others}>
    {emoji} {children}
  </div>
);

const getThemes = (props?: any) =>
  Object.keys(tailwindColors).map((colorScheme) => (
    <Text key={colorScheme} colorScheme={colorScheme} style={{ marginTop: 5 }} {...props}>
      {colorScheme} text
    </Text>
  ));

const sizes = (
  ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'] as const
).map((size) => (
  <Text size={size} key={size}>
    {size} text
  </Text>
));

storiesOf('@beautify/core/Text', module)
  .add('General usage', () => (
    <>
      <Text>Default text</Text>
      <Text weight={'extrabold'}>Semibold text</Text>
      <Text weight={'bold'}>Bold text</Text>
      <Text transform='uppercase'>uppercase</Text>
      <Text transform='lowercase'>LOWERcase</Text>
      <Text component='i'>italic</Text>
      <Anchor href='https://actonate.com/' target='_blank'>
        Anchor
      </Anchor>
    </>
  ))
  .add('Custom component', () => (
    <Text component={CustomComponent} emoji='😮'>
      Custom component
    </Text>
  ))
  .add('Multiline', () => (
    <Text style={{ padding: 20 }}>
      Multiline: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque commodi
      perferendis velit itaque. Harum magnam voluptas molestias a dolore atque hic. Repudiandae
      aliquam et hic aut ducimus debitis voluptatem cumque veniam aliquid commodi, ratione quae iste
      similique aperiam tenetur quo eius labore rem animi ex. Assumenda deserunt dolore, dicta vero
      veritatis enim perferendis ea inventore earum alias adipisci error quisquam obcaecati officia
      suscipit quidem sequi qui? Itaque asperiores perspiciatis sit iure eum voluptate commodi
      officia pariatur quae consectetur atque error, facere illum ad corrupti, rerum aperiam
      molestias cupiditate numquam ipsa ratione doloremque repudiandae? Eveniet deleniti consequatur
      officia rem quisquam enim.
    </Text>
  ))
  .add('Themes', () => <div style={{ padding: 20 }}>{getThemes()}</div>)
  .add('Sizes', () => <div style={{ padding: 20 }}>{sizes}</div>)
  .add('Link', () => (
    <div style={{ padding: 20 }}>
      <Text component='a' href='https://actonate.com/' variant='link'>
        Link
      </Text>
    </div>
  ));

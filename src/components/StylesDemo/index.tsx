/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import './plains.scss';
import './plain.css';
import tw from 'twin.macro';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Heading = tw.h1`text-white text-2xl p-2`;
const Container = tw.div`bg-gray-600 p-5 mx-auto mt-5`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const StyledComponent = () => {
  return (
    <Wrapper>
      <Title>StyledComponent Demo!</Title>
    </Wrapper>
  );
};
const Tailwind = () => {
  return (
    <>
      <h1 tw='text-white text-xl bg-black p-20'>Tailwind Demo</h1>
    </>
  );
};
const PlainCss = () => {
  return (
    <>
      <h1 className='app-css'>Csss Demo</h1>
      <h1 className='app-scss'>Scss Demo</h1>
      {/* <h1 tw={styles.app}>Css Module Demo Not working :( </h1> */}
    </>
  );
};
const TwinTailwind = () => {
  return (
    <div tw='bg-green-400 mx-auto p-5 mt-5'>
      <h1 tw='text-blue-500 text-4xl'>Hello world</h1>
    </div>
  );
};
const TwinEmotion = () => {
  return (
    <Container>
      <Heading>My custom heading</Heading>
    </Container>
  );
};
export { StyledComponent, TwinTailwind, Tailwind, TwinEmotion, PlainCss };

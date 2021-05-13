import styled from 'styled-components';
import styles from './plain.css';
import './plains.scss';
import './plain.css';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

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
      <h1 className='text-white text-xl bg-black p-20'>Tailwind Demo</h1>
    </>
  );
};
const PlainCss = () => {
  return (
    <>
      <h1 className='app-css'>Css Demo</h1>
      <h1 className='app-scss'>Scss Demo</h1>
      <h1 className={styles.app}>Css Module Demo Not working :( </h1>
    </>
  );
};
export { StyledComponent, Tailwind, PlainCss };

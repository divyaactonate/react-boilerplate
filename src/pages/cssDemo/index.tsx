import {
  PlainCss,
  StyledComponent,
  Tailwind,
  TwinEmotion,
  TwinTailwind,
} from '@components/StylesDemo';
import Layout from '@layouts/index';

function App() {
  return (
    <Layout>
      <div className='container mx-auto'>
        <PlainCss />
        <Tailwind />
        <StyledComponent />
        <TwinTailwind />
        <TwinEmotion />
      </div>
    </Layout>
  );
}

export default App;

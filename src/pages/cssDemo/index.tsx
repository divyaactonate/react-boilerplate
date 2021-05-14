import { PlainCss, StyledComponent, Tailwind } from '@components/StylesDemo';
import Layout from '@layouts/index';

function App() {
  return (
    <Layout>
      <div className='container mx-auto'>
        <PlainCss />
        <Tailwind />
        <StyledComponent />
      </div>
    </Layout>
  );
}

export default App;

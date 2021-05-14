import ProtectedComponent from '@components/ProtectedComponent';
import Layout from '@layouts/index';


function App() {
  return (
    <Layout>
      <div className='container mx-auto'>
        <ProtectedComponent />
      </div>
    </Layout>
  );
}

export default App;

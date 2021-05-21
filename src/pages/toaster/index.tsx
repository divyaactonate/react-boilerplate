import { FC } from 'react';
import Layout from '@layouts/index';
import Toast from '@components/Toaster';

const Toaster: FC = () => {
  return (
    <Layout>
      <div className='container mx-auto'>
        <Toast />
      </div>
    </Layout>
  );
};

export default Toaster;

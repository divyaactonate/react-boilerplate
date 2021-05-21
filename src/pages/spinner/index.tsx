import { FC } from 'react';
import Layout from '@layouts/index';
import Spinners from '@components/Spinner';

const Spinner: FC = () => {
  return (
    <Layout>
      <div className='container mx-auto'>
        <Spinners />
      </div>
    </Layout>
  );
};

export default Spinner;

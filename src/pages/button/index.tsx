import { FC } from 'react';
import Layout from '@layouts/index';
import Buttons from '@components/Button';

const Button: FC = () => {
  return (
    <Layout>
      <div className='container mx-auto'>
        <Buttons />
      </div>
    </Layout>
  );
};

export default Button;

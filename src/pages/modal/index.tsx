import { FC } from 'react';
import Layout from '@layouts/index';
import Modals from '@components/Modal';

const Modal: FC = () => {
  return (
    <Layout>
      <div className='container mx-auto'>
        <Modals />
      </div>
    </Layout>
  );
};

export default Modal;

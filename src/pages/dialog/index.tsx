import { FC } from 'react';
import Layout from '@layouts/index';
import Dialogs from '@components/Dialog';

const Dialog: FC = () => {
  return (
    <Layout>
      <div className='container mx-auto'>
        <Dialogs />
      </div>
    </Layout>
  );
};

export default Dialog;

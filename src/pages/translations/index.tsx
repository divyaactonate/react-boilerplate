import { FC } from 'react';
import Layout from '@layouts/index';
import Translate from '@components/Translate';

const Translations: FC = () => {
  return (
    <Layout>
      <div className='container mx-auto'>
        <Translate />
      </div>
    </Layout>
  );
};

export default Translations;

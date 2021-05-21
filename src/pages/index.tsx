import { useState } from 'react';
import Layout from '@layouts/index';
import Switch from '@shared/Switch';
import Breadcrum from '@shared/Breadcrum';
import ListBox from '@shared/Listbox';

const Home = () => {
  const [checked, setChecked]: [any, any] = useState(false);
  const [selected, setSelected] = useState({ name: 'Wade Cooper' });

  return (
    <Layout>
      <div className='flex justify-center items-center'>Home</div>
      <br />

      <div className='flex justify-center flex-col items-center py-3 border border-green-600'>
        <u> Switch Controls </u>
        <br />
        <div className='flex justify-between items-center'>
          <Switch label={'switch label'} checked={checked} onChange={(e) => setChecked(e)} />
          <Switch
            passive={false}
            checked={checked}
            onChange={(e) => setChecked(e)}
            className={`py-3 bg-red-400`}
            activeColor={`bg-pink-600`}
          />
          <Switch
            checked={checked}
            onChange={(e) => setChecked(e)}
            activeColor={`bg-green-500`}
            deactiveColor={`bg-yellow-500`}
          />
        </div>
      </div>
      <br />

      <div className='flex justify-center flex-col items-center py-3 border border-green-600'>
        <u> ListBox Controls </u>
        <br />
        <div className='flex justify-between items-center'>
          <ListBox
            data={[
              { name: 'Wade Cooper' },
              { name: 'Arlene Mccoy' },
              { name: 'Devon Webb' },
              { name: 'Tom Cook' },
              { name: 'Tanya Fox' },
              { name: 'Hellen Schmidt' },
            ]}
            selectedData={selected}
            onChange={(e) => setSelected(e)}
          />
        </div>
      </div>
      <br />

      <div className='flex flex-col justify-center items-center py-1 border border-blue-600'>
        <u> Breadcrums </u>
        <br />
        <Breadcrum showHome={true} className={`p-0 bg-white-400`} />
        <br />
        <Breadcrum
          showHome={true}
          className={`p-0 bg-white-400`}
          title={'Child Title'}
          titleLink={'/'}
        />
        <br />
        <Breadcrum
          showHome={true}
          className={`p-0 bg-white-400`}
          title={'Child Title'}
          titleLink={'/'}
          parent={[
            { title: 'parent 1', link: '/' },
            { title: 'parent 2', link: '/' },
          ]}
        />
        <br />
        <Breadcrum
          showHome={true}
          parent={[
            { title: 'parent 1', link: '/' },
            { title: 'parent 2', link: '/' },
          ]}
        />
        <br />
        <Breadcrum
          title={'Child Title'}
          titleLink={'/'}
          parent={[
            { title: 'parent 1', link: '/' },
            { title: 'parent 2', link: '/' },
          ]}
        />

        <br />
        <Breadcrum title={'Child Title'} titleLink={'/'} />
      </div>
    </Layout>
  );
};

export default Home;

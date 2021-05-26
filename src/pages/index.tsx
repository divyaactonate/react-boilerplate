import { useState } from 'react';
import Layout from '@layouts/index';
import { Switch, Breadcrum, ListBox, InputField } from '@library/core';

const Home = () => {
  // const [checked, setChecked]: [any, any] = useState(false);
  const [selected, setSelected] = useState({ name: 'Wade Cooper' });

  return (
    <Layout>
      <div className='flex justify-center items-center'>Home</div>
      <br />

      <div className='flex justify-center flex-col items-center py-3 border border-green-600'>
        <u> Switch Controls </u>
        <br />
        <div className='flex flex-col justify-between items-center'>
          <Switch label='I agree to sell my privacy' />
          <br />
          <Switch label='I am label' color='green' />

          {/* <Switch label={'switch label'} checked={checked} onChange={(e) => setChecked(e)} /> */}
          {/* <Switch
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
          /> */}
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
            value={selected}
            onChange={(e) => setSelected(e)}
            disabled={false}
          />

          <ListBox
            data={[
              { name: 'Wade Cooper' },
              { name: 'Arlene Mccoy' },
              { name: 'Devon Webb' },
              { name: 'Tom Cook' },
              { name: 'Tanya Fox' },
              { name: 'Hellen Schmidt' },
            ]}
            value={selected}
            onChange={(e) => setSelected(e)}
            disabled={false}
            className={`bg-green-200 text-green-700`}
          />

          <ListBox
            data={[
              { name: 'Wade Cooper' },
              { name: 'Arlene Mccoy' },
              { name: 'Devon Webb' },
              { name: 'Tom Cook' },
              { name: 'Tanya Fox' },
              { name: 'Hellen Schmidt' },
            ]}
            value={selected}
            onChange={(e) => setSelected(e)}
            disabled={true}
          />
        </div>
      </div>
      <br />
      <div className='pb-10 flex flex-col justify-center items-center py-1 border border-blue-600 px-3'>
        <u> Input Field </u>
        <br />
        <div className='flex flex-row flex-wrap w-full justify-between items-center'>
          <InputField placeholder='Basic usage' />

          <InputField
            placeholder='Icon usage'
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='rgba(156, 163, 175, 1)'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
            }
          />

          <InputField placeholder='Default variant' />

          <InputField variant='filled' placeholder='Filled variant' />

          <InputField variant='unstyled' placeholder='Unstyled variant' />
          <InputField
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='rgba(156, 163, 175, 1)'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
            }
            placeholder='Your twitter'
            rightSectionWidth={70}
            rightSectionProps={{ style: { pointerEvents: 'none' } }}
            rightSection={
              <svg
                className='h-6 w-6 text-indigo-500'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            }
          />

          <InputField
            placeholder='Search'
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='rgba(156, 163, 175, 1)'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
            }
            rightSectionWidth={90}
            rightSection={
              <svg
                className='h-6 w-6 text-indigo-500'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            }
            rightSectionProps={{ style: { pointerEvents: 'none' } }}
            variant={'filled'}
          />

          <InputField
            placeholder='Search'
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='rgba(156, 163, 175, 1)'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
            }
            rightSectionWidth={90}
            rightSection={
              <svg
                className='h-6 w-6 text-indigo-500'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            }
            rightSectionProps={{ style: { pointerEvents: 'none' } }}
            variant={'default'}
          />

          <InputField component='button'>Button input</InputField>

          <InputField
            component='select'
            rightSection={
              <svg
                className='h-6 w-6 text-indigo-500'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            }
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
          </InputField>
        </div>
      </div>

      <div className='pb-10 flex flex-col justify-center items-center py-1 border border-blue-600'>
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

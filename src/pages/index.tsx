import Layout from '@layouts/index';
import { Tooltip, Breadcrum, Text } from '../library/core';

const items = [
  {
    title: 'Text 4',
    href: 'https://www.notion.so/valqplan/Breadcrumbs-9267116cfc11453f9be608679ea0683e',
  },
  {
    title: 'P 5',
    href: 'https://www.notion.so/valqplan/Breadcrumbs-9267116cfc11453f9be608679ea0683e',
  },
  {
    title: 'Testing',
    href: 'https://www.notion.so/valqplan/Breadcrumbs-9267116cfc11453f9be608679ea0683e',
  },
  {
    title: 'Unit testing',
    href: 'https://www.notion.so/valqplan/Breadcrumbs-9267116cfc11453f9be608679ea0683e',
  },
  {
    title: 'Design',
    href: 'https://www.notion.so/valqplan/Breadcrumbs-9267116cfc11453f9be608679ea0683e',
  },
].map((item, index) => (
  <Text<'a'>
    variant='link'
    className={`cursor-pointer whitespace-nowrap overflow-hidden overflow-ellipsis max-w-xs`}
    component='a'
    onClick={() => {
      items.length - 1 === index ? null : (window.location.href = item.href);
    }}
    key={index}
  >
    <Tooltip
      triggerOffset={12}
      arrowClassName='-mt-10'
      bgColor={'#1F2937'}
      borderColor={'#1F2937'}
      placement='bottom-center'
      possiblePlacements={['top-center']}
      text={
        <div className='break-words rounded-lg text-sm max-w-xs bg-gray-800 text-white py-1 px-3'>
          {item.title}
        </div>
      }
    >
      <>{item.title}</>
    </Tooltip>
  </Text>
));

const items1 = [
  {
    title: 'BI Hub Root Server',
    href: 'https://www.notion.so/valqplan/Breadcrumbs-9267116cfc11453f9be608679ea0683e',
  },
  {
    title: 'BI Hub',
    href: 'https://www.notion.so/valqplan/Breadcrumbs-9267116cfc11453f9be608679ea0683e',
  },
  {
    title: 'String 3',
    href: 'https://www.notion.so/valqplan/Breadcrumbs-9267116cfc11453f9be608679ea0683e',
  },
  {
    title: 'Text 4',
    href: 'https://www.notion.so/valqplan/Breadcrumbs-9267116cfc11453f9be608679ea0683e',
  },
  {
    title: 'P 5',
    href: 'https://www.notion.so/valqplan/Breadcrumbs-9267116cfc11453f9be608679ea0683e',
  },
  {
    title: 'Testing',
    href: 'https://www.notion.so/valqplan/Breadcrumbs-9267116cfc11453f9be608679ea0683e',
  },
  {
    title: 'Unit testing',
    href: 'https://www.notion.so/valqplan/Breadcrumbs-9267116cfc11453f9be608679ea0683e',
  },
  {
    title: 'Design',
    href: 'https://www.notion.so/valqplan/Breadcrumbs-9267116cfc11453f9be608679ea0683e',
  },
].map((item, index) => (
  <Text<'a'>
    variant='link'
    className={`cursor-pointer`}
    component='a'
    style={{ color: '#0084FF' }}
    onClick={() => {
      items1.length - 1 === index ? null : (window.location.href = item.href);
    }}
    key={index}
  >
    <Tooltip
      triggerOffset={12}
      arrowClassName='-mt-10'
      bgColor={'#1F2937'}
      borderColor={'#1F2937'}
      placement='bottom-center'
      possiblePlacements={['top-center']}
      text={
        <div className='break-words rounded-lg text-sm bg-gray-800 text-white py-1 px-3'>
          {item.title}
        </div>
      }
    >
      <div
        style={{ maxWidth: 100 }}
        className={`cursor-pointer truncate whitespace-nowrap overflow-hidden overflow-ellipsis`}
      >
        {item.title}
      </div>
    </Tooltip>
  </Text>
));

const Home = () => {
  return (
    <Layout>
      <div className='flex justify-center items-center'>Home</div>
      <div style={{ padding: 50 }}>
        <Breadcrum
          separator={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='#999999'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          }
          style={{ marginTop: 40 }}
        >
          {items}
        </Breadcrum>

        <Breadcrum
          separator={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='#999999'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          }
          style={{ marginTop: 40 }}
        >
          {items1}
        </Breadcrum>
      </div>
    </Layout>
  );
};

export default Home;

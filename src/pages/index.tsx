import Layout from '@layouts/index';
import { Breadcrum } from '@library/core/Breadcrum/index2';
import { Text } from '@library/core';

const items1 = [
  {
    title: 'BI Hub Root',
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
    style={{
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      maxWidth: 80,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }}
    color={items1?.length - 1 === index ? 'gray' : 'blue'}
    component='a'
    onClick={() => {
      items1.length - 1 === index ? null : (window.location.href = item.href);
    }}
    key={index}
  >
    {item.title}
  </Text>
));

const Home = () => {
  return (
    <Layout>
      <div className='flex justify-center items-center'>Home</div>
      <div style={{ padding: 50 }}>
        {/* <Breadcrum>{items}</Breadcrum> */}
        <Breadcrum
          separator={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='blue'
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

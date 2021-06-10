import TabManager from '@pages/tabManager';
import { FC, useState } from 'react';
import SideNavigation from './sideNavigation';
import TreeNavigation from './treeNavigation';
// import { Text, Tooltip, Breadcrum } from '@library/core';

const SideNav: FC = () => {
  const [breadcrumItem, setBreadcrumItem] = useState<any[]>([]);

  const setBreadcrumbData = (data: any) => {
    // You can put whatever here
    if (data && breadcrumItem.length > 0) {
      const dIndex = breadcrumItem.filter((r: any) => r.title === data.title);
      if (dIndex.length === 0) {
        const d = data?.isChild ? [...breadcrumItem, data] : [data];
        setBreadcrumItem(d);
      }
    } else {
      const d = data?.isChild ? [...breadcrumItem, data] : [data];
      setBreadcrumItem(d);
    }
  };

  // const item =
  //   breadcrumItem.length > 0 &&
  //   breadcrumItem.map((item, index) => (
  //     <Text<'a'>
  //       variant='link'
  //       className={`cursor-pointer whitespace-nowrap overflow-hidden overflow-ellipsis max-w-xs`}
  //       component='a'
  //       onClick={() => {
  //         breadcrumItem.length - 1 === index ? null : (window.location.href = item.href);
  //       }}
  //       key={index}
  //     >
  //       <Tooltip
  //         triggerOffset={12}
  //         arrowClassName='-mt-10'
  //         bgColor={'#1F2937'}
  //         borderColor={'#1F2937'}
  //         placement='bottom-center'
  //         possiblePlacements={['top-center']}
  //         text={
  //           <div className='break-words rounded-lg text-sm max-w-xs bg-gray-800 text-white py-1 px-3'>
  //             {item.title}
  //           </div>
  //         }
  //       >
  //         <div
  //           style={{
  //             fontSize: 12,
  //             fontStyle: 'normal',
  //             color: breadcrumItem?.length - 1 === index ? '#666666' : '#0084FF',
  //           }}
  //         >
  //           {item.title}
  //         </div>
  //       </Tooltip>
  //     </Text>
  //   ));

  return (
    <div className='flex h-screen w-full'>
      <div className={`flex flex-row w-full`}>
        <SideNavigation setBreadcrumbData={setBreadcrumbData} />
        <TreeNavigation setBreadcrumbData={setBreadcrumbData} />
        <div style={{ width: '80%' }} className={`h-screen border pl-2`}>
          {/* {breadcrumItem.length > 0 && (
            <Breadcrum
              separator={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='#999999'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              }
              style={{ marginTop: 40 }}
            >
              {item}
            </Breadcrum>
          )} */}
          <TabManager />
        </div>
      </div>
    </div>
  );
};

export default SideNav;

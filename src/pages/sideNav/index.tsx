import { FC } from 'react';
import SideNavigation from './sideNavigation';
import TreeNavigation from './treeNavigation';

const SideNav: FC = () => {
  return (
    <div className='flex h-screen w-full'>
      <div className={`flex flex-row w-full`}>
        <SideNavigation />
        <TreeNavigation />
        {/* <div style={{ width: '15%' }} className={`flex h-screen border `}></div> */}
        <div style={{ width: '80%' }} className={`flex h-screen border `}></div>
      </div>
    </div>
  );
};

export default SideNav;

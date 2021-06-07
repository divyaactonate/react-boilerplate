import { FC } from 'react';
import RecursiveTree from './TreeView/recursive_tree';
import { mockOrgTreeList } from './TreeView/data';
import { TreeBranch } from './TreeView/types';

const onSelect = (value: TreeBranch) => {
  // You can put whatever here
  console.log('you clicked: ' + value.label);
};

const TreeNavigation: FC = () => {
  return (
    <div style={{ width: '15%' }} className={`flex h-screen border`}>
      <RecursiveTree listMeta={mockOrgTreeList} onSelectCallback={onSelect} />
    </div>
  );
};

export default TreeNavigation;

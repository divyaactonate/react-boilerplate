import { FC, useState } from 'react';
import RecursiveTree from './TreeView/recursive_tree';
import { mockOrgTreeList } from './TreeView/data';
import { TreeBranch } from './TreeView/types';

const TreeNavigation: FC = () => {
  const [currentId, setCurrentId] = useState<number>(-1);

  const onSelect = (value: TreeBranch) => {
    // You can put whatever here
    setCurrentId(parseInt(value.id));
  };

  return (
    <div
      style={{ width: '15%', paddingLeft: 2, paddingRight: 2 }}
      className={`flex h-screen border`}
    >
      <RecursiveTree listMeta={mockOrgTreeList} onSelectCallback={onSelect} currentId={currentId} />
    </div>
  );
};

export default TreeNavigation;

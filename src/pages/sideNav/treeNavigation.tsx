import { FC, useState } from 'react';
import RecursiveTree from './TreeView/recursive_tree';
import { mockOrgTreeList } from './TreeView/data';
import { TextInput } from '@library/core';
import { AddFolder, ChevronDownIcon } from '@library/icons';
import { TreeBranch } from './TreeView/types';

export interface TreeNavigationProps {
  readonly setBreadcrumbData: (value: any) => void;
}

const TreeNavigation: FC = ({ setBreadcrumbData }: TreeNavigationProps) => {
  const [currentId, setCurrentId] = useState<number>(-1);
  const [searchVal, setSearchVal] = useState<string>('');

  const onSelect = (value: TreeBranch) => {
    // You can put whatever here
    setCurrentId(parseInt(value.id));
  };

  return (
    <div
      style={{ width: '15%', paddingLeft: 2, paddingRight: 2 }}
      className={`flex h-screen border`}
    >
      <div className={`flex flex-col`}>
        <div className={`flex flex-row p-1 justify-between`}>
          <div style={{ width: '80%' }}>
            <TextInput
              size={'sm'}
              type='text'
              placeholder={'Search'}
              value={searchVal}
              onChange={(e) => setSearchVal(e)}
              style={{
                backgroundColor: '#FFFFFF',
                height: 26,
                width: '100%',
                border: '1px solid #E8E8E8',
                boxSizing: 'border-box',
                borderRadius: 6,
                marginTop: 0,
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: 12,
                color: '#999999',
              }}
            />
          </div>
          <div
            className={`flex justigy-center items-center`}
            style={{
              width: '18%',
              height: '100%',
              border: '1px solid #E8E8E8',
              boxSizing: 'border-box',
              borderRadius: 6,
            }}
          >
            <AddFolder />
          </div>
        </div>
        <div className={`flex flex-col p-1`}>
          <TextInput
            size={'sm'}
            type='text'
            defaultValue={'Sort :Most Viewed'}
            style={{
              backgroundColor: '#FFFFFF',
              height: 26,
              width: '100%',
              border: '1px solid #E8E8E8',
              boxSizing: 'border-box',
              borderRadius: 6,
              marginTop: 0,
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: 12,
              color: '#999999',
            }}
            rightIcon={<ChevronDownIcon className='w-3' />}
          />
        </div>

        <RecursiveTree
          listMeta={mockOrgTreeList}
          onSelectCallback={onSelect}
          setBreadcrumbData={setBreadcrumbData}
          currentId={currentId}
        />
      </div>
    </div>
  );
};

export default TreeNavigation;

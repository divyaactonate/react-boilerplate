import { TextInput } from '@library/core';
import { AddFolder, ChevronDownIcon } from '@library/icons';
import { useCallback, useEffect, useState } from 'react';
import { mockOrgTreeList } from './TreeView/data';
import RecursiveTree from './TreeView/recursive_tree';
import { TreeBranch } from './TreeView/types';
export interface TreeNavigationProps {
  readonly setBreadcrumbData: (value: any) => void;
}
const TreeNavigation = ({ setBreadcrumbData }: TreeNavigationProps) => {
  const [currentId, setCurrentId] = useState<number>(-1);
  const [treeListData, setTreeData] = useState(mockOrgTreeList);
  const [searchVal, setSearchVal] = useState<string | null>(null);
  /**
   * Method to search element on input changes
   * @param data
   * @param regObj
   * @param arr
   * @returns
   */
  const reccurArr = useCallback((data: any, regObj: any, arr: any) => {
    data.forEach((element: any) => {
      if (regObj.test(element.label)) {
        arr.push(element);
        if (element.branches.length > 0) reccurArr(element.branches, regObj, arr);
      } else if (element.branches.length > 0) reccurArr(element.branches, regObj, arr);
    });
    return arr;
  }, []);
  useEffect(() => {
    if (searchVal && searchVal?.length > 0) {
      const search = new RegExp(searchVal, 'i');
      setTreeData(reccurArr(mockOrgTreeList, search, []));
    } else setTreeData(mockOrgTreeList);
  }, [searchVal, reccurArr]);
  const onSelect = (value: TreeBranch) => setCurrentId(parseInt(value.id));
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
              value={searchVal ?? ''}
              onChange={(e) => setSearchVal(e.target.value)}
              className={`bg-white w-full box-border font-medium not-italic`}
              style={{
                height: 26,
                border: '1px solid #E8E8E8',
                borderRadius: 6,
                marginTop: 0,
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
            className={`bg-white w-full box-border font-medium not-italic`}
            style={{
              height: 26,
              border: '1px solid #E8E8E8',
              borderRadius: 6,
              marginTop: 0,
              fontSize: 12,
              color: '#999999',
            }}
            rightIcon={<ChevronDownIcon className='w-3' />}
          />
        </div>
        <RecursiveTree
          listMeta={treeListData}
          onSelectCallback={onSelect}
          setBreadcrumbData={setBreadcrumbData}
          currentId={currentId}
        />
      </div>
    </div>
  );
};
export default TreeNavigation;

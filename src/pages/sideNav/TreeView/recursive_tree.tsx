import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';
import {
  TreeRightIcon,
  TreeDownIcon,
  TreeFilledFolderIcon,
  TreeFolderIcon,
  PopUpIcon,
} from '@library/icons';
import { Tooltip } from '@library/core';
import { Tree, TreeBranch } from './types';

interface TreeItemProps {
  readonly id: string;
  readonly onSelectCallback: (e: React.MouseEvent<HTMLInputElement>) => void;
  readonly label: string;
  readonly isSelected: boolean | undefined;
  readonly selectedId: number | string;
  readonly children: ReadonlyArray<JSX.Element>;
}

export interface RecursiveTreeProps {
  readonly listMeta: Tree;
  readonly onSelectCallback: (value: TreeBranch) => void;
  readonly currentId: number;
}

const TreeItem = ({
  onSelectCallback,
  label,
  isSelected,
  children,
  selectedId,
  id,
}: TreeItemProps) => {
  const [isOpen, toggleItemOpen] = useState<boolean | null>(null);
  const [selected, setSelected] = useState(isSelected);

  return (
    <div
      style={{
        borderRadius: 2,
      }}
    >
      <StyledTreeItem
        style={{
          backgroundColor: selectedId === parseInt(id) && selected ? '#EDF4FD' : '#FFFFFF',
          paddingLeft: 5,
          paddingRight: 5,
        }}
      >
        {children.length > 0 && (
          <Box
            className={`h-5 w-5 flex items-center`}
            aria-hidden='true'
            onClick={(e: React.MouseEvent<HTMLInputElement>) => {
              setSelected(true);
              onSelectCallback(e);
              toggleItemOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <TreeDownIcon iconColor={'#999999'} />
            ) : (
              <TreeRightIcon iconColor={'#999999'} />
            )}
          </Box>
        )}
        <div className={`flex flex-row items-center w-full`}>
          <div className={`flex flex-row items-center w-full`}>
            {selectedId === parseInt(id) && selected ? (
              <TreeFilledFolderIcon iconColor={'#0084FF'} />
            ) : (
              <TreeFolderIcon iconColor={'#999999'} />
            )}
            <StyledLabel
              onClick={(e: React.MouseEvent<HTMLInputElement>) => {
                setSelected(!selected);
                onSelectCallback(e);
              }}
              className={`cursor-pointer truncate`}
              style={{
                width: 90,
                marginLeft: 6,
                color: `${selectedId === parseInt(id) && selected ? '#0084FF' : '#999999'}`,
              }}
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
                    {label}
                  </div>
                }
              >
                {label}
              </Tooltip>
            </StyledLabel>
          </div>
          {selectedId === parseInt(id) && selected && (
            <div
              className={`flex flex-row justify-center items-center`}
              style={{
                border: '1px solid #E8E8E8',
                height: 17,
                width: 17,
                padding: 3,
                borderRadius: 2.42,
                backgroundColor: '#FFFFFF',
              }}
            >
              <PopUpIcon />
            </div>
          )}
        </div>
      </StyledTreeItem>
      <StyledTreeChildren className={`border-rounded w-full`}>
        {isOpen && children}
      </StyledTreeChildren>
    </div>
  );
};

const RecursiveTree = ({ listMeta, onSelectCallback, currentId }: RecursiveTreeProps) => {
  const createTree = (branch: TreeBranch) =>
    branch.branches && (
      <TreeItem
        id={branch.id}
        key={branch.id}
        onSelectCallback={(e: React.MouseEvent<HTMLElement>) => {
          console.log(e);
          onSelectCallback(branch);
        }}
        selectedId={currentId}
        isSelected={branch.selected}
        label={branch.label}
      >
        {branch.branches.map((branch: TreeBranch) => {
          return <Fragment key={branch.id}>{createTree(branch)}</Fragment>;
        })}
      </TreeItem>
    );

  return (
    <div className={`w-full`}>
      {listMeta.map((branch: TreeBranch, i: any) => (
        <Box key={i}>{createTree(branch)}</Box>
      ))}
    </div>
  );
};

export default RecursiveTree;

// styles
const Box = styled.div({
  padding: 2,
});

const StyledLabel = styled(Box)({
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: 12,
});
const StyledTreeItem = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
});
const StyledTreeChildren = styled(Box)({
  paddingLeft: '10px',
});

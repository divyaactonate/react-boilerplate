import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';
import {
  TreeRightIcon,
  TreeDownIcon,
  TreeFilledFolderIcon,
  TreeFolderIcon,
  PopUpIcon,
} from '@library/icons';
import { Tree, TreeBranch } from './types';

interface TreeItemProps {
  readonly id: string;
  readonly onSelectCallback: (e: React.MouseEvent<HTMLInputElement>) => void;
  readonly label: string;
  readonly isSelected: boolean | undefined;
  readonly children: ReadonlyArray<JSX.Element>;
}

export interface RecursiveTreeProps {
  readonly listMeta: Tree;
  readonly onSelectCallback: (value: TreeBranch) => void;
}

const TreeItem = ({ onSelectCallback, label, isSelected, children }: TreeItemProps) => {
  const [isOpen, toggleItemOpen] = useState<boolean | null>(null);
  const [selected, setSelected] = useState(isSelected);

  return (
    <div
      style={{
        backgroundColor: isOpen || selected ? '#EDF4FD' : '#FFFFFF',
        borderRadius: 2,
      }}
    >
      <StyledTreeItem>
        {children.length > 0 && (
          <Box
            className={`h-5 w-5 flex items-center`}
            aria-hidden='true'
            onClick={() => toggleItemOpen(!isOpen)}
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
            {selected || isOpen ? (
              <TreeFilledFolderIcon iconColor={'#0084FF'} />
            ) : (
              <TreeFolderIcon iconColor={'#999999'} />
            )}
            <StyledLabel
              onClick={(e: React.MouseEvent<HTMLInputElement>) => {
                setSelected(!selected);
                onSelectCallback(e);
              }}
              style={{
                marginLeft: `${children.length === 0 ? '24px' : '2px'}`,
                color: `${selected || isOpen ? '#0084FF' : '#999999'}`,
              }}
            >
              {label}
            </StyledLabel>
          </div>
          {(selected || isOpen) && (
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

const RecursiveTree = ({ listMeta, onSelectCallback }: RecursiveTreeProps) => {
  const createTree = (branch: TreeBranch) =>
    branch.branches && (
      <TreeItem
        id={branch.id}
        key={branch.id}
        onSelectCallback={(e: React.MouseEvent<HTMLElement>) => {
          console.log(e);
          onSelectCallback(branch);
        }}
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
  color: '#999999',
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
  // paddingLeft: '10px',
});

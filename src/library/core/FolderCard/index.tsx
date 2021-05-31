/** @jsxImportSource @emotion/react */
// Please remove above line if not using twin css

import { DotsVerticalIcon, HeartIcon, TagIcon } from '@heroicons/react/outline';
import { FolderIcon } from '@heroicons/react/solid';
import { DefaultProps } from '@library/theme';
import cx from 'clsx';
import { useStyles } from './FolderCard.styles';
export interface FolderCardProps extends DefaultProps {
  hi?: string;
}
export const FolderCard = ({ themeOverride }: FolderCardProps) => {
  const { classes } = useStyles({ themeOverride });
  return (
    <div data-beautify-foldercard className={cx(classes.foldercard)}>
      <div className='w-full h-full'>
        <div className='flex flex-col space-y-1.5 justify-between px-3 py-2 rounded-md overflow-hidden border-2 hover:border-blue-300 border-gray-100'>
          <div className='flex space-x-3 items-center justify-between'>
            <div className='flex items-center truncate space-x-2'>
              <FolderIcon className='w-24 text-blue-500' />
              <h1 className='text-gray-700 truncate capitalize font-normal text-base leading-tight'>
                Brand analytics web and transactional
              </h1>
            </div>
            <div className='text-gray-500 font-normal text-sm leading-tight'>(116)</div>
          </div>

          <div className='flex items-center justify-between flex-row'>
            <div className='flex items-center text-xs flex-row space-x-4'>
              <HeartIcon className='w-4 text-gray-500' />
            </div>
            <div className='flex flex-row space-x-1 text-gray-500'>
              <TagIcon className='w-3.5 text-gray-500' />
              <DotsVerticalIcon className='w-3.5 text-gray-500' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
FolderCard.displayName = '@beautify/core/FolderCard';

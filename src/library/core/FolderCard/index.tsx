/** @jsxImportSource @emotion/react */
// Please remove above line if not using twin css

import { DotsVerticalIcon, HeartIcon, TagIcon } from '@heroicons/react/outline';
import { DefaultProps } from '@library/theme';
import cx from 'clsx';
import { useHover } from 'react-laag';
import { Checkbox } from '../Checkbox';
import { useStyles } from './FolderCard.styles';
import { BlueFolder } from './FolderCardIcons';
export interface FolderCardProps extends DefaultProps {
  title?: string;
  count?: number;
  checked?: boolean;
}
export const FolderCard = ({ themeOverride, checked = false }: FolderCardProps) => {
  const { classes, css } = useStyles({ themeOverride, checked });
  const [isOver, hoverProps] = useHover({ delayEnter: 100, delayLeave: 100 });

  return (
    <div data-beautify-foldercard css={css.card} className={cx(classes.wrapper)} {...hoverProps}>
      <div className={classes.card}>
        <div className={classes.topWrapper}>
          <div className={classes.topLeftWrapper}>
            <BlueFolder className={classes.folderIconClass} />
            <h1 className={classes.titleClass}>Brand analytics web and transactional</h1>
          </div>

          <div className={classes.topRightWrapper}>
            <div className={classes.countClass}>(116)</div>
            {isOver || checked ? (
              <div className={classes.checkBoxClass}>
                <Checkbox radius='xs' checked={checked} size='xs' />
              </div>
            ) : (
              <div className={classes.checkBoxClass}></div>
            )}
          </div>
        </div>

        <div className={classes.bottomWrapper}>
          <div className={classes.bottomLeftWrapper}>
            <HeartIcon className={classes.heartIconClass} />
          </div>
          <div className={classes.bottomRightWrapper}>
            <TagIcon className={classes.tagIconClass} />
            <DotsVerticalIcon className={classes.dotsIconClass} />
          </div>
        </div>
      </div>
    </div>
  );
};
FolderCard.displayName = '@beautify/core/FolderCard';

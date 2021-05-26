/** @jsxImportSource @emotion/react */

import { BeautifySize, DefaultProps } from '@library/theme';
import { getValidChildren } from '@library/utils/get-valid-children/get-valid-children';
import { filterUndefined } from '@library/utils/oject-operations/object-operations';
import cx from 'clsx';
import React, { cloneElement } from 'react';
import { useStyles } from './AvatarGroup.styles';

export interface AvatarGroupProps extends DefaultProps {
  size?: BeautifySize;
  max?: number;
  spacing?: number;
  children: React.ReactNode;
}
export const AvatarGroup = ({
  children,
  size = 'md',
  spacing = 3,
  max,
  themeOverride,
  ...others
}: AvatarGroupProps) => {
  const { classes, css } = useStyles({ themeOverride, size, spacing });

  const validChildren = getValidChildren(children);

  /**
   * get the avatars within the max
   */
  const childrenWithinMax = max ? validChildren.slice(0, max) : validChildren;

  /**
   * get the remaining avatar count
   */
  const excess = max != null && validChildren.length - max;

  /**
   * Reversing the children is a great way to avoid using zIndex
   * to overlap the avatars
   */
  const reversedChildren = childrenWithinMax.reverse();
  const childProps = {
    size,
    radius: 'xl',
    style: css.childClass,
    className: cx(`border-2`),
  };
  const clones = reversedChildren.map((child) => {
    return cloneElement(child, filterUndefined(childProps));
  });
  return (
    <div {...others} data-beautify-avatargroup className={cx(classes.avatargroup)}>
      {excess > 0 && (
        <span css={css.excessStyles} className={classes.excessStyles}>{`+${excess}`}</span>
      )}
      {clones}
    </div>
  );
};
AvatarGroup.displayName = '@beautify/core/AvatarGroup';

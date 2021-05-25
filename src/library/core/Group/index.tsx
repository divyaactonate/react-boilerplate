import { BeautifyNumberSize, DefaultProps } from '@library/theme';
import cx from 'clsx';
import React, { Children, cloneElement, ComponentPropsWithoutRef } from 'react';
import { GroupPosition, useStyles } from './Group.styles';

export interface GroupProps extends DefaultProps, ComponentPropsWithoutRef<'div'> {
  /** Defines justify-content property */
  position?: GroupPosition;

  /** Defined flex-wrap property */
  wrap?: 'wrap' | 'wrap-reverse' | 'nowrap';

  /** Defines flex-grow property for each element, true -> 1, false -> 0 */
  grow?: boolean;

  /** Space between elements */
  spacing?: BeautifyNumberSize;

  /** Defines flex-direction property, row for horizontal, column for vertical */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}

export type { GroupPosition };

export function Group({
  className,
  position = 'start',
  children,
  wrap = 'wrap',
  grow = false,
  spacing = 'md',
  direction = 'row',
  ...others
}: GroupProps) {
  const { classes } = useStyles({ grow, wrap, spacing, position, direction });

  const items = (Children.toArray(children) as React.ReactElement[]).map((child) =>
    cloneElement(child, { className: cx(classes.child, child.props.className) })
  );

  return (
    <div className={className} {...others}>
      <div className={classes.group}>{items}</div>
    </div>
  );
}

Group.displayName = '@beautify/core/Group';

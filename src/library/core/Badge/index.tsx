/** @jsxImportSource @emotion/react */
// Please remove above line if not using twin css

import { BeautifySize, DefaultProps } from '@library/theme';
import { ComponentPassThrough } from '@library/types';
import cx from 'clsx';
import React from 'react';
import { heights, useStyles } from './Badge.styles';

export const BADGE_SIZES = heights;

export interface BadgeProps extends DefaultProps {
  /** Badge color from theme */
  color?: string;

  /** Controls badge background, color and border styles */
  variant?: 'light' | 'filled' | 'outline';

  /** Defines badge height and font-size */
  size?: BeautifySize;

  /** Predefined border-radius value from theme.radius or number for border-radius in px */
  radius?: BeautifySize;

  /** Sets badge width to 100% of parent element, hides overflow text with text-overflow: ellipsis */
  fullWidth?: boolean;

  /** Section rendered on the left side of label */
  leftSection?: React.ReactNode;

  /** Section rendered on the right side of label */
  rightSection?: React.ReactNode;
}

export const Badge = <T extends React.ElementType = 'div'>({
  component: Component = 'div',
  className,
  color,
  variant = 'light',
  fullWidth,
  children,
  themeOverride,
  size = 'md',
  leftSection,
  rightSection,
  radius = 'xl',
  ...others
}: ComponentPassThrough<T, BadgeProps>) => {
  const { classes, css } = useStyles({
    themeOverride,
    size,
    fullWidth,
    color,
    radius,
  });
  return (
    <Component
      {...others}
      css={[css.badge, css[variant]]}
      className={cx(classes.badge, classes[variant], className)}
    >
      {leftSection && (
        <span data-mantine-badge-left css={[css.leftSection]} className={classes.leftSection}>
          {leftSection}
        </span>
      )}

      <span css={[css.inner]} className={classes.inner}>
        {children}
      </span>

      {rightSection && (
        <span data-mantine-badge-right css={[css.rightSection]} className={classes.rightSection}>
          {rightSection}
        </span>
      )}
    </Component>
  );
};
Badge.displayName = '@beautify/core/Badge';

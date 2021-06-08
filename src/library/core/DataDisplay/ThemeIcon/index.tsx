/** @jsxImportSource @emotion/react */
import React, { ComponentProps } from 'react';
import cx from 'clsx';
import { useStyles } from './ThemeIcon.styles';
import { BeautifySize, DefaultProps } from '@library/theme';

export interface ThemeIconProps extends DefaultProps, ComponentProps<'div'> {
  /** Icon */
  children: React.ReactNode;

  /** Predefined width and height or number for width and height in px */
  size?: BeautifySize;

  /** Predefined border-radius from theme.radius or number for border-radius in px */
  radius?: BeautifySize;

  /** Icon color from theme */
  color?: string;

  /** Controls appearance */
  variant?: 'filled' | 'light';
}

export function ThemeIcon({
  className,
  size = 'md',
  radius = 'sm',
  variant = 'filled',
  color,
  children,
  themeOverride,
  ...others
}: ThemeIconProps) {
  const { classes, css } = useStyles({ themeOverride, radius, color, size });

  return (
    <div css={css[variant]} className={cx(classes.themeIcon, className)} {...others}>
      {children}
    </div>
  );
}

ThemeIcon.displayName = '@beautify/core/ThemeIcon';

/**
 *
 * Paper
 *
 */

import { ActonateSize, ActonatePadding, DefaultProps, ActonateShadow } from '@library/theme';
import { ComponentPropsWithoutRef, ForwardedRef } from 'react';
import cx from 'clsx';
import { useStyles } from './Paper.styles';

export interface PaperProps extends DefaultProps, ComponentPropsWithoutRef<'div'> {
  /** Paper color from theme */
  color?: string;

  /** Predefined padding value from theme.spacing or number for padding in px */
  padding?: ActonatePadding;

  /** Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property */
  shadow?: ActonateShadow;

  /** Predefined border-radius value from theme.radius or number for border-radius in px */
  radius?: ActonateSize;

  /** Get element ref */
  elementRef?: ForwardedRef<HTMLDivElement>;
}
export function Paper({
  className,
  color = 'white',
  children,
  padding = 'md',
  radius = 'sm',
  shadow = 'md',
  // themeOverride,
  elementRef,
  ...others
}: PaperProps) {
  const classes = useStyles({ radius, shadow, color, padding });

  return (
    <div className={cx(classes.paper, className)} ref={elementRef} {...others}>
      {children}
    </div>
  );
}

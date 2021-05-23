/**
 *
 * Paper
 *
 */

import { BeautifySize, BeautifyPadding, DefaultProps, BeautifyShadow } from '@library/theme';
import { ComponentPropsWithoutRef, ForwardedRef, useMemo } from 'react';
import cx from 'clsx';
import { fetchStyles } from './Paper.styles';

export interface PaperProps extends DefaultProps, ComponentPropsWithoutRef<'div'> {
  /** Paper colorScheme from theme */
  colorScheme?: string;

  /** Predefined padding value from theme.spacing or number for padding in px */
  padding?: BeautifyPadding;

  /** Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property */
  shadow?: BeautifyShadow;

  /** Predefined border-radius value from theme.radius or number for border-radius in px */
  radius?: BeautifySize;

  /** Get element ref */
  elementRef?: ForwardedRef<HTMLDivElement>;
}
export const Paper = ({
  className,
  colorScheme = 'white',
  children,
  padding = 'md',
  radius = 'sm',
  shadow = 'md',
  // themeOverride,
  elementRef,
  ...others
}: PaperProps) => {
  const classes = useMemo(
    () => fetchStyles({ radius, shadow, colorScheme, padding }),
    [radius, shadow, colorScheme, padding]
  );

  return (
    <div data-beautify-paper className={cx(classes.paper, className)} ref={elementRef} {...others}>
      {children}
    </div>
  );
};
Paper.displayName = '@beautify/core/Paper';

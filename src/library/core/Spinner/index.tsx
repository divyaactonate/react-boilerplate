/** @jsxImportSource @emotion/react */
import { DefaultProps } from '@library/theme';
import cn from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { useStyles } from './Spinner.styles';

export interface SpinnerProps extends DefaultProps, ComponentPropsWithoutRef<'div'> {
  /**
   * The color of the empty area in the spinner
   */
  emptyColor?: string;
  /**
   * The size of the spinner
   */
  size?: number;
  /**
   * The color of the spinner
   */
  color?: string;
  /**
   * The thickness of the spinner
   * @example
   * ```jsx
   * <Spinner thickness="4px"/>
   * ```
   */
  thickness?: string;
  /**
   * The speed of the spinner.
   * @example
   * ```jsx
   * <Spinner speed="0.2s"/>
   * ```
   */
  speed?: string;
  /**
   * For accessibility, it is important to add a fallback loading text.
   * This text will be visible to screen readers.
   */
  label?: string;
}
export const Spinner = ({
  // label = 'Loading...',
  thickness = 'sm',
  color = 'current',
  speed = '0.45s',
  emptyColor = 'transparent',
  className,
  themeOverride,
  size = 4,
  ...rest
}: SpinnerProps) => {
  const { classes, css } = useStyles({ thickness, speed, emptyColor, size, color, themeOverride });

  return (
    <div
      data-beautify-spinner
      css={css.spinner}
      className={cn(classes.spinner, className)}
      {...rest}
    />
  );
};
Spinner.displayName = '@beautify/core/Spinner';

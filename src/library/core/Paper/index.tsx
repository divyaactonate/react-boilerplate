/** @jsxImportSource @emotion/react */
import { BeautifyPadding, BeautifyShadow, BeautifySize, DefaultProps } from '@library/theme';
import cx from 'clsx';
import { ComponentPropsWithoutRef, ForwardedRef } from 'react';
import { useStyles } from './Paper.styles';

export interface PaperProps extends DefaultProps, ComponentPropsWithoutRef<'div'> {
  /** Paper color from theme */
  color?: string;

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
  color = 'white',
  children,
  padding = 'md',
  radius = 'sm',
  shadow = 'md',
  themeOverride,
  elementRef,
  ...others
}: PaperProps) => {
  const { classes, css } = useStyles({ radius, shadow, color, padding, themeOverride });

  return (
    <div
      data-beautify-paper
      css={css.paper}
      className={cx(classes.paper, className)}
      ref={elementRef}
      {...others}
    >
      {children}
    </div>
  );
};
Paper.displayName = '@beautify/core/Paper';

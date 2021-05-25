/** @jsxImportSource @emotion/react */
import { ComponentPropsWithoutRef } from 'react';
import cx from 'clsx';
import { useStyles, sizes } from './Container.styles';
import { BeautifyPadding, BeautifySize, DefaultProps } from '@library/theme';
export const CONTAINER_SIZES = sizes;

export interface ContainerProps extends DefaultProps, ComponentPropsWithoutRef<'div'> {
  /** Predefined container max-width or number for max-width in px */
  size?: BeautifySize;

  /** colorSchemes from theme */
  color?: string;

  /** Horizontal padding defined in theme.spacing, or number value for padding in px */
  padding?: BeautifyPadding;

  /** If fluid is set to true, size prop is ignored and Container always take 100% of width */
  fluid?: boolean;
}

export function Container({
  className,
  padding = 'md',
  color = 'blue',
  fluid = false,
  size = 'lg',
  themeOverride,
  ...others
}: ContainerProps) {
  const { classes, css } = useStyles({ padding, fluid, size, color, themeOverride });
  return <div css={css.container} className={cx(classes.container, className)} {...others} />;
}

Container.displayName = '@beautify/core/Container';

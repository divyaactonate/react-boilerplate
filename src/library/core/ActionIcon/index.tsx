/** @jsxImportSource @emotion/react */
// Please remove above line if not using twin css

import React, { ComponentPropsWithoutRef } from 'react';
import cx from 'clsx';
import { useStyles, sizes } from './ActionIcon.styles';
import { DefaultProps, useBeautifyTheme, BeautifySize } from '@library/theme';
import { ComponentPassThrough } from '@library/types';

export interface ActionIconProps extends DefaultProps, ComponentPropsWithoutRef<'button'> {
  /** Icon rendered inside button */
  children: React.ReactNode;

  /** Controls appearance */
  variant?: 'transparent' | 'hover' | 'filled' | 'outline' | 'light';

  /** Button hover, active and icon colors from theme */
  color?: string;

  /** Button border-radius from theme or number to set border-radius in px */
  radius?: BeautifySize;

  /** Predefined icon size or number to set width and height in px */
  size?: BeautifySize;

  /** Get element ref */
  elementRef?: React.ForwardedRef<HTMLButtonElement>;
}

export const ACTION_ICON_SIZES = sizes;

export const ActionIcon = <T extends React.ElementType = 'button', U = HTMLButtonElement>({
  className,
  color = 'gray',
  children,
  radius = 'sm',
  size = 'md',
  variant = 'hover',
  themeOverride,
  elementRef,
  component: Element = 'button',
  ...others
}: ComponentPassThrough<T, ActionIconProps> & { elementRef?: React.ForwardedRef<U> }) => {
  const { classes, css } = useStyles({
    size,
    radius,
    color,
    theme: useBeautifyTheme(themeOverride),
  });
  return (
    <Element
      {...others}
      css={[css.actionicon, css[variant]]}
      className={cx(classes.actionicon, classes[variant], className)}
      type='button'
      ref={elementRef}
    >
      {children}
    </Element>
  );
};
ActionIcon.displayName = '@beautify/core/ActionIcon';

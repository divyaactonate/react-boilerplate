import { ActonateCase, ActonateTextAlignment, ActonateWeight, DefaultProps } from '@library/theme';
import { ActonateTextSize } from '@library/theme/types';
import { ComponentPassThrough } from '@library/types';
import cx from 'clsx';
import React, { createElement, ElementType, ReactNode, useMemo } from 'react';
import { fetchStyles } from './Text.styles';

export interface TextProps extends DefaultProps {
  /** Text itself */
  children?: ReactNode;

  /** Predefined font-size from theme.fontSizes */
  size?: ActonateTextSize;

  /** Text color from theme */
  color?: string;

  /** Sets font-weight css property */
  weight?: ActonateWeight;

  /** Sets text-transform css property */
  transform?: ActonateCase;

  /** Sets text-align css property */
  align?: ActonateTextAlignment;

  /** Link or text variant */
  variant?: 'text' | 'link';
}

export function Text<T extends ElementType = 'div', U = HTMLDivElement>({
  className,
  component = 'div',
  children,
  size = 'md',
  weight,
  transform,
  color,
  align,
  variant = 'text',
  // themeOverride,
  elementRef,
  ...others
}: ComponentPassThrough<T, TextProps> & { elementRef?: React.ForwardedRef<U> }) {
  const classes = useMemo(
    () => fetchStyles({ variant, color, size, transform, weight, align }),
    [variant, color, size, transform, weight, align]
  );

  return createElement(
    component,
    {
      className: cx(classes.text, className),
      ref: elementRef,
      ...others,
    },
    children
  );
}
export function Anchor<T extends React.ElementType = 'a', U = HTMLAnchorElement>({
  component = 'a',
  ...others
}: ComponentPassThrough<T, TextProps> & { elementRef?: React.ForwardedRef<U> }) {
  return <Text component={component} variant='link' {...others} />;
}

Anchor.displayName = '@mantine/core/Anchor';

Text.displayName = '@library/core/Text';

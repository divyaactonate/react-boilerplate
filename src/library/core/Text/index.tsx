/** @jsxImportSource @emotion/react */
import { BeautifyCase, BeautifyTextAlignment, BeautifyWeight, DefaultProps } from '@library/theme';
import { BeautifyTextSize } from '@library/theme/types';
import { ComponentPassThrough } from '@library/types';
import cx from 'clsx';
import React, { ElementType, ReactNode } from 'react';
import { useStyles } from './Text.styles';

export interface TextProps extends DefaultProps {
  /** Text itself */
  children?: ReactNode;

  /** Predefined font-size from theme.fontSizes */
  size?: BeautifyTextSize;

  /** Text color from theme */
  color?: string;

  /** Sets font-weight css property */
  weight?: BeautifyWeight;

  /** Sets text-transform css property */
  transform?: BeautifyCase;

  /** Sets text-align css property */
  align?: BeautifyTextAlignment;

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
  themeOverride,
  elementRef,
  ...others
}: ComponentPassThrough<T, TextProps> & { elementRef?: React.ForwardedRef<U> }) {
  const { classes, css } = useStyles({
    variant,
    color,
    size,
    transform,
    themeOverride,
    weight,
    align,
  });
  const Element = component;
  return (
    <Element ref={elementRef} css={css.text} className={cx(classes.text, className)} {...others}>
      {children}
    </Element>
  );
  // return createElement(
  //   component,
  //   {
  //     css: css.text,
  //     className: cx(classes.text, className),
  //     ref: elementRef,
  //     ...others,
  //   },
  //   children
  // );
}
export function Anchor<T extends React.ElementType = 'a', U = HTMLAnchorElement>({
  component = 'a',
  ...others
}: ComponentPassThrough<T, TextProps> & { elementRef?: React.ForwardedRef<U> }) {
  return <Text data-beautify-anchor component={component} variant='link' {...others} />;
}

Anchor.displayName = '@beautify/core/Anchor';

Text.displayName = '@beautify/core/Text';

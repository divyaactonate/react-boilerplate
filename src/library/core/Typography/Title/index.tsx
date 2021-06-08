/** @jsxImportSource @emotion/react */
import { BeautifyHeading, DefaultProps } from '@library/theme';
import cx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { useStyles } from './Title.styles';

export interface TitleProps extends DefaultProps, ComponentPropsWithoutRef<'h1'> {
  /** Defines styles which will be used */
  order?: BeautifyHeading;
  color?: string;
}

export const Title = ({
  className,
  color = 'black',
  order = 5,
  children,
  themeOverride,
  ...others
}: TitleProps) => {
  const { classes, css } = useStyles({ order, color, themeOverride });
  const Element = `div` as const;

  return (
    <Element css={css.title} className={cx(classes.title, className)} {...others}>
      {children}
    </Element>
  );
  // return createElement(
  //   element,
  //   {
  //     css: css.title,
  //     className: cx(classes.title, className),
  //     ...others,
  //   },
  //   children
  // );
};

Title.displayName = '@beautify/core/Title';

import { BeautifyHeading, DefaultProps } from '@library/theme';
import cx from 'clsx';
import { ComponentPropsWithoutRef, createElement } from 'react';
import { useStyles } from './Title.styles';

export interface TitleProps extends DefaultProps, ComponentPropsWithoutRef<'h1'> {
  /** Defines styles which will be used */
  order?: BeautifyHeading;
  colorScheme?: string;
}

export const Title = ({
  className,
  colorScheme = 'black',
  order = 5,
  children,
  ...others
}: TitleProps) => {
  // if (![1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].includes(order)) {
  //   return null;
  // }
  const classes = useStyles({ order, colorScheme });
  const element = `div` as const;

  return createElement(
    element,
    {
      className: cx(classes.title, className),
      ...others,
    },
    children
  );
};

Title.displayName = '@beautify/core/Title';

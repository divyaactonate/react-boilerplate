/** @jsxImportSource @emotion/react */
// Please remove above line if not using twin css
import React from 'react';
import cx from 'clsx';
import { useStyles } from './Breadcrum.styles';
import { DefaultProps } from '@library/theme';
import { Text } from '@library/core/Text';

export interface BreadcrumProps extends DefaultProps {
  /** Separator between breadcrumbs */
  separator?: React.ReactNode;

  /** React nodes that should be separated */
  children: React.ReactNode;
}

export const Breadcrum = ({
  themeOverride,
  className,
  children,
  separator = '/',
  ...others
}: BreadcrumProps) => {
  const { classes } = useStyles({ themeOverride });
  const items = React.Children.toArray(children).reduce((acc: any[], child: any, index, array) => {
    acc.push(
      React.cloneElement(child, {
        className: classes.breadcrum,
        key: index,
        'data-mantine-breadcrumb': true,
      })
    );

    if (index !== array.length - 1) {
      acc.push(
        <Text
          size='sm'
          data-mantine-separator
          className={classes.separator}
          key={`separator-${index}`}
          themeOverride={themeOverride}
        >
          {separator}
        </Text>
      );
    }

    return acc;
  }, []);
  return (
    <div className={cx(classes.breadcrumbs, className)} {...others}>
      {items}
    </div>
  );
};
Breadcrum.displayName = '@beautify/core/Breadcrum';

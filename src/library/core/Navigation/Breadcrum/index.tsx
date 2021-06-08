/** @jsxImportSource @emotion/react */
import cx from 'clsx';
import { useStyles } from './Breadcrum.styles';
import { DefaultProps } from '@library/theme';
import { Text } from '@library/core';
import { Children, cloneElement, ReactNode, useState } from 'react';

export interface BreadcrumProps extends DefaultProps {
  /** Separator between breadcrumbs */
  separator?: ReactNode;

  /** React nodes that should be separated */
  children: ReactNode;
}

export const Breadcrum = ({
  themeOverride,
  className,
  children,
  separator = '/',
  ...others
}: BreadcrumProps) => {
  const [isFullBreadcrumb, setIsFullBreadcrumb] = useState(false);
  const { classes } = useStyles({ themeOverride });

  const items = Children.toArray(children).reduce((acc: any[], child: any, index, array) => {
    if (array.length > 5 && !isFullBreadcrumb) {
      if (
        index === 0 ||
        index === 1 ||
        index === array.length - 1 ||
        (index === array.length - 2 && index !== 2)
      ) {
        acc.push(
          cloneElement(child, {
            className: classes.breadcrum,
            key: index,
            'data-beautify-breadcrumb': true,
          })
        );

        if (index !== array.length - 1) {
          acc.push(
            <Text
              size='sm'
              data-beautify-separator
              className={classes.separator}
              key={`separator-${index}`}
              themeOverride={themeOverride}
            >
              {separator}
            </Text>
          );
        }
      } else if (index === 2 && !isFullBreadcrumb) {
        acc.push(
          cloneElement(
            <Text<'a'>
              variant='link'
              style={{ cursor: 'pointer' }}
              color={'gray'}
              component='a'
              key={index}
              onClick={() => setIsFullBreadcrumb(!isFullBreadcrumb)}
            >
              {'...'}
            </Text>,
            {
              className: classes.breadcrum,
              key: index,
              'data-beautify-breadcrumb': true,
            }
          )
        );

        if (index !== array.length - 1) {
          acc.push(
            <Text
              size='sm'
              data-beautify-separator
              className={classes.separator}
              key={`separator-${index}`}
              themeOverride={themeOverride}
            >
              {separator}
            </Text>
          );
        }
      }
    } else {
      acc.push(
        cloneElement(child, {
          className: classes.breadcrum,
          color: 'gray',
          key: index,
          'data-beautify-breadcrumb': true,
        })
      );

      if (index !== array.length - 1) {
        acc.push(
          <Text
            size='sm'
            data-beautify-separator
            className={classes.separator}
            key={`separator-${index}`}
            themeOverride={themeOverride}
          >
            {separator}
          </Text>
        );
      }
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

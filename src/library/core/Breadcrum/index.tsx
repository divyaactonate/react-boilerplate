/** @jsxImportSource @emotion/react */
// Please remove above line if not using twin css
import cx from 'clsx';
import { useStyles } from './Breadcrum.styles';
import { DefaultProps } from '@library/theme';
import { Text } from '@library/core/Text';
import { Children, cloneElement, ReactNode } from 'react';
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
  const { classes } = useStyles({ themeOverride });
  const items = Children.toArray(children).reduce((acc: any[], child: any, index, array) => {
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

    return acc;
  }, []);
  return (
    <div className={cx(classes.breadcrumbs, className)} {...others}>
      {items}
    </div>
  );
};
Breadcrum.displayName = '@beautify/core/Breadcrum';

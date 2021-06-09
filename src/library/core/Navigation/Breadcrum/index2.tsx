/** @jsxImportSource @emotion/react */
import cx from 'clsx';
import { useStyles } from './Breadcrum.styles';
import { DefaultProps } from '@library/theme';
import { Children, cloneElement, ReactNode } from 'react';
import { Text } from '../../Typography/Text';
import { Popover } from '../../Overlays/Popover';

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
    if (array.length > 5) {
      if (
        index === 0 ||
        index === 1 ||
        index === array.length - 1 ||
        (index === array.length - 2 && index !== 2)
      ) {
        acc.push(
          cloneElement(child, {
            style: {
              color: array.length - 1 === index ? '#666666' : '#0084FF',
              fontWeight: array.length - 1 === index ? 500 : 'normal',
            },
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
      } else if (index === 2) {
        acc.push(
          cloneElement(
            <Popover
              borderColor={`white`}
              bgColor={'white'}
              content={
                <div className='flex flex-col justify-center items-center w-auto rounded-sm p-2 bg-white-500 overflow-hidden text-sm shadow-sm'>
                  {array.length > 0 &&
                    array.map((d, ind) => {
                      if (
                        ind !== 0 &&
                        ind !== 1 &&
                        ind !== array.length - 1 &&
                        ind !== array.length - 2
                      ) {
                        return (
                          <div className={`flex flex-row justify-start w-full`}>
                            <div className={`flex w-5`}>
                              <svg
                                viewBox='0 0 30 30'
                                className={`sub h-full block flex-shrink-0`}
                                style={{
                                  width: 14,
                                  fill: '#666666',
                                }}
                              >
                                <path d='M5 3V20H23.187L19.594 16.406L21 15L27 21L21 27L19.594 25.594L23.187 22H3V3H5Z'></path>
                              </svg>
                            </div>

                            <div className={`flex}`}>{d}</div>
                          </div>
                        );
                      }
                      return null;
                    })}
                </div>
              }
              placement='bottom-center'
            >
              <Text<'a'>
                variant='text'
                className={`cursor-pointer`}
                style={{ color: '#0084FF' }}
                component='a'
                key={index}
              >
                {'...'}
              </Text>
            </Popover>,
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
          style: {
            color: array.length - 1 === index ? '#666666' : '#0084FF',
            fontWeight: array.length - 1 === index ? 500 : 'normal',
          },
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

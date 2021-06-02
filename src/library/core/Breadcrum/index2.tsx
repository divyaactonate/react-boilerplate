/** @jsxImportSource @emotion/react */
// Please remove above line if not using twin css
import cx from 'clsx';
import { useStyles } from './Breadcrum.styles';
import { DefaultProps } from '@library/theme';
import { Text, Popover } from '@library/core';
import { Children, cloneElement, ReactNode } from 'react';
import { Tooltip } from '../Tooltip';

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
          cloneElement(
            <Tooltip
              triggerOffset={12}
              arrowClassName='-mt-10'
              bgColor={'#1F2937'}
              borderColor={'#1F2937'}
              placement='bottom-center'
              possiblePlacements={['bottom-center', 'bottom-center']}
              text={
                <div className='break-words rounded-lg text-sm max-w-xs bg-gray-800 text-white p-3'>
                  {child?.props?.children}
                </div>
              }
            >
              {child}
            </Tooltip>,
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
      } else if (index === 2) {
        acc.push(
          cloneElement(
            <Popover
              borderColor={`white`}
              bgColor={'white'}
              content={
                <div className='flex flex-col justify-center items-center text-gray-500  w-auto rounded-sm p-2 bg-white-500  text-sm shadow-sm '>
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
                            <div className={`flex w-8`}>
                              <svg
                                viewBox='0 0 30 30'
                                className='sub'
                                style={{
                                  width: 14,
                                  height: '100%',
                                  display: 'block',
                                  fill: 'rgba(55, 53, 47, 0.3)',
                                  flexShrink: 0,
                                  backfaceVisibility: 'hidden',
                                  marginLeft: 4,
                                  marginRight: 8,
                                }}
                              >
                                <path d='M5 3V20H23.187L19.594 16.406L21 15L27 21L21 27L19.594 25.594L23.187 22H3V3H5Z'></path>
                              </svg>
                            </div>

                            <div className={`flex`}>
                              <p>{d}</p>
                            </div>
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
                style={{ cursor: 'pointer', border: 'none', borderColor: 'transparent' }}
                component='a'
                key={index}
                color={'blue'}
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

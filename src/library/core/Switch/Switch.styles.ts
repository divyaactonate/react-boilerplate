import cn from 'clsx';
import { useMemo } from 'react';
import {
  getSizeValue,
  BeautifySize,
  BeautifyTheme,
  useBeautifyTheme,
  DefaultStyleProps,
  hexToRgba,
  getThemeColor,
  // getStyleValue,
  getRadiusValue,
} from '@library/theme';

interface SwitchStylesProps extends DefaultStyleProps {
  reduceMotion?: boolean;
  color: string;
  size: BeautifySize;
  radius: BeautifySize;
  theme: BeautifyTheme;
}

const switchHeight = {
  xs: 14,
  sm: 18,
  md: 22,
  lg: 28,
  xl: 34,
};

const switchWidth = {
  xs: 28,
  sm: 36,
  md: 42,
  lg: 54,
  xl: 66,
};

// const paddings = {
//   xs: 'px-4',
//   sm: 'px-4',
//   md: 'px-4',
//   lg: 'px-6',
//   xl: 'px-6',
// };

const handleSizes = {
  xs: 10,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 26,
};

export const sizes = Object.keys(switchHeight).reduce((acc, size) => {
  acc[size] = { width: switchWidth[size], height: switchHeight[size] };
  return acc;
}, {} as Record<BeautifySize, { width: number; height: number }>);

interface StylesProps extends SwitchStylesProps {
  theme: BeautifyTheme;
}
export const getStyles = (props: StylesProps) => {
  const { theme, size, radius, reduceMotion, color } = props;

  const handleSize = getSizeValue({ size, sizes: handleSizes });

  const css: any = {
    switch: {
      WebkitTapHighlightColor: 'transparent',
      position: 'relative',
      borderRadius: getRadiusValue({ radius }),
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
      height: getSizeValue({ size, sizes: switchHeight }),
      width: getSizeValue({ size, sizes: switchWidth }),
      minWidth: getSizeValue({ size, sizes: switchWidth }),
      padding: [0, 2],
      margin: 0,
      transitionProperty: 'background-color, border-color',
      transitionTimingFunction: theme.transitionTimingFunction,
      transitionDuration: reduceMotion ? '1ms' : '150ms',
      boxSizing: 'border-box',
      appearance: 'none',
      display: 'flex',
      alignItems: 'center',
      '&::before': {
        borderRadius: '45%',
        boxSizing: 'border-box',
        content: "''",
        display: 'block',
        backgroundColor: theme.white,
        height: handleSize,
        width: handleSize,
        border: `1px solid ${theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[3]}`,
        transition: reduceMotion ? 'none' : `transform 150ms ${theme.transitionTimingFunction}`,
      },
      '&:checked': {
        backgroundColor: hexToRgba(
          getThemeColor({ theme, color, shade: 7 }),
          theme.colorScheme === 'dark' ? 0.65 : 1
        ),
        borderColor: hexToRgba(
          getThemeColor({ theme, color, shade: 7 }),
          theme.colorScheme === 'dark' ? 0.65 : 1
        ),

        '&::before': {
          transform: `translateX(${
            getSizeValue({ size, sizes: switchWidth }) -
            getSizeValue({ size, sizes: handleSizes }) -
            6 // borderWidth: 2 + padding: 2 * 2
          }px)`,
          borderColor: theme.white,
        },
      },
      '&:disabled': {
        backgroundColor: hexToRgba(
          getThemeColor({ theme, color, shade: 7 }),
          theme.colorScheme === 'dark' ? 0.65 : 1
        ),
        borderColor: hexToRgba(
          getThemeColor({ theme, color, shade: 7 }),
          theme.colorScheme === 'dark' ? 0.65 : 1
        ),
        cursor: 'not-allowed',

        '&::before': {
          borderColor: hexToRgba(
            getThemeColor({ theme, color, shade: 7 }),
            theme.colorScheme === 'dark' ? 0.65 : 1
          ),
          backgroundColor: hexToRgba(
            getThemeColor({ theme, color, shade: 7 }),
            theme.colorScheme === 'dark' ? 0.65 : 1
          ),
        },
      },
    },
  };

  const classes = {
    switch: cn(``, getSizeValue({ size }), getRadiusValue({ radius })),
    wrapper: cn(`flex items-center`),
    label: `text-${hexToRgba(
      getThemeColor({ theme, color, shade: 7 }),
      theme.colorScheme === 'dark' ? 0.65 : 1
    )}-700 pl-5 font-sans text-base`,
  };
  return { classes, css };
};

export const useStyles = (props: SwitchStylesProps) => {
  const { themeOverride, size, radius, reduceMotion, color } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ theme, size, radius, reduceMotion, color }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeOverride, size, radius, reduceMotion, color, theme]
  );
};

import cn from 'clsx';
import { useMemo } from 'react';
import {
  BeautifyCase,
  BeautifySize,
  BeautifyTheme,
  getRadiusValue,
  getSizeValue,
  getStyleValue,
  useBeautifyTheme,
  getThemeColor,
  hexToRgba,
} from '@library/theme';

interface InputFieldStylesProps {
  color?: string;
  size: BeautifySize;
  radius: BeautifySize;
  disabled: boolean;
  transform: BeautifyCase;
  fullWidth: boolean;
  themeOverride?: any;
}

interface StylesProps extends InputFieldStylesProps {
  theme: BeautifyTheme;
}
const paddings = {
  xs: 'px-4',
  sm: 'px-4',
  md: 'px-4',
  lg: 'px-6',
  xl: 'px-6',
};
const heights = {
  xs: 'h-6',
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12',
  xl: 'h-14',
};
const getWidthStyles = (fullWidth: boolean) => {
  if (fullWidth) return 'block w-full';
  else return 'inline-block w-auto';
};

export const getStyles = (props: StylesProps) => {
  const { color, theme, fullWidth, radius, size, transform } = props;

  const css = {
    textStyle: {
      color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
    },
  };

  const classes = {
    inputfield: cn(
      `relative flex flex-wrap items-stretch mb-3 ${transform}`,
      getStyleValue(paddings, size),
      getStyleValue(heights, size),
      getWidthStyles(fullWidth),
      getSizeValue({ size }),
      getRadiusValue({ radius })
    ),
    withIcon: cn(`pl-3`),
    rightPanel: cn(
      `z-10 h-full leading-snug font-normal absolute text-center ${getThemeColor({
        theme,
        color,
        shade: theme.colorScheme === 'dark' ? 4 : 6,
      })} bg-transparent rounded text-base items-center justify-center w-8 right-0 top-0 pr-3 py-3`
    ),
    icon: cn(
      `z-10 h-full leading-snug font-normal absolute text-center ${getThemeColor({
        theme,
        color,
        shade: theme.colorScheme === 'dark' ? 4 : 6,
      })} bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3`
    ),
    defaultVariant: cn(
      `leading-3 appearance-none resize-none box-border text-sm block  bg-${hexToRgba(
        getThemeColor({ theme, color, shade: 7 }),
        theme.colorScheme === 'dark' ? 0.65 : 1
      )}-600 border border-transparent rounded-md p-0`
    ),
    invalid: cn(`placeholder-opacity-100 placeholder-black-100 `),
    inputWrapper: cn(`relative box-border rounded-sm`),
    filledVariant: cn(
      `h-10 rounded-md border-transparent bg-${hexToRgba(
        getThemeColor({ theme, color, shade: 7 }),
        theme.colorScheme === 'dark' ? 0.65 : 1
      )}-300 ${getThemeColor({
        theme,
        color,
        shade: theme.colorScheme === 'dark' ? 4 : 6,
      })} focus:outline-none focus:border-grey placeholder-black-100`
    ),
    unstyledVariant: cn(
      `${getThemeColor({
        theme,
        color,
        shade: theme.colorScheme === 'dark' ? 4 : 6,
      })} bg-trsansparent border-0 outline-none h-10`
    ),
    input: cn(
      `${fullWidth && 'w-full'}`,
      `leading-3 appearance-none resize-none box-border text-sm w-full h-10 block bg-${hexToRgba(
        getThemeColor({ theme, color, shade: 7 }),
        theme.colorScheme === 'dark' ? 0.65 : 1
      )}-600 ` +
        `disabled:bg-${hexToRgba(
          getThemeColor({ theme, color, shade: 7 }),
          theme.colorScheme === 'dark' ? 0.65 : 1
        )}-600 disabled:cursor-not-allowed disabled:opacity-60 ` +
        `placeholder-opacity-100 placeholder-black-100 ` +
        `border border-grey rounded-md hover:border-blue-500 md:focus:border-blue-700 focus:outline-none focus:ring ` +
        `text-left ${getThemeColor({
          theme,
          color,
          shade: theme.colorScheme === 'dark' ? 4 : 6,
        })} pl-10`
    ),
  };
  return { classes, css };
};

export const useStyles = (props: InputFieldStylesProps) => {
  const { color, fullWidth, radius, size, transform, themeOverride, disabled } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ color, fullWidth, radius, size, transform, theme, disabled }),
    [color, theme, fullWidth, radius, size, transform, themeOverride, disabled]
  );
};

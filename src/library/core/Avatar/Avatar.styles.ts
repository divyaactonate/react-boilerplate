import {
  BeautifySize,
  BeautifyTheme,
  DefaultStyleProps,
  getRadiusValue,
  getSizeValue,
  getThemeColor,
  hexToRgba,
  useBeautifyTheme,
} from '@library/theme';
import cx from 'clsx';
import { useMemo } from 'react';

interface AvatarStylesProps extends DefaultStyleProps {
  size: BeautifySize;
  radius: BeautifySize;
  color: string;
}
interface StylesProps extends AvatarStylesProps {
  theme: BeautifyTheme;
}
export const sizes = {
  xs: 16,
  sm: 26,
  md: 38,
  lg: 56,
  xl: 84,
};

const getStyles = (props: StylesProps) => {
  const { color, radius, size, theme } = props;
  const classes = {
    image: `w-full h-full object-cover`,
    avatar: cx(`flex box-border relative overflow-hidden select-none`, getRadiusValue({ radius })),
    placeholder: `flex items-center justify-center w-full h-full select-none w- font-bold`,
  };
  const css = {
    avatar: {
      width: getSizeValue({ size, sizes }),
      height: getSizeValue({ size, sizes }),
      // borderRadius: radius ? getSizeValue({ size: radius, sizes: theme.radius }) : size,
    },
    placeholderIcon: {
      width: '70%',
      height: '70%',
      color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 0 : 6 }),
    },
    placeholder: {
      fontSize: getSizeValue({ size, sizes }) / 2.5,
      color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 0 : 6 }),
      backgroundColor: hexToRgba(
        getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 8 : 1 }),
        theme.colorScheme === 'dark' ? 0.5 : 1
      ),
    },
  };
  return { classes, css };
};

export const useStyles = (props: AvatarStylesProps) => {
  const { color, radius, size, themeOverride } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ color, radius, size, theme }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [color, radius, size, themeOverride]
  );
};

import {
  BeautifySize,
  BeautifyTheme,
  DefaultStyleProps,
  getSizeValue,
  getThemeColor,
  useBeautifyTheme,
} from '@library/theme';
import cx from 'clsx';
import { useMemo } from 'react';

interface AvatarGroupStylesProps extends DefaultStyleProps {
  size: BeautifySize;
  spacing: number;
}
interface StylesProps extends AvatarGroupStylesProps {
  theme: BeautifyTheme;
}
export const sizess = {
  xs: 'text-base',
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
  xl: 'text-3xl',
};

export const sizes = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  '2xl': 32,
  '3xl': 36,
};
export const getStyles = (props: StylesProps) => {
  const { size, theme, spacing } = props;

  const css = {
    excessStyles: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[4],
      backgroundColor: getThemeColor({
        theme,
        color: 'gray',
        shade: theme.colorScheme === 'dark' ? 6 : 3,
      }),
    },
    avatargroup: {},
    childClass: {
      borderColor: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[1],
    },
  };

  const classes = {
    excessStyles: cx(
      `rounded-full -ml-4`,
      getSizeValue({ size, sizes: sizess }),
      `w-${sizes[size]} h-${sizes[size]}`,
      `uppercase flex items-center justify-center text-center font-bold`
    ),
    avatargroup: cx(
      `flex items-center justify-end flex-row-reverse`,
      `ml-${spacing} -space-x-${spacing} `
    ),
  };
  return { classes, css };
};

export const useStyles = (props: AvatarGroupStylesProps) => {
  const { themeOverride, size, spacing } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ theme, size, spacing }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeOverride, size, spacing]
  );
};

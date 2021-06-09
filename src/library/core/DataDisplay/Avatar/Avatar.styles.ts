import {
  BeautifySize,
  BeautifyTheme,
  DefaultStyleProps,
  getRadiusValue,
  getTextSizeValue,
  getThemeColor,
  useBeautifyTheme,
} from '@library/theme';
import cx from 'clsx';
import { useMemo } from 'react';

interface AvatarStylesProps extends DefaultStyleProps {
  size: BeautifySize | '2xl' | '3xl';
  radius: BeautifySize;
  color: string;
  badgeColor?: string;
}
interface StylesProps extends AvatarStylesProps {
  theme: BeautifyTheme;
}
export const sizes = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  '2xl': 32,
  '3xl': 36,
};
export const badgeSize = {
  xs: 1,
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
  '2xl': 5,
  '3xl': 6,
};
const getStyles = (props: StylesProps) => {
  const { color, radius, badgeColor, size, theme } = props;
  const classes = {
    image: cx(getRadiusValue({ radius }), ``),
    avatar: cx(
      `inline-block relative`,
      `w-${sizes[size]} h-${sizes[size]}`,
      getTextSizeValue({ size }),
      getRadiusValue({ radius })
    ),
    placeholder: cx(
      `flex items-center justify-center w-full h-full font-bold`,
      getTextSizeValue({ size }),
      getRadiusValue({ radius })
    ),
    placeholderIcon: `w-9/12 h-full`,
    badge: cx(
      radius === 'xl' ? 'bottom-2 right-1' : 'bottom-0 right-0',
      `absolute border-2 ring-2 ring-white rounded-full`,
      `w-${badgeSize[size]} h-${badgeSize[size]}`
    ),
  };
  const css = {
    placeholderIcon: {
      color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 0 : 6 }),
    },
    placeholder: {
      color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 0 : 6 }),
      backgroundColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 8 : 1 }),
    },
    badge: {
      borderColor: theme.white,
      backgroundColor: getThemeColor({
        theme,
        color: badgeColor,
        shade: theme.colorScheme === 'dark' ? 4 : 6,
      }),
    },
  };
  return { classes, css };
};

export const useStyles = (props: AvatarStylesProps) => {
  const { color, radius, size, badgeColor, themeOverride } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ color, radius, size, theme, badgeColor }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [color, radius, size, themeOverride, badgeColor]
  );
};

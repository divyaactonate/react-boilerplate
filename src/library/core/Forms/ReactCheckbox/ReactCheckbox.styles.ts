import cx from 'clsx';
import { useMemo } from 'react';
import {
  BeautifySize,
  BeautifyTheme,
  DefaultStyleProps,
  getRadiusValue,
  getsizeValue,
  getTextSizeValue,
  getThemeColor,
  useBeautifyTheme,
} from '@library/theme';

interface ReactCheckboxStylesProps extends DefaultStyleProps {
  size: BeautifySize;
  color: string;
  radius: BeautifySize;
}
interface StylesProps extends ReactCheckboxStylesProps {
  theme: BeautifyTheme;
}
const radii = {
  xs: 'rounded',
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-xl',
  xl: 'rounded-full',
};
export const sizes = {
  xs: 'w-4 h-4',
  sm: 'w-5 h-5',
  md: 'w-8 h-8',
  lg: 'w-10 h-10',
  xl: 'w-12 h-12',
};
export const getStyles = (props: StylesProps) => {
  const { theme, radius, size, color } = props;

  const css = {
    label: {
      WebkitTapHighlightColor: 'transparent',
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
    checkbox: {
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
      }`,
      color: getThemeColor({
        theme,
        color,
        shade: theme.colorScheme === 'dark' ? 4 : 6,
      }),
    },
  };

  const classes = {
    label: cx(`pl-4`, getTextSizeValue({ size })),
    wrapper: `flex items-center`,
    icon: `pointer-events-none w-4/5 h-4/5 absolute z-10 inset-0 m-auto`,
    checkbox: cx(`block p-0 m-0`, getsizeValue({ size, sizes }), getRadiusValue({ radius, radii })),
  };
  return { classes, css };
};

export const useStyles = (props: ReactCheckboxStylesProps) => {
  const { themeOverride, size, radius, color } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ theme, size, radius, color }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme, size, radius, color]
  );
};

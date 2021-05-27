import {
  BeautifySize,
  BeautifyTheme,
  DefaultStyleProps,
  getFocusStyles,
  getRadiusValue,
  getsizeValue,
  getTextSizeValue,
  getThemeColor,
  useBeautifyTheme,
} from '@library/theme';
import { useMemo } from 'react';
import cx from 'clsx';

interface CheckboxStylesProps extends DefaultStyleProps {
  size: BeautifySize;
  color?: string;
  radius: BeautifySize;
}
interface StylesProps extends CheckboxStylesProps {
  theme: BeautifyTheme;
}
export const sizes = {
  xs: 'w-4 h-4',
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10',
  xl: 'w-12 h-12',
};

export const getStyles = (props: StylesProps) => {
  const { size, color, radius, theme } = props;
  const classes = {
    label: cx(`pl-4`, getTextSizeValue({ size })),
    checkboxWrapper: cx(`relative`, getsizeValue({ size, sizes })),
    wrapper: `flex items-center`,
    icon: `hidden pointer-events-none w-4/5 h-4/5 absolute z-10 inset-0 m-auto`,
    checkbox: cx(
      `block p-0 m-0 bg-green-600 text-green-600`,
      getsizeValue({ size, sizes }),
      getRadiusValue({ radius })
    ),
  };
  const css = {
    label: {
      WebkitTapHighlightColor: 'transparent',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    },
    checkbox: {
      ...getFocusStyles(theme),
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[0],
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
      }`,
      '&:checked': {
        backgroundColor: getThemeColor({
          theme,
          color,
          shade: theme.colorScheme === 'dark' ? 4 : 6,
        }),
        borderColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
        color: theme.white,

        '& + $icon': {
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white,
          display: 'block',
        },
      },

      '&:disabled': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
        borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[3],
        cursor: 'not-allowed',

        '& + $icon': {
          color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[5],
        },
      },
    },
  };
  return { classes, css };
};
export const useStyles = (props: CheckboxStylesProps) => {
  const { size, color, radius, themeOverride } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ size, color, radius, theme }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [size, color, radius, themeOverride]
  );
};

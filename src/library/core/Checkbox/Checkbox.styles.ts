import cx from 'clsx';
import { useMemo } from 'react';
import {
  BeautifyTheme,
  DefaultStyleProps,
  useBeautifyTheme,
  BeautifySize,
  getTextSizeValue,
  getThemeColor,
  getsizeValue,
  getRadiusValue,
} from '@library/theme';

// export const sizes = {
//   xs: 12,
//   sm: 16,
//   md: 20,
//   lg: 26,
//   xl: 36,
// };
export const sizes = {
  xs: 'w-5 h-5',
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10',
  xl: 'w-12 h-12',
};
interface CheckboxStylesProps extends DefaultStyleProps {
  size: BeautifySize;
  color: string;
  radius: BeautifySize;
}

interface StylesProps extends CheckboxStylesProps {
  theme: BeautifyTheme;
}
export const getStyles = (props: StylesProps) => {
  const { theme, radius, size, color } = props;
  const css = {
    checkbox: {
      // appearance: 'none',
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
    label: {
      WebkitTapHighlightColor: 'transparent',
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
    icon: {
      color: theme.colorScheme === 'dark' ? theme.black : theme.white,
    },
  };
  const classes = {
    label: cx(`pl-4`, getTextSizeValue({ size })),
    checkboxWrapper: cx(`relative`, getsizeValue({ size, sizes })),
    wrapper: `flex items-center`,
    icon: `pointer-events-none w-4/5 h-4/5 absolute z-10 inset-0 m-auto`,
    checkbox: cx(
      `block p-0 m-0 bg-green-600 text-green-600 appearance-none`,
      getsizeValue({ size, sizes }),
      getRadiusValue({ radius })
    ),
  };
  return { classes, css };
};

export const useStyles = (props: CheckboxStylesProps) => {
  const { themeOverride, size, radius, color } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ theme, size, radius, color }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeOverride, size, color, radius, theme]
  );
};

import cx from 'clsx';
import { useMemo } from 'react';
import {
  BeautifySize,
  BeautifyTheme,
  DefaultStyleProps,
  getRadiusValue,
  useBeautifyTheme,
} from '@library/theme';

interface TextInputStylesProps extends DefaultStyleProps {
  size: BeautifySize;
  radius: BeautifySize;
  isInvalid: boolean;
}
interface StylesProps extends TextInputStylesProps {
  theme: BeautifyTheme;
}
const heights = {
  xs: 'h-6 text-xs px-1',
  sm: 'h-8 text-sm px-2',
  md: 'h-10 text-sm px-2',
  lg: 'h-12 text-base px-3',
  xl: 'h-14 text-lg px-4',
};
export const getStyles = (props: StylesProps) => {
  const { theme, size, radius, isInvalid } = props;
  const css = {
    iconClass: {
      color: theme.colors.gray[5],
    },
    textinput: {
      color: theme.colorScheme === 'dark' ? theme.colors.white : theme.colors.gray[7],
      boxShadow: isInvalid
        ? `0 0 0 0.9px ${theme.colors.red[5]}`
        : `0 0 0 0.5px ${theme.colors.gray[4]}`,
      '&:focus': {
        outline: 'none',
        // borderWidth: '1.5px',
        // borderColor: theme.colors.blue[5],
        boxShadow: isInvalid
          ? `0 0 0 0.9px ${theme.colors.red[5]}`
          : `0 0 0 0.7px ${theme.colors.blue[4]}`,
      },
      '&::placeholder': {
        opacity: 1,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
      },
      '&$invalid $input': {
        outline: 0,
        color: theme.colors.red[5],
        borderColor: theme.colors.red[5],
      },
      '&:disabled': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
        opacity: 0.6,
        cursor: 'not-allowed',
      },
    },
  };

  const classes = {
    wrapper: `w-full h-full outline-none relative rounded-md shadow-sm`,
    leftIconWrapper: `absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none`,
    rightIconWrapper: `absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none`,
    iconClass: `h-5 w-5`,
    textinput: cx(
      heights[size],
      getRadiusValue({ radius }),
      `block w-full pr-10 border outline-none`
    ),
  };
  return { classes, css };
};

export const useStyles = (props: TextInputStylesProps) => {
  const { themeOverride, size, radius, isInvalid } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ theme, size, radius, isInvalid }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeOverride, size, radius, isInvalid]
  );
};

import cx from 'clsx';
import { useMemo } from 'react';
import {
  BeautifySize,
  BeautifyTheme,
  DefaultStyleProps,
  getRadiusValue,
  useBeautifyTheme,
} from '@library/theme';

interface PasswordInputStylesProps extends DefaultStyleProps {
  size: BeautifySize;
  radius: BeautifySize;
}
interface StylesProps extends PasswordInputStylesProps {
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
  const { theme, size, radius } = props;
  const css = {
    iconClass: {
      color: theme.colors.blue[9],
    },
    textinput: {
      color: theme.colorScheme === 'dark' ? theme.colors.white : theme.colors.gray[7],
      borderColor: theme.colors.gray[5],
      '&:focus': {
        outline: 'none',
        // borderWidth: '1.5px',
        // borderColor: theme.colors.blue[5],
        boxShadow: `0 0 0 0.7px ${theme.colors.blue[4]}`,
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
    iconWrapper: `absolute cursor-pointer mt-1.5 h-7 px-1 hover:bg-gray-200 rounded-full inset-y-0 right-0 mr-2 flex items-center`,
    iconClass: `h-5 w-5`,
    textinput: cx(
      heights[size],
      getRadiusValue({ radius }),
      `block w-full mt-1.5 pr-10 border outline-none`
    ),
  };
  return { classes, css };
};

export const useStyles = (props: PasswordInputStylesProps) => {
  const { themeOverride, size, radius } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ theme, size, radius }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeOverride, size, radius]
  );
};

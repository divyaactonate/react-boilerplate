import { keyframes } from '@emotion/react';
import { getBorderWidthValue, getThemeColor, useBeautifyTheme } from '@library/theme';
import { BeautifyTheme, DefaultStyleProps } from '@library/theme/types';
import cx from 'clsx';
import { useMemo } from 'react';

interface SpinnerStylesProps extends DefaultStyleProps {
  thickness?: string;
  size: number;
  speed: string;
  color?: string;
  emptyColor?: string;
}
interface StylesProps extends SpinnerStylesProps {
  theme: BeautifyTheme;
}
const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const getStyles = (props: StylesProps) => {
  const { thickness, emptyColor, speed, size, color, theme } = props;
  const classes = {
    spinner: cx(
      `block border-solid rounded-full`,
      `w-${size} h-${size}`,
      getBorderWidthValue({ thickness })
    ),
  };
  const css = {
    spinner: {
      borderBottomColor: emptyColor,
      borderColor:
        color === 'current'
          ? 'currentColor'
          : color === 'white'
          ? theme.white
          : color === 'black'
          ? theme.black
          : getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
      borderLeftColor: emptyColor,
      animation: `${spin} ${speed} linear infinite`,
    },
  };
  return { classes, css };
};
export const useStyles = (props: SpinnerStylesProps) => {
  const { thickness, emptyColor, speed, size, color, themeOverride } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ thickness, emptyColor, speed, size, color, themeOverride, theme }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [thickness, emptyColor, speed, size, color, themeOverride]
  );
};

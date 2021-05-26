import { BeautifyTheme, DefaultStyleProps, getThemeColor, useBeautifyTheme } from '@library/theme';
import cx from 'clsx';
import { useMemo } from 'react';

interface AlertStylesProps extends DefaultStyleProps {
  color: string;
  isTitle: React.ReactNode;
  variant: 'subtle' | 'solid' | 'leftAccent' | 'topAccent';
}
interface StylesProps extends AlertStylesProps {
  theme: BeautifyTheme;
}

export const getStyles = (props: StylesProps) => {
  const { color, theme, isTitle, variant } = props;
  const css = {
    subtle: {
      backgroundColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 1 : 1 }),
    },
    solid: {
      backgroundColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 5 }),
    },
    leftAccent: {
      borderLeftWidth: '10px',
      borderColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 2 : 5 }),
      backgroundColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 1 : 1 }),
    },
    topAccent: {
      borderTopWidth: '10px',
      borderColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 2 : 5 }),
      backgroundColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 1 : 1 }),
    },
    iconClass: {
      color:
        variant === 'solid'
          ? theme.white
          : getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
    },
    title: {
      color:
        color === 'white' || variant === 'solid'
          ? theme.white
          : color === 'black'
          ? theme.black
          : getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 8 : 6 }),
    },
    body: {
      color:
        variant === 'solid'
          ? theme.white
          : getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 8 : 5 }),
    },
  };

  const classes = {
    contentWrapper: `ml-4`,
    title: `box m-0 mb-1 font-bold fo text-xl overflow-ellipsis overflow-hidden`,
    body: `leading-normal overflow-ellipsis overflow-hidden text-md font-normal `,
    iconClass: isTitle ? 'w-20 h-20' : 'w-10',
    alert: cx(`alert flex flex-row items-center`, `p-5 rounded`),
  };
  return { classes, css };
};
export const useStyles = (props: AlertStylesProps) => {
  const { color, isTitle, variant, themeOverride } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ color, isTitle, variant, theme, themeOverride }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [color, isTitle, variant]
  );
};

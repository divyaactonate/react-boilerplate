import cn from 'clsx';
import { useMemo } from 'react';
import { BeautifyTheme, DefaultStyleProps, useBeautifyTheme } from '@library/theme';

type BreadcrumStylesProps = DefaultStyleProps;

interface StylesProps extends BreadcrumStylesProps {
  theme: BeautifyTheme;
}
export const getStyles = (props: StylesProps) => {
  const { theme } = props;

  const css = {
    breadcrum: {
      lineHeight: 1,
      whiteSpace: 'nowrap',
      WebkitTapHighlightColor: 'transparent',
    },
    cards: {},
    separator: {
      // marginLeft: 10,
      // marginRight: 10,
      // color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[7],
      // lineHeight: 1,
      // display: 'flex',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  };

  const classes = {
    breadcrum: cn(``),
    breadcrumbs: cn(`flex`),
    separator: cn(
      `flex justify-center items-center mx-5 leading-none text-${
        theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[7]
      }-700`
    ),
  };
  return { classes, css };
};

export const useStyles = (props: BreadcrumStylesProps) => {
  const { themeOverride } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ theme }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeOverride]
  );
};

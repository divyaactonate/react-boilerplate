import cx from 'clsx';
import { useMemo } from 'react';
import { BeautifyTheme, DefaultStyleProps, useBeautifyTheme } from '@library/theme';

type SelectStylesProps = DefaultStyleProps;
interface StylesProps extends SelectStylesProps {
  theme: BeautifyTheme;
}
export const getStyles = (props: StylesProps) => {
  const { theme } = props;
  console.log(theme);

  const css = {
    select: {},
  };

  const classes = {
    select: cx(),
    listButton: cx(
      `relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm`
    ),
  };
  return { classes, css };
};

export const useStyles = (props: SelectStylesProps) => {
  const { themeOverride } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ theme }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeOverride]
  );
};

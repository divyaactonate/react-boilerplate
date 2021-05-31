import cx from 'clsx';
import { useMemo } from 'react';
import { BeautifyTheme, DefaultStyleProps, useBeautifyTheme } from '@library/theme';

interface FolderCardStylesProps extends DefaultStyleProps {
  hi?: string;
}
interface StylesProps extends FolderCardStylesProps {
  theme: BeautifyTheme;
}
export const getStyles = (props: StylesProps) => {
  const { theme } = props;

  const css = {
    foldercard: { theme },
  };

  const classes = {
    foldercard: cx(),
  };
  return { classes, css };
};

export const useStyles = (props: FolderCardStylesProps) => {
  const { themeOverride } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ theme }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeOverride]
  );
};

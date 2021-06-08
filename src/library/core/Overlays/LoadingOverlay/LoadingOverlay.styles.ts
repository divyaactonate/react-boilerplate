import { BeautifyTheme } from '@library/theme';
import cx from 'clsx';
import { useMemo } from 'react';

interface LoadingOverlayStylesProps {
  theme: BeautifyTheme;
}

export const getStyles = (props: LoadingOverlayStylesProps) => {
  const {} = props;

  const css = {
    loadingOverlay: {},
  };

  const classes = {
    loadingoverlay: cx(
      `absolute inset-0 flex items-center overflow-hidden`,
      `flex items-center justify-center`
    ),
  };
  return { classes, css };
};

export const useStyles = (props: LoadingOverlayStylesProps) => {
  const { theme } = props;

  return useMemo(
    () => getStyles({ theme }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
};

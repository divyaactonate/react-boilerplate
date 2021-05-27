import {
  BeautifyPadding,
  BeautifyShadow,
  BeautifySize,
  BeautifyTheme,
  DefaultStyleProps,
  getPaddingValue,
  getRadiusValue,
  getShadowValue,
  getTextSizeValue,
  useBeautifyTheme,
} from '@library/theme';
import cx from 'clsx';
import { useMemo } from 'react';

interface ModalStylesProps extends DefaultStyleProps {
  overflow: 'outside' | 'inside';
  size: BeautifySize | 'full';
  padding: BeautifyPadding;
  radius: BeautifySize;
  shadow: BeautifyShadow;
  overlayOpacity?: number;
  overlayColor?: string;
}
interface StylesProps extends ModalStylesProps {
  theme: BeautifyTheme;
}
export const sizes = {
  xs: 'w-3/12',
  sm: 'w-4/12',
  md: 'w-6/12',
  lg: 'w-8/12',
  xl: 'w-10/12',
  full: 'w-full',
};

export const getStyles = (props: StylesProps) => {
  const { theme, overflow, padding, overlayColor, shadow, overlayOpacity, size, radius } = props;

  const css: any = {
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[7],
    },
    modal: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
    },
    body: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[7],
      maxHeight: overflow === 'inside' && 'calc(100vh - 185px)',
      overflowY: overflow === 'inside' && 'auto',
    },
    overlay: {
      opacity:
        typeof overlayOpacity === 'number'
          ? overlayOpacity
          : theme.colorScheme === 'dark'
          ? 0.85
          : 0.75,
      backgroundColor:
        overlayColor || (theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.black),
    },
  };

  const classes = {
    transitions: {
      enter: 'transform transition ease-in duration-[400ms]',
      enterFrom: 'opacity-0 rotate-[-120deg] scale-75',
      enterTo: 'opacity-100 rotate-0 scale-100',
      leave: 'transform duration-200 transition ease-in-out',
      leaveFrom: 'opacity-100 rotate-0 scale-100 ',
      leaveTo: 'opacity-0 scale-95 ',
    },
    overlay: `fixed opacity-90 inset-0`,
    body: `break-words`,
    wrapper: `fixed inset-0 my-10`,
    modal: cx(
      getTextSizeValue({ size, sizes }),
      getRadiusValue({ radius }),
      getShadowValue({ shadow }),
      getPaddingValue({ padding }),
      `outline-none`
    ),
    header: `flex items-center justify-between py-3`,
    title: cx(`ml-4 overflow-ellipsis block break-words text-2xl`),
    inner: cx(`absolute inset-0 overflow-y-auto flex items-start justify-center`),
  };
  return { classes, css };
};
export const useStyles = (props: ModalStylesProps) => {
  const { themeOverride, overflow, size, radius, padding, overlayColor, shadow, overlayOpacity } =
    props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);
  return useMemo(
    () =>
      getStyles({ theme, overflow, padding, size, radius, shadow, overlayColor, overlayOpacity }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeOverride, overflow, size, radius, padding, shadow, overlayColor, overlayOpacity]
  );
};

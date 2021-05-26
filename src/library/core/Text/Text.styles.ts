import {
  BeautifyCase,
  BeautifySize,
  BeautifyTextAlignment,
  BeautifyTheme,
  BeautifyWeight,
  DefaultStyleProps,
  getAlignValue,
  getSizeValue,
  getTransformValue,
  getWeightValue,
  useBeautifyTheme,
} from '@library/theme';
import cx from 'clsx';
import { useMemo } from 'react';

export type TextVariant = 'text' | 'link';

interface TextStylesProps extends DefaultStyleProps {
  color: string;
  variant: TextVariant;
  size: BeautifySize;
  weight?: BeautifyWeight;
  transform?: BeautifyCase;
  align?: BeautifyTextAlignment;
}
interface StylesProps extends TextStylesProps {
  theme: BeautifyTheme;
}
export const getStyles = (props: StylesProps) => {
  const { size, theme, color, variant, align, transform, weight } = props;

  const css = {
    text: {
      color:
        color in theme.colors
          ? theme.colors[color][theme.colorScheme === 'dark' ? 4 : 6]
          : variant === 'link'
          ? theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]
          : theme.colorScheme === 'dark'
          ? theme.colors.dark[0]
          : theme.black,
    },
  };

  const classes = {
    text: cx(
      `no-underline shadow-sm`,
      getWeightValue({ weight }),
      getAlignValue({ align }),
      getSizeValue({ size }),
      getTransformValue({ transform }),
      variant === 'link' ? 'hover-underline' : 'hover-none'
    ),
  };
  return { classes, css };
};
export const useStyles = (props: TextStylesProps) => {
  const { size, color, variant, align, transform, weight, themeOverride } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ size, color, variant, align, transform, weight, theme }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [size, color, variant, align, transform, weight, themeOverride]
  );
};

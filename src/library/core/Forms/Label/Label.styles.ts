import {
  BeautifyCase,
  BeautifyTheme,
  BeautifyWeight,
  DefaultStyleProps,
  getTextSizeValue,
  getTransformValue,
  getWeightValue,
  useBeautifyTheme,
} from '@library/theme';
import cx from 'clsx';
import { useMemo } from 'react';

interface LabelStylesProps extends DefaultStyleProps {
  size: string;
  transform: BeautifyCase;
  isInvalid: boolean;
  weight: BeautifyWeight;
}
interface StylesProps extends LabelStylesProps {
  theme: BeautifyTheme;
}
export const getStyles = (props: StylesProps) => {
  const { theme, transform, size, weight } = props;

  const css = {
    label: {
      color: theme.colors.gray[7],
    },
  };

  const classes = {
    label: cx(
      `block mb-1.5`,
      getTransformValue({ transform }),
      getTextSizeValue({ size }),
      getWeightValue({ weight })
    ),
    required: ``,
  };
  return { classes, css };
};

export const useStyles = (props: LabelStylesProps) => {
  const { themeOverride, transform, size, weight, isInvalid } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ theme, transform, size, weight, isInvalid }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeOverride, transform, size, weight, isInvalid]
  );
};

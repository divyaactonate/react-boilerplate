import { keyframes } from '@emotion/react';
import { getBorderWidthValue } from '@library/theme';
import cn from 'clsx';
import { useMemo } from 'react';

interface SpinnerStylesProps {
  thickness?: string;
  size: number;
  speed?: string;
  color?: string;
  emptyColor?: string;
}
const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const getStyles = (props: SpinnerStylesProps) => {
  const { thickness, emptyColor, speed, size, color } = props;
  const common = `block border-solid rounded-full`;
  const css = {
    borderBottomColor: emptyColor,
    borderLeftColor: emptyColor,
    animation: `${spin} ${speed} linear infinite`,
  };
  const borderWidth = getBorderWidthValue({ thickness });
  const sizes = `w-${size} h-${size} `;
  const spinnerColor = cn(
    color === 'current'
      ? 'border-current'
      : color === 'white'
      ? 'border-white'
      : color === 'black'
      ? 'border-black'
      : `border-${color}-600`
  );
  const spinner = cn(common, sizes, spinnerColor, borderWidth);
  const classes = {
    spinner,
    css,
  };
  return classes;
};
export const useStyles = (props: SpinnerStylesProps) => {
  const { thickness, emptyColor, speed, size, color } = props;
  return useMemo(
    () => getStyles({ thickness, emptyColor, speed, size, color }),
    [thickness, emptyColor, speed, size, color]
  );
};

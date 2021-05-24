import { BeautifyPadding, BeautifySize, getPaddingValue, getSizeValue } from '@library/theme';
import { useMemo } from 'react';
import cn from 'clsx';

interface ContainerStylesProps {
  fluid: boolean;
  colorScheme: string;
  size: BeautifySize;
  padding: BeautifyPadding;
}

export const sizes = {
  xs: 'w-2/12',
  sm: 'w-4/12',
  md: 'w-6/12',
  lg: 'w-8/12',
  xl: 'w-10/12',
};

export const getStyles = (props: ContainerStylesProps) => {
  const { fluid, size, padding, colorScheme } = props;
  const common = `m-auto`;
  const maxWidth = fluid ? '100%' : getSizeValue({ size, sizes });
  const spacing = getPaddingValue({ padding });

  const colorStyles = cn(
    colorScheme === 'white'
      ? `bg-${colorScheme} text-black`
      : colorScheme === 'black'
      ? `bg-${colorScheme} text-white`
      : `bg-${colorScheme}-700 text-white`
  );

  const container = cn(common, maxWidth, spacing, colorStyles);
  const classes = {
    container,
  };
  return classes;
};
export const useStyles = (props: ContainerStylesProps) => {
  const { fluid, size, padding, colorScheme } = props;
  return useMemo(
    () => getStyles({ fluid, size, colorScheme, padding }),
    [fluid, size, padding, colorScheme]
  );
};

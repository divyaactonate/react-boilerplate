/** @jsxImportSource @emotion/react */

import {
  BeautifyCase,
  BeautifySize,
  getRadiusValue,
  getSizeValue,
  getStyleValue,
} from '@library/theme';
import cn from 'clsx';

interface ButtonStylesProps {
  colorScheme: string;
  size: BeautifySize;
  radius: BeautifySize;
  disabled: boolean;
  loadingText: boolean;
  isLoading: boolean;
  transform: BeautifyCase;
  // theme: MantineTheme;
  fullWidth: boolean;
  // variant: 'link' | 'filled' | 'outline' | 'light';
}

const paddings = {
  xs: 'px-4',
  sm: 'px-4',
  md: 'px-4',
  lg: 'px-6',
  xl: 'px-6',
};
const heights = {
  xs: 'h-6',
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12',
  xl: 'h-14',
};
const getWidthStyles = (fullWidth: boolean) => {
  if (fullWidth) return 'block w-full';
  else return 'inline-block w-auto';
};

export const fetchStyles = (props: ButtonStylesProps) => {
  const { colorScheme, disabled, isLoading, fullWidth, radius, size, transform, loadingText } =
    props;
  const iconStyle = `flex items center`;
  const leftIcon = ``;
  const rightIcon = ``;
  const inner = `flex items-center space-x-2 justify-center h-full`;
  const label = `block whitespace-nowrap overflow-hidden overflow-ellipsis`;
  const disabledClass = `opacity-50 cursor-not-allowed`;
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const common = cn(
    `cursor-pointer ${transform}`,
    `box-border no-underline appearance-none`,
    `transition ease-in-out duration-150`,
    `focus:outline-none`
  );

  const spinner = cn(
    `flex items-center text-md leadin-normal`,
    loadingText ? 'relative m-2' : 'absolute m-0'
  );
  // const widhtSize = useMemo(() => getWidthStyles(fullWidth), [fullWidth]);
  // const fontSize = useMemo(() => getSizeValue({ size }), [size]);
  // const borderRadius = useMemo(() => getRadiusValue({ radius }), [radius]);
  // const padding = useMemo(() => getStyleValue(paddings, size), [size]);
  // const height = useMemo(() => getStyleValue(heights, size), [size]);

  const widhtSize = getWidthStyles(fullWidth);
  const fontSize = getSizeValue({ size });
  const borderRadius = getRadiusValue({ radius });
  const padding = getStyleValue(paddings, size);
  const height = getStyleValue(heights, size);

  const link = cn(
    isLoading ? 'cursor-not-allowed' : disabled ? disabledClass : 'hover:underline',
    `text-${colorScheme}-500`
  );
  const filled = cn(
    isLoading ? 'cursor-not-allowed' : disabled ? disabledClass : `hover:bg-${colorScheme}-600`,
    colorScheme === 'white'
      ? `bg-${colorScheme} text-black`
      : colorScheme === 'black'
      ? `bg-${colorScheme} text-white`
      : `bg-${colorScheme}-500 text-white`,
    ` shadow-sm`
  );

  const outline = cn(
    isLoading
      ? 'cursor-not-allowed'
      : disabled
      ? disabledClass
      : `hover:border-${colorScheme}-700 border hover:font-bold hover:text-${colorScheme}-700`,
    ['white', 'black'].includes(colorScheme) ? `border-gray-500` : `border-${colorScheme}-500`,
    `text-${colorScheme}-600`,
    ` shadow-sm`,
    `focus:ring-2 focus:ring-${colorScheme}-500 focus:ring-offset-2`
  );
  const light = cn(
    isLoading ? 'cursor-not-allowed' : disabled ? disabledClass : `hover:bg-${colorScheme}-200`,
    colorScheme === 'white'
      ? `bg-coolGray-100 text-black`
      : colorScheme === 'black'
      ? `bg-trueGray-300 text-black`
      : `bg-${colorScheme}-100 text-${colorScheme}-600`,
    `shadow-sm`,
    `focus:ring-2 focus:ring-${colorScheme}-500 focus:ring-offset-2`
  );

  const button = cn(common, padding, height, widhtSize, fontSize, disabledStyles, borderRadius);

  const classes = {
    link,
    filled,
    outline,
    light,
    iconStyle,
    leftIcon,
    rightIcon,
    inner,
    label,
    button,
    spinner,
  };
  return classes;
};
// const getColorStyles = (variant: string, colorScheme: string) => {
//   switch (variant) {
//     case 'link':
//       return ` text-${colorScheme}-500 hover:underline
//       focus:outline-none
//       transition ease-in-out duration-150`;
//     case 'filled':
//       return ` bg-${colorScheme}-500 text-white hover:bg-${colorScheme}-600
//       focus:outline-none shadow-sm
//       transition ease-in-out duration-150`;
//     case 'outline':
//       return ` border border-${colorScheme}-500 text-${colorScheme}-600 hover:border-${colorScheme}-600
//       focus:outline-none focus:ring-2 focus:ring-${colorScheme}-500 focus:ring-offset-2
//       transition ease-in-out duration-150`;
//     case 'light':
//       return ` bg-${colorScheme}-100 text-${colorScheme}-600 hover:bg-${colorScheme}-200
//       focus:outline-none focus:ring-2 focus:ring-${colorScheme}-500 focus:ring-offset-2
//       transition ease-in-out duration-150`;
//     default:
//       return ` bg-${colorScheme}-500 text-white hover:bg-${colorScheme}-600
//       focus:outline-none
//       transition ease-in-out duration-150`;
//   }
// };

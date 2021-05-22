/** @jsxImportSource @emotion/react */

import { ActonateSize, getRadiusValue, getSizeValue, getStyleValue } from '@library/theme';
import cn from 'clsx';

interface ButtonStylesProps {
  color: string;
  size: ActonateSize;
  radius: ActonateSize;
  disabled: boolean;
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
  console.log('width');

  if (fullWidth) return 'block w-full';
  else return 'inline-block w-auto';
};

export const fetchStyles = (props: ButtonStylesProps) => {
  const { color, disabled, fullWidth, radius, size } = props;
  const iconStyle = `flex items center`;
  const leftIcon = ``;
  const rightIcon = ``;
  const inner = `flex items-center space-x-2 justify-center h-full`;
  const label = `block whitespace-nowrap overflow-hidden overflow-ellipsis`;
  const disabledClass = `opacity-50 cursor-not-allowed`;
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const common = cn(
    `cursor-pointer`,
    `box-border no-underline appearance-none`,
    `transition ease-in-out duration-150`,
    `focus:outline-none`
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

  const link = cn(disabled ? disabledClass : 'hover:underline', `text-${color}-500`);
  const filled = cn(
    disabled ? disabledClass : `hover:bg-${color}-600`,
    color === 'white'
      ? `bg-${color} text-black`
      : color === 'black'
      ? `bg-${color} text-white`
      : `bg-${color}-500 text-white`,
    ` shadow-sm`
  );

  const outline = cn(
    disabled ? disabledClass : `hover:border-${color}-600 border`,
    ['white', 'black'].includes(color) ? `border-gray-500` : `border-${color}-500`,
    `text-${color}-600`,
    ` shadow-sm`,
    `focus:ring-2 focus:ring-${color}-500 focus:ring-offset-2`
  );
  const light = cn(
    disabled ? disabledClass : `hover:bg-${color}-200`,
    color === 'white'
      ? `bg-coolGray-100 text-black`
      : color === 'black'
      ? `bg-trueGray-300 text-black`
      : `bg-${color}-100 text-${color}-600`,
    `shadow-sm`,
    `focus:ring-2 focus:ring-${color}-500 focus:ring-offset-2`
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
  };
  return classes;
};
// const getColorStyles = (variant: string, color: string) => {
//   switch (variant) {
//     case 'link':
//       return ` text-${color}-500 hover:underline
//       focus:outline-none
//       transition ease-in-out duration-150`;
//     case 'filled':
//       return ` bg-${color}-500 text-white hover:bg-${color}-600
//       focus:outline-none shadow-sm
//       transition ease-in-out duration-150`;
//     case 'outline':
//       return ` border border-${color}-500 text-${color}-600 hover:border-${color}-600
//       focus:outline-none focus:ring-2 focus:ring-${color}-500 focus:ring-offset-2
//       transition ease-in-out duration-150`;
//     case 'light':
//       return ` bg-${color}-100 text-${color}-600 hover:bg-${color}-200
//       focus:outline-none focus:ring-2 focus:ring-${color}-500 focus:ring-offset-2
//       transition ease-in-out duration-150`;
//     default:
//       return ` bg-${color}-500 text-white hover:bg-${color}-600
//       focus:outline-none
//       transition ease-in-out duration-150`;
//   }
// };

/** @jsxImportSource @emotion/react */

import { ActonateSize } from '@library/theme';
import cn from 'clsx';

interface ButtonStylesProps {
  color: string;
  size: ActonateSize;
  radius: ActonateSize;
  disabled: boolean;
  // theme: MantineTheme;
  fullWidth: boolean;
  variant: 'link' | 'filled' | 'outline' | 'light';
}

const sizes = {
  xs: 'text-xs px-4 h-6',
  sm: 'text-sm px-4 h-8',
  md: 'text-base px-4 h-10',
  lg: 'text-lg px-6 h-12',
  xl: 'text-xl px-6 h-14',
};
const radius = {
  xs: 'rounded-md',
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  xl: 'rounded-full',
};
const getWidthStyles = (fullWidth: boolean) => {
  if (fullWidth) return 'block w-full';
  else return 'inline-block w-auto';
};
const getFontSize = (font: string) => {
  return sizes[font] ?? sizes.md;
};
const getborderRadius = (rad: string) => {
  return radius[rad] ?? sizes.md;
};
export const useStyles = (props: ButtonStylesProps) => {
  const { color, disabled, fullWidth, radius, size } = props;
  const iconStyle = `flex items center`;
  const leftIcon = ``;
  const rightIcon = ``;
  const inner = `flex items-center space-x-2 justify-center h-full `;
  const label = `block whitespace-nowrap overflow-hidden overflow-ellipsis`;
  const disabledClass = `opacity-50 cursor-not-allowed`;
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const common = cn(
    `cursor-pointer`,
    `box-border no-underline appearance-none`,
    `transition ease-in-out duration-150`,
    `focus:outline-none`
  );
  const widhtSize = getWidthStyles(fullWidth);
  const fontSize = getFontSize(size);
  const borderRadius = getborderRadius(radius);

  const link = cn(disabled ? disabledClass : 'hover:underline', `text-${color}-500`);
  const filled = cn(
    disabled ? disabledClass : `hover:bg-${color}-600`,
    `bg-${color}-500 text-white`,
    ` shadow-sm`
  );
  const outline = cn(
    disabled ? disabledClass : `hover:border-${color}-600`,
    `border border-${color}-500 text-${color}-600`,
    ` shadow-sm`,
    `focus:ring-2 focus:ring-${color}-500 focus:ring-offset-2`
  );
  const light = cn(
    disabled ? disabledClass : `hover:bg-${color}-200`,
    `bg-${color}-100 text-${color}-600`,
    ` shadow-sm`,
    `focus:ring-2 focus:ring-${color}-500 focus:ring-offset-2`
  );

  const shared = cn(common, widhtSize, fontSize, disabledStyles, borderRadius);
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
    shared,
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

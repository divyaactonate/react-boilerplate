import { BeautifySize } from '..';

export const shadows: Record<BeautifySize | string, string> = {
  none: 'shadow-none',
  xs: 'shadow-sm',
  sm: 'shadow',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
  inner: 'shadow-inner',
};

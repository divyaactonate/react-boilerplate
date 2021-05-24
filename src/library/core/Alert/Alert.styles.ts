import { useMemo } from 'react';
import cn from 'clsx';

interface AlertStylesProps {
  colorScheme: string;
  isTitle: React.ReactNode;
  variant: 'subtle' | 'solid' | 'leftAccent' | 'topAccent';
}

export const getStyles = (props: AlertStylesProps) => {
  const { colorScheme, isTitle, variant } = props;
  const iconClass = cn(
    variant === 'solid' ? 'text-white' : `text-${colorScheme}-600`,
    isTitle ? 'w-20 h-20' : 'w-10'
  );
  const title = cn(
    `box m-0 mb-1 font-bold text-xl overflow-ellipsis overflow-hidden`,
    colorScheme === 'white' || variant === 'solid'
      ? 'text-white'
      : colorScheme === 'black'
      ? 'text-black'
      : `text-${colorScheme}-600`
  );

  const body = cn(
    variant === 'solid' ? 'text-white' : `text-${colorScheme}-500`,
    `leading-normal overflow-ellipsis overflow-hidden text-md`,
    `font-normal `
  );
  const contentWrapper = `ml-4`;
  const alert = cn(`alert flex flex-row items-center`, `p-5 rounded`);

  const subtle = `bg-${colorScheme}-100`;
  const solid = `bg-${colorScheme}-500`;
  const leftAccent = `border-l-8 text-white border-${colorScheme}-500  bg-${colorScheme}-100`;
  const topAccent = `border-t-8 border-${colorScheme}-500  bg-${colorScheme}-100`;

  const classes = {
    title,
    contentWrapper,
    body,
    iconClass,
    alert,
    subtle,
    solid,
    topAccent,
    leftAccent,
  };
  return classes;
};
export const useStyles = (props: AlertStylesProps) => {
  const { colorScheme, isTitle, variant } = props;
  return useMemo(
    () => getStyles({ colorScheme, isTitle, variant }),
    [colorScheme, isTitle, variant]
  );
};

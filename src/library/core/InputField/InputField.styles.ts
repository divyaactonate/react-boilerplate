import cn from 'clsx';
import { useMemo } from 'react';
import { BeautifyTheme, BeautifyNumberSize } from '@library/theme';

interface InputFieldStylesProps {
  theme?: BeautifyTheme;
  radius: BeautifyNumberSize;
}

export const getStyles = (props: InputFieldStylesProps) => {
  const {} = props;
  const common = `relative flex flex-wrap items-stretch mb-3`;

  const withIcon = cn(`pl-3`);

  const input = cn(
    `leading-3 appearance-none resize-none box-border text-sm w-full h-10 block bg-white-600 ` +
      `disabled:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-60 ` +
      `placeholder-opacity-100 placeholder-black-100 ` +
      `border border-grey rounded-md p-5 hover:border-blue-500 md:focus:border-blue-700 focus:outline-none focus:ring ` +
      `text-left text-blue-700 pl-10`
  );

  const icon = cn(
    `z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3`
  );
  const invalid = cn(`placeholder-opacity-100 placeholder-black-100 `);

  const unstyledVariant = cn(`text-blue-700 bg-trsansparent border-0 outline-none h-10`);

  const filledVariant = cn(
    `h-10 p-5 rounded-md border-transparent bg-grey-300 text-black-500 focus:outline-none focus:border-grey placeholder-black-100`
  );

  const defaultVariant = cn(
    `leading-3 appearance-none resize-none box-border text-sm block  bg-white-600 border border-transparent rounded-md p-0`
  );

  const inputWrapper = cn(`relative box-border rounded-sm`);

  const rightPanel = cn(
    `z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 top-0 pr-3 py-3`
  );

  const rightSection = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const inputfield = cn(common);

  const classes = {
    inputfield,
    withIcon,
    inputWrapper,
    defaultVariant,
    filledVariant,
    unstyledVariant,
    input,
    rightSection,
    icon,
    invalid,
    rightPanel,
  };
  return classes;
};

export const useStyles = (props: InputFieldStylesProps) => {
  const { theme, radius } = props;
  return useMemo(() => getStyles({ theme, radius }), [theme, radius]);
};

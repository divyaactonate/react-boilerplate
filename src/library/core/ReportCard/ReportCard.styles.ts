import cx from 'clsx';
import { useMemo } from 'react';
import { BeautifyTheme, DefaultStyleProps, useBeautifyTheme } from '@library/theme';

interface CardStylesProps extends DefaultStyleProps {
  size?: string;
  checked: boolean;
}
interface StylesProps extends CardStylesProps {
  theme: BeautifyTheme;
}
export const getStyles = (props: StylesProps) => {
  const { theme, checked } = props;

  const css = {
    card: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },
    leftContentText: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.white,
    },
  };

  const classes = {
    wrapper: cx(
      `w-full h-full flex flex-row rounded-lg`,
      checked ? 'border-blue-300' : 'hover:border-blue-300 border-gray-100',
      `overflow-hidden border-2 shadow `
    ),
    leftWrapper: `w-2/6 border-r border-gray-200`,
    checkBoxClass: `w-5`,
    leftContent: `flex px-4 items-center h-full justify-center bg-blue-900`,
    leftContentText: `px-4 break-words text-sm text-center capitalize`,
    rightWrapper: `w-4/6 flex xs:flex-row flex-col justify-between p-4`,
    rightTopWrapper: `flex flex-col`,
    title: `text-black truncate capitalize font-semibold text-sm mb-2 leading-none`,
    subTitle: `text-gray-500 font-normal text-xs mb-2 leading-none`,
    metaData: `flex items-center flex-row pt-0.5 space-x-1`,
    rightBottompWrapper: `flex items-center justify-between flex-row`,
    rightBottomLeftSection: `flex items-center text-xs flex-row space-x-4`,
    badgeClass: `p-2`,
    rightBottomRightSection: `flex flex-row space-x-1 text-gray-500`,
    iconClass: `w-4 text-gray-500`,
  };
  return { classes, css };
};

export const useStyles = (props: CardStylesProps) => {
  const { themeOverride, checked } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ theme, checked }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeOverride, checked]
  );
};

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
      borderLeftColor: theme.colors.yellow[8],
      borderLeftWidth: '6px',
      // borderTopWidth: '1px',
      // borderBottomWidth: '1px',
      // borderRightWidth: '1px',
      boxShadow: checked
        ? `0 0 0 1.2px ${theme.colors.blue[4]}`
        : `0 0 0 1px ${theme.colors.gray[3]}`,
      borderTopColor: checked ? theme.colors.blue[4] : theme.colors.gray[3],
      borderBottomColor: checked ? theme.colors.blue[4] : theme.colors.gray[3],
      borderRightColor: checked ? theme.colors.blue[4] : theme.colors.gray[3],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      '&:hover': {
        boxShadow: !checked && `0 0 0 1.2px ${theme.colors.blue[4]}`,

        // borderTopWidth: '1.5px',
        // borderBottomWidth: '1.5px',
        // borderRightWidth: '1.5px',
        // borderTopColor: theme.colors.blue[4],
        // borderBottomColor: theme.colors.blue[4],
        // borderRightColor: theme.colors.blue[4],
      },
    },
    leftContentText: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.white,
    },
    leftContent: {
      backgroundColor: theme.colors.blue[9],
    },
  };

  const classes = {
    card: cx(`w-full h-full  rounded`, `overflow-hidden shadow `),
    wrapper: cx('flex flex-row'),
    leftWrapper: `w-2/6 border-r border-gray-200`,
    checkBoxClass: `w-8`,
    leftContent: `flex items-center h-full  justify-center`,
    leftContentText: `px-4 break-words text-sm text-center capitalize`,
    rightWrapper: `w-4/6 flex xs:flex-row flex-col justify-between pl-4 py-4 pr-1`,
    rightTopWrapper: `flex flex-col`,
    title: `text-black truncate capitalize font-medium text-sm mb-2 leading-none`,
    subTitle: `text-gray-500 font-normal text-xs mb-2 leading-none`,
    metaData: `flex items-center flex-row pt-0.5 space-x-1`,
    rightBottompWrapper: `flex items-center justify-between flex-row`,
    rightBottomLeftSection: `flex items-center text-xs flex-row space-x-4`,
    badgeClass: `p-2`,
    rightBottomRightSection: `flex flex-row items-center justify-between space-x-1 text-gray-500`,
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

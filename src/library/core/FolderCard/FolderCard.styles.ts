import cx from 'clsx';
import { useMemo } from 'react';
import { BeautifyTheme, DefaultStyleProps, useBeautifyTheme } from '@library/theme';

interface FolderCardStylesProps extends DefaultStyleProps {
  checked: boolean;
}
interface StylesProps extends FolderCardStylesProps {
  theme: BeautifyTheme;
}
export const getStyles = (props: StylesProps) => {
  const { theme, checked } = props;

  const css = {
    card: {
      // borderWidth: '1px',
      boxShadow: checked
        ? `0 0 0 1px ${theme.colors.blue[4]}`
        : `0 0 0 1px ${theme.colors.gray[3]}`,

      borderColor: checked ? theme.colors.blue[4] : theme.colors.gray[3],
      '&:hover': {
        // borderWidth: '1.5px',
        // margin: '-1.5px',
        boxShadow: !checked && `0 0 0 1px ${theme.colors.blue[4]}`,
        // borderColor: theme.colors.blue[4],
      },
    },
    foldercard: { theme },
  };

  const classes = {
    wrapper: `w-full box-border h-full rounded`,
    card: cx(
      `flex flex-col space-y-2 justify-between pl-2 pr-1 py-2 rounded-md`,
      `overflow-hidden`
    ),
    topWrapper: `flex space-x-3 items-center justify-between`,
    topLeftWrapper: `flex items-center truncate space-x-2`,
    topRightWrapper: `flex items-center justify-between space-x-2`,
    checkBoxClass: `w-5`,
    countClass: `text-gray-500 font-normal text-sm leading-tight`,
    titleClass: `text-gray-700 truncate capitalize font-normal text-base leading-tight`,
    bottomWrapper: `flex items-center justify-between flex-row`,
    bottomLeftWrapper: `flex items-center text-xs flex-row space-x-4`,
    bottomRightWrapper: `flex flex-row  items-center justify-between space-x-1 text-gray-500`,
    folderIconClass: `w-24 text-blue-500`,
    heartIconClass: `w-4 text-gray-500`,
    tagIconClass: `w-3.5 text-gray-500`,
    dotsIconClass: `w-3.5 text-gray-500`,
  };
  return { classes, css };
};

export const useStyles = (props: FolderCardStylesProps) => {
  const { themeOverride, checked } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ theme, checked }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme, checked]
  );
};

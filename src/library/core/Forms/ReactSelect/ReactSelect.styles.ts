import cx from 'clsx';
import { useMemo } from 'react';
import {
  BeautifySize,
  BeautifyTheme,
  DefaultStyleProps,
  getRadiusValue,
  useBeautifyTheme,
} from '@library/theme';

interface ReactSelectStylesProps extends DefaultStyleProps {
  radius: BeautifySize;
  size: BeautifySize;
}
interface StylesProps extends ReactSelectStylesProps {
  theme: BeautifyTheme;
}
const sizes = {
  xs: 'h-6',
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12',
  xl: 'h-14',
};
export const getStyles = (props: StylesProps) => {
  const { theme, radius, size } = props;
  const colourStyles = {
    option: (styles: any) => {
      return {
        ...styles,
        // backgroundColor: isDisabled ? null : isSelected ? '#C6F6D5' : isFocused ? '#FFF' : null,
        // color: '#4A5568',
        fontSize: '13px',
        // ':active': {
        //   ...styles[':active'],
        //   color: '#4A5568',
        //   backgroundColor: !isDisabled && (isSelected ? '#C6F6D5' : '#F7FAFC'),
        // },
        // ':hover': {
        //   ...styles[':active'],
        //   color: '#4A5568',
        //   backgroundColor: !isDisabled && (isSelected ? '#C6F6D5' : '#F0FFF4'),
        // },
        // ':focus': {
        //   ...styles[':active'],
        //   color: '#4A5568',
        //   backgroundColor: !isDisabled && (isSelected ? '#C6F6D5' : '#F7FAFC'),
        // },
      };
    },
    control: (base: any, state: any) => ({
      ...base,
      // borderColor: theme.colors.gray[5],
      // borderWidth: '1.5px',
      borderRadius: '0.5rem' /* 8px */,
      color: theme.colorScheme === 'dark' ? theme.colors.white : theme.colors.gray[7],
      fontSize: '14px',
      '&:focus': {
        outline: 'none',
        // borderWidth: '0.3px',
        // borderColor: theme.colors.blue[5],
        // boxShadow: `0 0 0 0.7px ${theme.colors.blue[4]}`,
      },
      '&:disabled': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
        opacity: 0.6,
        cursor: 'not-allowed',
      },
      boxShadow: state.isFocused && `0 0 0 0.4px ${theme.colors.blue[4]}`,
      borderColor: state.isFocused ? theme.colors.blue[5] : theme.colors.gray[5],
      // // This line disable the blue border
      // boxShadow: state.isFocused
      //   ? `0 0 0 0.7px ${theme.colors.blue[4]}`
      //   : `0 0 0 0.7px ${theme.colors.gray[4]}`,
      // '&:hover': {
      //   borderColor: '#68D391',
      // },
      // '&:active': {
      //   borderColor: '#68D391',
      // },
    }),
    indicatorSeparator: () => ({ display: 'none' }),
  };
  const css = {
    reactselect: {},
  };

  const classes = {
    wrapper: cx(sizes[size]),
    reactselect: cx(getRadiusValue({ radius }), 'mt-1.5'),
  };
  return { classes, css, colourStyles };
};

export const useStyles = (props: ReactSelectStylesProps) => {
  const { themeOverride, radius, size } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ theme, radius, size }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeOverride, radius, size]
  );
};

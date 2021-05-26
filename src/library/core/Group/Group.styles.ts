import {
  BeautifyNumberSize,
  BeautifyTheme,
  DefaultStyleProps,
  useBeautifyTheme,
} from '@library/theme';
import cx from 'clsx';
import { useMemo } from 'react';

export type GroupPosition = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

interface GroupStylesProps extends DefaultStyleProps {
  position: GroupPosition;
  wrap: 'wrap' | 'wrap-reverse' | 'nowrap';
  grow: boolean;
  spacing: BeautifyNumberSize;
  direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}
interface StylesProps extends GroupStylesProps {
  theme: BeautifyTheme;
}
const ALIGNS = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  baseline: 'items-baseline',
  stretch: 'items-stretch',
};
const JUSTIFY = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};
const FLEX_DIRECTIONS = {
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
  column: 'flex-col',
  'column-reverse': 'flex-col-reverse',
};
const FLEX_WRAPS = {
  wrap: 'flex-wrap',
  'wrap-reverse': 'flex-wrap-reverse',
  nowrap: 'flex-nowrap',
};
const getStyles = (props: StylesProps) => {
  const { spacing, position, wrap, direction, grow } = props;
  const classes = {
    group: cx(
      `flex`,
      FLEX_DIRECTIONS[direction],
      direction === 'row' ? ALIGNS.center : grow ? 'stretch' : JUSTIFY[position],
      direction === 'row' && JUSTIFY[position],
      FLEX_WRAPS[wrap],
      direction === 'row' ? `space-x-${spacing}` : `space-y-${spacing}`
    ),
    child: cx(grow ? 'flex-grow' : 'flex-grow-0'),
  };
  const css = {};
  return { classes, css };
};

export const useStyles = (props: GroupStylesProps) => {
  const { spacing, position, wrap, direction, grow, themeOverride } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ spacing, position, wrap, direction, grow, theme }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [spacing, position, wrap, direction, grow, themeOverride]
  );
};

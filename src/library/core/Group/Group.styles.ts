import { BeautifyNumberSize } from '@library/theme';
import cn from 'clsx';
import { useMemo } from 'react';

export type GroupPosition = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

interface GroupStylesProps {
  position: GroupPosition;
  wrap: 'wrap' | 'wrap-reverse' | 'nowrap';
  grow: boolean;
  spacing: BeautifyNumberSize;
  direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';
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
const getStyles = (props: GroupStylesProps) => {
  const { spacing, position, wrap, direction, grow } = props;
  const common = `flex`;
  const flexDirection = FLEX_DIRECTIONS[direction];
  const alignItems = cn(direction === 'row' ? ALIGNS.center : grow ? 'stretch' : JUSTIFY[position]);
  const justifyContent = direction === 'row' && JUSTIFY[position];
  const flexWrap = FLEX_WRAPS[wrap];
  const space = direction === 'row' ? `space-x-${spacing}` : `space-y-${spacing}`;
  const group = cn(common, flexDirection, space, alignItems, justifyContent, flexWrap);
  const child = cn(
    grow ? 'flex-grow' : 'flex-grow-0'
    // direction === 'row' ? `space-x-${spacing}` : `space-y-${spacing}`
  );
  const classes = {
    group,
    child,
  };
  return classes;
};

export const useStyles = (props: GroupStylesProps) => {
  const { spacing, position, wrap, direction, grow } = props;
  return useMemo(
    () => getStyles({ spacing, position, wrap, direction, grow }),
    [spacing, position, wrap, direction, grow]
  );
};

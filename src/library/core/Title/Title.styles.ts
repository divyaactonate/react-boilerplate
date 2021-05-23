import { BeautifyHeading, getHeadingValue } from '@library/theme';
import cn from 'clsx';

interface TitleStylesProps {
  order: BeautifyHeading;
  colorScheme: string;
}

export const fetchStyles = (props: TitleStylesProps) => {
  const { order, colorScheme } = props;
  const common = ``;
  const heading = getHeadingValue({ heading: order });
  const colorStyles = cn(
    colorScheme === 'white'
      ? `text-white`
      : colorScheme === 'black'
      ? `text-black`
      : `text-${colorScheme}-700`
  );
  const title = cn(common, heading, colorStyles);

  const classes = {
    title,
  };
  return classes;
};

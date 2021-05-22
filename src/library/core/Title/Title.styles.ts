import { BeautifyHeading, getHeadingValue } from '@library/theme';
import cn from 'clsx';

interface TitleStylesProps {
  order: BeautifyHeading;
  color: string;
}

export const fetchStyles = (props: TitleStylesProps) => {
  const { order, color } = props;
  const common = ``;
  const heading = getHeadingValue({ heading: order });
  const colorStyles = cn(
    color === 'white' ? `text-white` : color === 'black' ? `text-black` : `text-${color}-700`
  );
  const title = cn(common, heading, colorStyles);

  const classes = {
    title,
  };
  return classes;
};

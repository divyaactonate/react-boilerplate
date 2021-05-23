import {
  BeautifyPadding,
  BeautifyShadow,
  BeautifySize,
  getPaddingValue,
  getRadiusValue,
  getShadowValue,
} from '@library/theme';
import cn from 'clsx';

interface PaperStylesProps {
  colorScheme: string;
  padding: BeautifyPadding;
  shadow: BeautifyShadow;
  radius: BeautifySize;
}

export const fetchStyles = (props: PaperStylesProps) => {
  const { shadow, radius, colorScheme, padding } = props;
  const common = `box-border`;
  const boxShadow = getShadowValue({ shadow });
  const borderRadius = getRadiusValue({ radius });
  const paddingValue = getPaddingValue({ padding });
  const colorStyles = cn(
    colorScheme === 'white'
      ? `bg-${colorScheme} text-black`
      : colorScheme === 'black'
      ? `bg-${colorScheme} text-white`
      : `bg-${colorScheme}-700 text-white`
  );
  console.log(colorStyles);

  const paper = cn(common, boxShadow, colorStyles, borderRadius, paddingValue);

  const classes = {
    paper,
  };
  return classes;
};

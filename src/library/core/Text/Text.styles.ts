import {
  BeautifySize,
  getSizeValue,
  BeautifyCase,
  BeautifyTextAlignment,
  BeautifyWeight,
  getAlignValue,
  getWeightValue,
  getTransformValue,
} from '@library/theme';
import cn from 'clsx';

export type TextVariant = 'text' | 'link';

interface TextStylesProps {
  // theme: MantineTheme;
  color: string;
  variant: TextVariant;
  size: BeautifySize;
  weight?: BeautifyWeight;
  transform?: BeautifyCase;
  align?: BeautifyTextAlignment;
}

export const fetchStyles = (props: TextStylesProps) => {
  const { size, color, variant, align, transform, weight } = props;
  const common = `no-underline shadow-sm`;
  const textAlign = getAlignValue({ align });
  const fontWeight = getWeightValue({ weight });
  const textTransform = getTransformValue({ transform });

  const fontSize = getSizeValue({ size });
  const textDecoration = variant === 'link' ? 'hover-underline' : 'hover-none';
  const colorStyles = cn(
    color === 'white' ? `text-white` : color === 'black' ? `text-black` : `text-${color}-600`
  );

  const text = cn(
    common,
    fontSize,
    textAlign,
    fontWeight,
    textTransform,
    colorStyles,
    textDecoration
  );

  const classes = {
    text,
  };
  return classes;
};

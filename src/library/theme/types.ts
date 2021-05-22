import type { CSSProperties } from 'react';
import type { DeepPartial, Tuple } from '@library/types';

export type BeautifyWeight =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black';
export type BeautifyLineHeight =
  | 'none'
  | 'tight'
  | 'snug'
  | 'normal'
  | 'relaxed'
  | 'loose'
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10;
export type BeautifySize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type BeautifyHeading = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;

export type BeautifyTextSize =
  | BeautifySize
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';
export type BeautifyCase = 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case';
export type BeautifyNumberSize = BeautifySize | number;
export type BeautifyShadow = 'none' | BeautifySize | '2xl' | 'inner';
export type BeautifyTextAlignment = 'left' | 'center' | 'right' | 'justify';

export type BeautifyPadding =
  | 'none'
  | BeautifySize
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';
type HeadingStyle = {
  readonly fontSize: CSSProperties['fontSize'];
  readonly lineHeight: CSSProperties['lineHeight'];
};

export type BeautifySizes = Record<BeautifySize, number>;

export interface BeautifyTheme {
  readonly colorScheme: 'light' | 'dark';
  readonly white: string;
  readonly black: string;
  readonly colors: Record<string, Tuple<string, 10>>;
  readonly fontFamily: CSSProperties['fontFamily'];
  readonly lineHeight: CSSProperties['lineHeight'];
  readonly transitionTimingFunction: CSSProperties['transitionTimingFunction'];
  readonly fontFamilyMonospace: CSSProperties['fontFamily'];
  readonly primaryColor: string;

  readonly fontSizes: BeautifySizes;
  readonly radius: BeautifySizes;
  readonly spacing: BeautifySizes;
  readonly shadows: Record<BeautifySize, string>;

  readonly headings: {
    readonly fontFamily: CSSProperties['fontFamily'];
    readonly fontWeight: CSSProperties['fontWeight'];
    readonly sizes: {
      readonly h1: HeadingStyle;
      readonly h2: HeadingStyle;
      readonly h3: HeadingStyle;
      readonly h4: HeadingStyle;
      readonly h5: HeadingStyle;
      readonly h6: HeadingStyle;
    };
  };
}

export interface InternalBeautifyTheme extends BeautifyTheme {
  __beautify_theme: boolean;
}

export type BeautifyThemeOverride = DeepPartial<BeautifyTheme>;

export interface DefaultProps {
  className?: string;
  style?: CSSProperties;
  readonly themeOverride?: BeautifyThemeOverride;
}

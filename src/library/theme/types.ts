import type { Tuple } from '@library/types';
import type { CSSProperties } from 'react';

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

export interface BeautifyTheme {
  readonly colorScheme: 'light' | 'dark';
  readonly white: string;
  readonly black: string;
  readonly colors: Record<string, Tuple<string, 10>>;
  readonly fontFamily: CSSProperties['fontFamily'];
  readonly transitionTimingFunction: CSSProperties['transitionTimingFunction'];
  readonly fontFamilyMonospace: CSSProperties['fontFamily'];
  readonly primaryColor: string;
  readonly weights: Record<BeautifyWeight, string>;
  readonly lineHeights: Record<BeautifyLineHeight, string>;
  readonly fontSizes: Record<BeautifySize, string>;
  readonly radius: Record<BeautifySize, string>;
  readonly paddings: Record<BeautifyPadding, string>;

  // readonly spacing: BeautifySizes;
  readonly shadows: Record<BeautifySize, string>;

  readonly headings: Record<BeautifyHeading, string>;
}

export interface InternalBeautifyTheme extends BeautifyTheme {
  __beautify_theme: boolean;
}

export type BeautifyThemeOverride = Partial<BeautifyTheme>;

export interface DefaultProps {
  className?: string;
  style?: CSSProperties;
  readonly themeOverride?: BeautifyThemeOverride;
}
export interface DefaultStyleProps {
  readonly themeOverride?: BeautifyThemeOverride;
}

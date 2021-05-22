import type { CSSProperties } from 'react';
import type { DeepPartial, Tuple } from '@library/types';

export type ActonateWeight =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black';
export type ActonateLineHeight =
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
export type ActonateSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ActonateTextSize =
  | ActonateSize
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';
export type ActonateCase = 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case';
export type ActonateNumberSize = ActonateSize | number;
export type ActonateShadow = 'none' | ActonateSize | '2xl' | 'inner';
export type ActonateTextAlignment = 'left' | 'center' | 'right' | 'justify';

export type ActonatePadding =
  | 'none'
  | ActonateSize
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

export type ActonateSizes = Record<ActonateSize, number>;

export interface ActonateTheme {
  readonly colorScheme: 'light' | 'dark';
  readonly white: string;
  readonly black: string;
  readonly colors: Record<string, Tuple<string, 10>>;
  readonly fontFamily: CSSProperties['fontFamily'];
  readonly lineHeight: CSSProperties['lineHeight'];
  readonly transitionTimingFunction: CSSProperties['transitionTimingFunction'];
  readonly fontFamilyMonospace: CSSProperties['fontFamily'];
  readonly primaryColor: string;

  readonly fontSizes: ActonateSizes;
  readonly radius: ActonateSizes;
  readonly spacing: ActonateSizes;
  readonly shadows: Record<ActonateSize, string>;

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

export interface InternalActonateTheme extends ActonateTheme {
  __mantine_theme: boolean;
}

export type ActonateThemeOverride = DeepPartial<ActonateTheme>;

export interface DefaultProps {
  className?: string;
  style?: CSSProperties;
  readonly themeOverride?: ActonateThemeOverride;
}

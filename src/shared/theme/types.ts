import type { CSSProperties } from 'react';
import type { DeepPartial, Tuple } from '@shared/types';

export type ActonateSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ActonateNumberSize = ActonateSize | number;

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

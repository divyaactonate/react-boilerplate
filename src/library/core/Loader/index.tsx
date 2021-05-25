import { BeautifySize, tailwindColors, DefaultProps, getSizeValue } from '@library/theme';
import { ComponentPropsWithoutRef } from 'react';

export const LOADER_SIZES = {
  xs: 18,
  sm: 22,
  md: 36,
  lg: 44,
  xl: 58,
};

export interface LoaderProps extends DefaultProps, ComponentPropsWithoutRef<'svg'> {
  /** Defines width of loader */
  size?: BeautifySize;

  /** Loader colorScheme from theme */
  colorScheme?: string;
}

export function Loader({ size = 'md', colorScheme = 'blue', ...others }: LoaderProps) {
  return (
    <svg
      data-beautify-loader
      width={`${getSizeValue({ size, sizes: LOADER_SIZES })}px`}
      fill={tailwindColors[colorScheme]['500']}
      viewBox='0 0 135 140'
      xmlns='http://www.w3.org/2000/svg'
      role='presentation'
      {...others}
    >
      <rect y='10' width='15' height='120' rx='6'>
        <animate
          attributeName='height'
          begin='0.5s'
          dur='1s'
          values='120;110;100;90;80;70;60;50;40;140;120'
          calcMode='linear'
          repeatCount='indefinite'
        />
        <animate
          attributeName='y'
          begin='0.5s'
          dur='1s'
          values='10;15;20;25;30;35;40;45;50;0;10'
          calcMode='linear'
          repeatCount='indefinite'
        />
      </rect>
      <rect x='30' y='10' width='15' height='120' rx='6'>
        <animate
          attributeName='height'
          begin='0.25s'
          dur='1s'
          values='120;110;100;90;80;70;60;50;40;140;120'
          calcMode='linear'
          repeatCount='indefinite'
        />
        <animate
          attributeName='y'
          begin='0.25s'
          dur='1s'
          values='10;15;20;25;30;35;40;45;50;0;10'
          calcMode='linear'
          repeatCount='indefinite'
        />
      </rect>
      <rect x='60' width='15' height='140' rx='6'>
        <animate
          attributeName='height'
          begin='0s'
          dur='1s'
          values='120;110;100;90;80;70;60;50;40;140;120'
          calcMode='linear'
          repeatCount='indefinite'
        />
        <animate
          attributeName='y'
          begin='0s'
          dur='1s'
          values='10;15;20;25;30;35;40;45;50;0;10'
          calcMode='linear'
          repeatCount='indefinite'
        />
      </rect>
      <rect x='90' y='10' width='15' height='120' rx='6'>
        <animate
          attributeName='height'
          begin='0.25s'
          dur='1s'
          values='120;110;100;90;80;70;60;50;40;140;120'
          calcMode='linear'
          repeatCount='indefinite'
        />
        <animate
          attributeName='y'
          begin='0.25s'
          dur='1s'
          values='10;15;20;25;30;35;40;45;50;0;10'
          calcMode='linear'
          repeatCount='indefinite'
        />
      </rect>
      <rect x='120' y='10' width='15' height='120' rx='6'>
        <animate
          attributeName='height'
          begin='0.5s'
          dur='1s'
          values='120;110;100;90;80;70;60;50;40;140;120'
          calcMode='linear'
          repeatCount='indefinite'
        />
        <animate
          attributeName='y'
          begin='0.5s'
          dur='1s'
          values='10;15;20;25;30;35;40;45;50;0;10'
          calcMode='linear'
          repeatCount='indefinite'
        />
      </rect>
    </svg>
  );
}

Loader.displayName = '@beautify/core/Loader';

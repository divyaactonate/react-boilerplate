import { DefaultProps } from '@library/theme';
import { ComponentPassThrough } from '@library/types';
import React from 'react';
import cn from 'clsx';

export interface OverlayProps extends DefaultProps {
  /** Overlay opacity */
  opacity?: React.CSSProperties['opacity'];

  /** Overlay background-color */
  color?: React.CSSProperties['backgroundColor'];

  /** Overlay z-index */
  zIndex?: React.CSSProperties['zIndex'];
}

export function Overlay<T extends React.ElementType = 'div'>({
  className,
  opacity = 0.6,
  color = '#fff',
  zIndex = 1000,
  style,
  component: Element = 'div',
  ...others
}: ComponentPassThrough<T, OverlayProps>) {
  return (
    <Element
      className={(cn('absolute inset-0'), className)}
      style={{
        opacity,
        backgroundColor: color,
        zIndex,
        ...style,
      }}
      {...others}
    />
  );
}

Overlay.displayName = '@beautify/core/Overlay';

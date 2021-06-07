import { DefaultProps, useBeautifyTheme } from '@library/theme';
import cx from 'clsx';
import React, { ComponentPropsWithoutRef } from 'react';
import { Loader, LoaderProps } from '../Loader';
import { Overlay } from '../Overlay';
import { GroupTransition } from '../Transition';
import { useStyles } from './LoadingOverlay.styles';

export interface LoadingOverlayProps extends DefaultProps, ComponentPropsWithoutRef<'div'> {
  /** Provide custom loader */
  loader?: React.ReactNode;

  /** Loader component props */
  loaderProps?: LoaderProps;

  /** Sets overlay opacity */
  overlayOpacity?: number;

  /** Sets overlay color, defaults to theme.white in light theme and to theme.colors.dark[5] in dark theme */
  overlayColor?: string;

  /** Loading overlay z-index */
  zIndex?: number;

  /** If visible overlay will take 100% width and height of first parent with relative position and overlay all of its content */
  visible: boolean;

  /** Appear and disappear animation duration */
  transitionDuration?: number;
}

export function LoadingOverlay({
  className,
  visible,
  loaderProps = {},
  overlayOpacity = 0.75,
  overlayColor,
  zIndex = 1000,
  style,
  loader,
  themeOverride,
  ...others
}: LoadingOverlayProps) {
  const theme = useBeautifyTheme(themeOverride);
  const { classes } = useStyles({ theme });

  return (
    <GroupTransition show={visible}>
      <div
        className={cx(classes.loadingoverlay, className)}
        style={{ ...style, zIndex }}
        {...others}
      >
        {loader ? (
          <div style={{ zIndex: zIndex + 1 }}>{loader}</div>
        ) : (
          <Loader themeOverride={themeOverride} style={{ zIndex: zIndex + 1 }} {...loaderProps} />
        )}

        <Overlay
          opacity={overlayOpacity}
          zIndex={zIndex}
          color={
            overlayColor || (theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white)
          }
        />
      </div>
    </GroupTransition>
  );
}

LoadingOverlay.displayName = '@mantine/core/LoadingOverlay';

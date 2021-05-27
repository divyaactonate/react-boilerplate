/** @jsxImportSource @emotion/react */

import { XIcon as CloseIcon } from '@heroicons/react/solid';
import { useClickOutside, useScrollLock } from '@library/hooks';
import { BeautifyPadding, BeautifyShadow, BeautifySize, DefaultProps } from '@library/theme';
import cx from 'clsx';
import React from 'react';
import { ActionIcon } from '../ActionIcon';
import { GroupTransition } from '../Transition';
import { useStyles } from './Modal.styles';

export interface ModalProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Mounts modal if true */
  opened: boolean;

  /** Called when close button clicked and when escape key is pressed */
  onClose(): void;

  closeOnOverlayClick?: boolean;

  /** Modal title, displayed in header before close button */
  title?: React.ReactNode;

  /** Modal title, displayed in header before close button */
  shadow?: BeautifyShadow;

  /** Modal z-index property */
  zIndex?: number;

  /** Control vertical overflow behavior */
  overflow?: 'outside' | 'inside';

  /** Hides close button, modal still can be closed with escape key and by clicking outside */
  hideCloseButton?: boolean;

  /** Overlay below modal opacity, defaults to 0.75 in light theme and to 0.85 in dark theme */
  overlayOpacity?: number;

  /** Overlay below modal color, defaults to theme.black in light theme and to theme.colors.dark[9] in dark theme */
  overlayColor?: string;

  /** Modal body width */
  size?: BeautifySize | 'full';

  /** Modal body width */
  padding?: BeautifyPadding;

  /** Modal body width */
  radius?: BeautifySize;

  /** Duration in ms of modal transitions, set to 0 to disable all animations */
  transitionDuration?: number;

  /** Modal body transitionTimingFunction, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;

  /** Close button aria-label and title attributes */
  closeButtonLabel?: string;

  /** id base, used to generate ids to connect modal title and body with aria- attributes, defaults to random id */
  id?: string;
}

export function Modal({
  className,
  opened,
  themeOverride,
  title,
  onClose,
  children,
  hideCloseButton = false,
  overlayOpacity,
  size = 'md',
  shadow = 'lg',
  padding = 'sm',
  closeButtonLabel,
  overlayColor,
  closeOnOverlayClick = false,
  zIndex = 1000,
  radius = 'md',
  overflow = 'outside',
  ...others
}: ModalProps) {
  const { classes, css } = useStyles({
    size,
    radius,
    padding,
    overflow,
    shadow,
    overlayColor,
    themeOverride,
    overlayOpacity,
  });
  const clickOutsideRef = useClickOutside(closeOnOverlayClick ? onClose : () => ({}));
  useScrollLock(opened);
  // const focusTrapRef: any = useFocusTrap();

  return (
    <div className=''>
      {opened && <div css={css.overlay} className={cx(classes.overlay, className)} />}
      <GroupTransition {...classes.transitions} show={opened}>
        <div data-beautify-modal className={cx(classes.wrapper, className)} {...others}>
          <div
            data-mantine-modal-inner
            className={classes.inner}
            onKeyDownCapture={(event) => event.nativeEvent.code === 'Escape' && onClose()}
            style={{ zIndex: zIndex + 1 }}
            // ref={focusTrapRef}
          >
            <div
              css={css.modal}
              className={classes.modal}
              role='dialog'
              aria-modal
              ref={clickOutsideRef}
              tabIndex={-1}
            >
              {(title || !hideCloseButton) && (
                <div data-mantine-modal-header className={classes.header}>
                  <h1 css={css.title} data-mantine-modal-title className={classes.title}>
                    {title}
                  </h1>

                  {!hideCloseButton && (
                    <ActionIcon onClick={onClose} aria-label={closeButtonLabel}>
                      <CloseIcon className='w-10 p-2' />
                    </ActionIcon>
                  )}
                </div>
              )}

              <div data-beautify-modal-body css={css.body} className={classes.body}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </GroupTransition>
    </div>
  );
}

Modal.displayName = '@beautify/core/Modal';

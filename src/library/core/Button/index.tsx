import { BeautifySize } from '@library/theme';
import { BeautifyCase } from '@library/theme/types';
import { ComponentPassThrough } from '@library/types';
import cn from 'clsx';
import { ReactElement, useMemo } from 'react';
import { Spinner } from '../Spinner';
import { fetchStyles } from './Button.styles';

export interface ButtonProps {
  /**
   * If `true`, the button will show a spinner.
   * @type boolean
   * @default false
   */
  isLoading?: boolean;

  /**
   * The label to show in the button when `isLoading` is true
   * If no text is passed, it only shows the spinner
   */
  loadingText?: string;

  /**
   * Replace the spinner component when `isLoading` is set to `true`
   * @type React.ReactElement
   */
  spinner?: React.ReactElement;

  /**
   * It determines the placement of the spinner when isLoading is true
   * @default "start"
   */
  spinnerPlacement?: 'start' | 'end';

  /**
   * The size of the button
   * @type BeautifySize
   * @default 'md'
   */
  size?: BeautifySize;

  /**
   * Button colorScheme from theme
   * @type string
   * @default 'blue'
   */
  colorScheme?: string;

  /**
   * If added, the button will show an icon before the button's label.
   * @type React.ReactElement
   */
  leftIcon?: ReactElement;

  /**
   * If added, the button will show an icon after the button's label.
   * @type React.ReactElement
   */
  rightIcon?: ReactElement;

  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth?: boolean;

  /**
   * Button border-radius from theme
   * @type BeautifySize
   * @default 'sm'
   */
  radius?: BeautifySize;

  /**
   * Controls button appearance
   * @type 'link' | 'filled' | 'outline' | 'light'
   * @default 'filled'
   */
  variant?: 'link' | 'filled' | 'outline' | 'light';

  /**
   * Text transform variants
   * @type BeautifyCase
   */
  transform?: BeautifyCase;
}

export const Button = <
  T extends React.ElementType = 'button',
  U extends HTMLElement = HTMLButtonElement
>({
  className,
  colorScheme = 'blue',
  size = 'md',
  disabled = false,
  children,
  leftIcon,
  rightIcon,
  fullWidth = false,
  isLoading = false,
  loadingText,
  variant = 'filled',
  transform,
  spinner,
  radius = 'sm',
  spinnerPlacement = 'start',
  component: Element = 'button',
  elementRef,
  ...others
}: ComponentPassThrough<T, ButtonProps> & {
  /** Get root element ref */
  elementRef?: React.ForwardedRef<U>;
}) => {
  const classes = useMemo(
    () =>
      fetchStyles({
        size,
        colorScheme,
        disabled,
        fullWidth,
        radius,
        transform,
        isLoading,
        loadingText,
      }),
    [size, colorScheme, disabled, fullWidth, radius, transform, loadingText, isLoading]
  );

  // const textToShow = useMemo(() => textTransform(textCase, children), [textCase, children]);
  return (
    <Element
      {...others}
      className={cn(classes.button, classes[variant], className)}
      disabled={disabled}
      ref={elementRef}
      onTouchStart={() => ({})}
    >
      <span className={classes.inner} data-beautify-label>
        {leftIcon && !isLoading && (
          <span data-beautify-left-icon className={classes.leftIcon}>
            {leftIcon}
          </span>
        )}
        {isLoading && spinnerPlacement === 'start' && (
          <span data-beautify-left-spinner className={classes.spinner}>
            {spinner || <Spinner color='current' />}
          </span>
        )}
        <span className={classes.label} data-beautify-label>
          {isLoading ? loadingText : children}
        </span>

        {isLoading && spinnerPlacement === 'end' && (
          <span data-beautify-right-spinner className={classes.spinner}>
            {spinner || <Spinner color='current' />}
          </span>
        )}
        {rightIcon && !isLoading && (
          <span data-beautify-right-icon className={classes.rightIcon}>
            {rightIcon}
          </span>
        )}
      </span>
    </Element>
  );
};
Button.displayName = '@beautify/core/Button';

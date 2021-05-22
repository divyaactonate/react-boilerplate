import { ActonateSize } from '@library/theme';
import { ActonateCase } from '@library/theme/types';
import { ComponentPassThrough } from '@library/types';
import cn from 'clsx';
import { useMemo } from 'react';
import { fetchStyles } from './Button.styles';

export interface ButtonProps {
  /** Predefined button size */
  size?: ActonateSize;

  /** Button type attribute */
  type?: 'submit' | 'button' | 'reset';

  /** Button color from theme */
  color?: string;

  /** Adds icon before button label  */
  leftIcon?: React.ReactNode;

  /** Adds icon after button label  */
  rightIcon?: React.ReactNode;

  /** Sets button width to 100% of parent element */
  fullWidth?: boolean;

  /** Button border-radius from theme or number to set border-radius in px */
  radius?: ActonateSize;

  /** Controls button appearance */
  variant?: 'link' | 'filled' | 'outline' | 'light';

  /** Text transform variants */
  transform?: ActonateCase;
}

export const Button = <
  T extends React.ElementType = 'button',
  U extends HTMLElement = HTMLButtonElement
>({
  className,
  color = 'blue',
  size = 'md',
  type = 'button',
  disabled = false,
  children,
  leftIcon,
  rightIcon,
  fullWidth = false,
  variant = 'filled',
  transform,
  radius = 'xs',
  component: Element = 'button',
  elementRef,
  ...others
}: ComponentPassThrough<T, ButtonProps> & {
  /** Get root element ref */
  elementRef?: React.ForwardedRef<U>;
}) => {
  const classes = useMemo(
    () => fetchStyles({ size, color, disabled, fullWidth, radius, transform }),
    [size, color, disabled, fullWidth, radius, transform]
  );

  // const textToShow = useMemo(() => textTransform(textCase, children), [textCase, children]);
  return (
    <Element
      {...others}
      className={cn(classes.button, classes[variant], className)}
      type={type}
      disabled={disabled}
      ref={elementRef}
      onTouchStart={() => ({})}
    >
      <span className={classes.inner} data-actonate-label>
        {leftIcon && (
          <span data-actonate-left-icon className={classes.leftIcon}>
            {leftIcon}
          </span>
        )}

        <span className={classes.label} data-actonate-label>
          {children}
        </span>

        {rightIcon && (
          <span data-actonate-right-icon className={classes.rightIcon}>
            {rightIcon}
          </span>
        )}
      </span>
    </Element>
  );
};
Button.displayName = '@library/core/Button';

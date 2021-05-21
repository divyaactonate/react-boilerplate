/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-empty-function */
import { ComponentPassThrough } from '@shared/types';
import cn from 'classnames';

const mapBaseSize = {
  sm: 'h-8 px-3 text-xs',
  base: 'h-10 px-4 text-base',
  lg: 'h-12 px-5 text-xl',
};

export interface ButtonBaseProps {
  /** Predefined button size */
  size?: 'sm' | 'base' | 'lg';

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
  radius?: 'sm' | 'base' | 'lg';

  /** Controls button appearance */
  variant?: 'link' | 'filled' | 'outline' | 'light';
}
export function Button<
  T extends React.ElementType = 'button',
  U extends HTMLElement = HTMLButtonElement
>({
  className,
  size = 'base',
  type = 'button',
  disabled = false,
  children,
  leftIcon,
  rightIcon,
  // fullWidth = false,
  // variant = 'filled',
  // radius = 'sm',
  component: Element = 'button',
  elementRef,
  ...others
}: ComponentPassThrough<T, ButtonBaseProps> & {
  /** Get root element ref */
  elementRef?: React.ForwardedRef<U>;
}) {
  return (
    <Element
      {...others}
      className={cn(
        `flex items-center justify-center rounded whitespace-no-wrap
        focus:outline-none focus:shadow-outline
        transition duration-300`,
        disabled ? 'opacity-50 cursor-not-allowed' : '',
        mapBaseSize[size],
        className
      )}
      type={type}
      disabled={disabled}
      ref={elementRef}
      onTouchStart={() => {}}
    >
      <span className='flex items-center justify-center h-full' data-mantine-label>
        {leftIcon && (
          <span data-mantine-left-icon className='flex items-center mr-4'>
            {leftIcon}
          </span>
        )}

        <span
          className='block whitespace-nowrap overflow-hidden overflow-ellipsis'
          data-mantine-label
        >
          {children}
        </span>

        {rightIcon && (
          <span data-mantine-right-icon className='flex items-center ml-4'>
            {rightIcon}
          </span>
        )}
      </span>
    </Element>
  );
}

export default Button;

import { DefaultProps } from '@library/theme/types';
import { ComponentPassThrough } from '@library/types';
import cn from 'clsx';

const mapBaseSize = {
  sm: 'h-8 px-3 text-xs',
  base: 'h-10 px-4 text-base',
  lg: 'h-12 px-5 text-xl',
};

export interface ActionIconProps extends DefaultProps, React.ComponentPropsWithoutRef<'button'> {
  /** Icon rendered inside button */
  children: React.ReactNode;

  /** Controls appearance */
  variant?: 'transparent' | 'hover' | 'filled' | 'outline' | 'light';

  /** Button hover, active and icon colors from theme */
  color?: string;

  /** Button border-radius from theme or number to set border-radius in px */
  radius?: 'sm' | 'base' | 'lg';

  /** Predefined icon size or number to set width and height in px */
  size?: 'sm' | 'base' | 'lg';

  /** Get element ref */
  elementRef?: React.ForwardedRef<HTMLButtonElement>;
}

export const ActionIcon = <T extends React.ElementType = 'button', U = HTMLButtonElement>({
  className,
  // color = 'gray',
  children,
  // radius = 'sm',
  size = 'md',
  // variant = 'hover',
  // themeOverride,
  elementRef,
  component: Element = 'button',
  ...others
}: ComponentPassThrough<T, ActionIconProps> & { elementRef?: React.ForwardedRef<U> }) => {
  return (
    <Element
      {...others}
      className={cn(
        `flex items-center justify-center cursor-pointer 
        appearance-none box-border p-0 leading-tight 
        border-transparent transition duration-300`,
        mapBaseSize[size],
        className
      )}
      type='button'
      ref={elementRef}
    >
      {children}
    </Element>
  );
};

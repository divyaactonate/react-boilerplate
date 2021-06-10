/** @jsxImportSource @emotion/react */

import { BeautifySize, DefaultProps } from '@library/theme';
import cx from 'clsx';
import { ReactNode } from 'react';
import { useStyles } from './TextInput.styles';
export interface TextInputProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size'> {
  size?: BeautifySize;
  radius?: BeautifySize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isInvalid?: boolean;
  type?: string;
  elementRef?: React.ForwardedRef<HTMLInputElement>;
}
export const TextInput = ({
  rightIcon,
  size = 'md',
  radius = 'sm',
  isInvalid = false,
  leftIcon,
  type = 'text',
  themeOverride,
  elementRef,
  className,
  ...others
}: TextInputProps) => {
  const { classes, css } = useStyles({ themeOverride, size, radius, isInvalid });
  return (
    <div className={cx(classes.wrapper, className)}>
      {leftIcon && <div className={classes.leftIconWrapper}>{leftIcon}</div>}

      <input
        ref={elementRef}
        type={type}
        css={css.textinput}
        autoComplete='off'
        className={classes.textinput}
        {...others}
      />
      {rightIcon && <div className={classes.rightIconWrapper}>{rightIcon}</div>}
    </div>
  );
};
TextInput.displayName = '@beautify/core/TextInput';

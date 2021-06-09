/** @jsxImportSource @emotion/react */

import { BeautifySize, DefaultProps } from '@library/theme';
import { ComponentPassThrough } from '@library/types';
import cx from 'clsx';
import { ReactNode } from 'react';
import { useStyles } from './TextInput.styles';
export interface TextInputProps extends DefaultProps {
  size?: BeautifySize;
  radius?: BeautifySize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isInvalid?: boolean;
  type?: string;
}
export const TextInput = <
  T extends React.ElementType = 'input',
  U extends HTMLElement = HTMLInputElement
>({
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
}: ComponentPassThrough<T, TextInputProps> & {
  /** Get element ref */
  elementRef?: React.ForwardedRef<U>;
}) => {
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

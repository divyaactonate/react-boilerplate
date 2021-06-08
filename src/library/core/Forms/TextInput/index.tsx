/** @jsxImportSource @emotion/react */

import { BeautifySize, DefaultProps } from '@library/theme';
import { ComponentPassThrough } from '@library/types';
import { ReactNode } from 'react';
import { useStyles } from './TextInput.styles';
import cx from 'clsx';
import { RegisterOptions, UseFormRegister } from 'react-hook-form/dist/types';

export interface TextInputProps extends DefaultProps {
  size?: BeautifySize;
  radius?: BeautifySize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isinvalid?: boolean;
  register?: UseFormRegister<any>;
  rules?: RegisterOptions;
  name?: string;
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
  register,
  name,
  type = 'text',
  rules,
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
      {register && name ? (
        <input
          type={type}
          css={css.textinput}
          className={classes.textinput}
          {...register(name, rules)}
          {...others}
        />
      ) : (
        <input
          ref={elementRef}
          type={type}
          css={css.textinput}
          className={classes.textinput}
          {...others}
        />
      )}

      {rightIcon && <div className={classes.rightIconWrapper}>{rightIcon}</div>}
    </div>
  );
};
TextInput.displayName = '@beautify/core/TextInput';

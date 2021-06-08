/** @jsxImportSource @emotion/react */

import { BeautifySize, DefaultProps } from '@library/theme';
import { ComponentPassThrough } from '@library/types';
import { ReactNode } from 'react';
import { useStyles } from './TextInput.styles';
import cx from 'clsx';

export interface TextInputProps extends DefaultProps {
  size?: BeautifySize;
  radius?: BeautifySize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
export const TextInput = <
  T extends React.ElementType = 'input',
  U extends HTMLElement = HTMLInputElement
>({
  rightIcon,
  size = 'md',
  radius = 'sm',
  leftIcon,
  themeOverride,
  elementRef,
  className,
  ...others
}: ComponentPassThrough<T, TextInputProps> & {
  /** Get element ref */
  elementRef?: React.ForwardedRef<U>;
}) => {
  const { classes, css } = useStyles({ themeOverride, size, radius });
  return (
    <div className={cx(classes.wrapper, className)}>
      {leftIcon && <div className={classes.leftIconWrapper}>{leftIcon}</div>}
      <input
        ref={elementRef}
        type='text'
        css={css.textinput}
        className={classes.textinput}
        {...others}
      />
      {rightIcon && <div className={classes.rightIconWrapper}>{rightIcon}</div>}
    </div>
  );
};
TextInput.displayName = '@beautify/core/TextInput';

/** @jsxImportSource @emotion/react */

import { BeautifySize, DefaultProps } from '@library/theme';
import { ComponentPassThrough } from '@library/types';
import { ReactNode } from 'react';
import { useStyles } from './TextInput.styles';

export interface TextInputProps extends DefaultProps {
  size?: BeautifySize;
  radius?: BeautifySize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  placeHolder?: string;
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
  className,
  ...others
}: ComponentPassThrough<T, TextInputProps> & {
  /** Get element ref */
  elementRef?: React.ForwardedRef<U>;
}) => {
  const { classes, css } = useStyles({ themeOverride, size, radius });
  return (
    <div className={(classes.wrapper, className)}>
      {leftIcon && <div className={classes.leftIconWrapper}>{leftIcon}</div>}
      <input type='text' css={css.textinput} className={classes.textinput} {...others} />
      {rightIcon && <div className={classes.rightIconWrapper}>{rightIcon}</div>}
    </div>
  );
};
TextInput.displayName = '@beautify/core/TextInput';

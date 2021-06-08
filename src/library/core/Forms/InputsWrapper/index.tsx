/** @jsxImportSource @emotion/react */

import { Label, ErrorLabel } from '@library/core';
import { BeautifyCase, BeautifyWeight, DefaultProps } from '@library/theme';
import cx from 'clsx';
import { cloneElement } from 'react';
import { useStyles } from './InputsWrapper.styles';
export interface InputsWrapperProps extends DefaultProps {
  label?: string;
  type?: 'text' | 'password' | 'number' | 'email';
  errorMessage?: string;
  size?: string;
  weight?: BeautifyWeight;
  required?: boolean;
  isInvalid?: boolean;
  transform?: BeautifyCase;
  children: JSX.Element;
  errors?: any;
  minHeight?: any;
  name?: string;
}
export const InputsWrapper = ({
  themeOverride,
  className,
  label,
  errorMessage = '',
  size = 'sm',
  minHeight = '6rem',
  weight = 'extrabold',
  isInvalid = false,
  required = false,
  children,
  transform = 'capitalize',
}: InputsWrapperProps) => {
  const { classes, css } = useStyles({ themeOverride, transform, size, weight, minHeight });
  const LabelProps = { themeOverride, transform, isInvalid, required, label, size, weight };
  const ErrorProps = { errorMessage, themeOverride };
  return (
    <div
      data-beautify-inputswrapper
      css={css.inputswrapper}
      className={cx(classes.inputswrapper, className)}
    >
      <Label {...LabelProps} />
      {/* {children} */}
      {cloneElement(children, { isInvalid })}
      {/* <span className={isInvalid? 'visible h-3' : 'hidden'}>
        <ErrorLabel {...ErrorProps} />
      </span> */}
      {isInvalid && <ErrorLabel {...ErrorProps} />}
    </div>
  );
};
InputsWrapper.displayName = '@beautify/core/InputsWrapper';

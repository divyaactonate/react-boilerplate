/** @jsxImportSource @emotion/react */

import { BeautifyCase, BeautifyWeight, DefaultProps } from '@library/theme';
import cx from 'clsx';
import { ReactNode } from 'react';
import { useStyles } from './InputsWrapper.styles';

export interface InputsWrapperProps extends DefaultProps {
  label?: string;
  type?: 'text' | 'password' | 'number' | 'email';
  errorMessage?: string;
  size?: string;
  weight?: BeautifyWeight;
  required?: boolean;
  hasError?: boolean;
  transform?: BeautifyCase;
  children: ReactNode;
}
export const InputsWrapper = ({
  themeOverride,
  className,
  label,
  errorMessage = '',
  size = 'sm',
  weight = 'extrabold',
  hasError = false,
  required = false,
  children,
  transform = 'capitalize',
}: InputsWrapperProps) => {
  const { classes, css } = useStyles({ themeOverride, transform, size, weight });
  return (
    <div data-beautify-inputswrapper className={cx(classes.inputswrapper, className)}>
      <label css={css.label} htmlFor={label} className={classes.label}>
        {label}
        {required && (
          <span data-mantine-required className={classes.required}>
            *
          </span>
        )}
      </label>
      {children}
      {hasError && (
        <p css={css.error} className={classes.error}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};
InputsWrapper.displayName = '@beautify/core/InputsWrapper';

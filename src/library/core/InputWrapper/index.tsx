/** @jsxImportSource @emotion/react */
// Please remove above line if not using twin css

import React, { ComponentPropsWithoutRef, createElement } from 'react';
import cx from 'clsx';
import { useStyles } from './InputWrapper.styles';
import { DefaultProps, useBeautifyTheme } from '@library/theme';
import { Text } from '@library/core';

export interface InputWrapperBaseProps {
  /** Input label, displayed before input */
  label?: React.ReactNode;

  /** Input description, displayed after label */
  description?: React.ReactNode;

  /** Displays error message after input */
  error?: React.ReactNode;

  /** Adds red asterisk on the right side of label */
  required?: boolean;
}

export interface InputWrapperProps
  extends DefaultProps,
    InputWrapperBaseProps,
    ComponentPropsWithoutRef<'div'> {
  /** Input that should be wrapped */
  children: React.ReactNode;

  /** htmlFor label prop */
  id?: string;

  /** Render label as label with htmlFor or as div */
  labelElement?: 'label' | 'div';
}

export const InputWrapper = ({
  className,
  label,
  children,
  required,
  id,
  error,
  description,
  themeOverride,
  labelElement = 'label',
  ...others
}: InputWrapperProps) => {
  const { classes, css } = useStyles({ theme: useBeautifyTheme(themeOverride) });

  const labelProps = labelElement === 'label' ? { htmlFor: id } : {};
  const inputLabel = createElement(
    labelElement,
    { ...labelProps, className: classes.label },
    <>
      {label}
      {required && (
        <span data-mantine-required className={classes.required}>
          {' '}
          *
        </span>
      )}
    </>
  );
  return (
    <div
      data-beautify-inputwrapper
      css={css.inputwrapper}
      className={cx(classes.inputwrapper, className)}
      {...others}
    >
      {label && inputLabel}

      {description && (
        <Text
          themeOverride={themeOverride}
          data-mantine-description
          color='gray'
          size='xs'
          css={css.description}
          className={classes.description}
        >
          {description}
        </Text>
      )}

      {children}

      {typeof error !== 'boolean' && error && (
        <Text
          themeOverride={themeOverride}
          data-mantine-error
          color='red'
          size='sm'
          css={css.error}
          className={classes.error}
        >
          {error}
        </Text>
      )}
    </div>
  );
};
InputWrapper.displayName = '@beautify/core/InputWrapper';

/** @jsxImportSource @emotion/react */
import { Text } from '../../Typography/Text';
import { BeautifyCase, BeautifyWeight, DefaultProps } from '@library/theme';
import cx from 'clsx';
import React, { ComponentPropsWithoutRef, createElement } from 'react';
import { useStyles } from './InputWrapper.styles';

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
  size?: string;
  weight?: BeautifyWeight;
  transform?: BeautifyCase;
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
  size = 'sm',
  weight = 'extrabold',
  transform = 'capitalize',
  ...others
}: InputWrapperProps) => {
  const { classes, css } = useStyles({ themeOverride, transform, size, weight });

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

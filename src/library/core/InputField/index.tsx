/**
 *
 * InputField
 *
 */
import React, { memo } from 'react';
import cx from 'clsx';
import { BeautifySize, DefaultProps, BeautifyCase } from '@library/theme';
import { ComponentPassThrough } from '@library/types';
import { useStyles } from './InputField.styles';

export interface InputFieldProps extends DefaultProps {
  /** Sets border color to red and aria-invalid=true on input element */
  invalid?: boolean;

  /**
   * Text transform variants
   * @type BeautifyCase
   */
  transform?: BeautifyCase;

  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth?: boolean;

  /** Adds icon on the left side of input */
  icon?: React.ReactNode;

  /** Right section of input, similar to icon but on the right */
  rightSection?: React.ReactNode;

  /** Width of right section, is used to calculate input padding-right */
  rightSectionWidth?: number;

  /** Props spread to rightSection div element */
  rightSectionProps?: Record<string, any>;

  /** Add className to input element */
  inputClassName?: string;

  /** Properties spread to root element */
  wrapperProps?: Record<string, any>;

  /** Adds style to input element */
  inputStyle?: React.CSSProperties;

  /** Sets aria-required=true on input element */
  required?: boolean;

  /** Input border-radius from theme or number to set border-radius in px */
  radius?: BeautifySize;

  /** Defines input appearance */
  variant?: 'default' | 'filled' | 'unstyled';
}

export const InputFieldCustom = <
  T extends React.ElementType = 'input',
  U extends HTMLElement = HTMLInputElement
>({
  component: Element = 'input',
  className,
  invalid = false,
  required = false,
  variant = 'default',
  icon,
  style,
  color,
  size = 'md',
  disabled = false,
  rightSection,
  rightSectionProps = {},
  radius = 'sm',
  inputClassName,
  inputStyle,
  themeOverride,
  transform,
  fullWidth = false,
  wrapperProps,
  elementRef,
  ...others
}: ComponentPassThrough<T, InputFieldProps> & {
  /** Get element ref */
  elementRef?: React.ForwardedRef<U>;
}) => {
  const { classes, css } = useStyles({
    size,
    color,
    disabled,
    fullWidth,
    radius,
    transform,
    themeOverride,
  });

  return (
    <div data-beautify-inputfield className={cx(classes.inputfield)}>
      <div
        className={cx(
          classes.inputWrapper,
          { [classes.invalid]: invalid },
          classes[`${variant}Variant`],
          className
        )}
        style={style}
        css={css[variant]}
        {...wrapperProps}
        disabled={disabled}
      >
        {icon && <span className={classes.icon}>{icon}</span>}

        <Element
          {...others}
          data-mantine-input
          ref={elementRef}
          aria-required={required}
          aria-invalid={invalid}
          className={cx({ [classes.withIcon]: icon }, classes.input, inputClassName)}
          style={{
            paddingRight: rightSection ? 5 : 10,
            ...inputStyle,
          }}
        />

        {rightSection && (
          <div
            {...rightSectionProps}
            data-mantine-input-section
            style={{
              ...rightSectionProps.style,
            }}
            className={cx(classes.rightPanel)}
          >
            {rightSection}
          </div>
        )}
      </div>
    </div>
  );
};
export const InputField = memo(InputFieldCustom);
InputField.displayName = '@beautify/core/InputField';

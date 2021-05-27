/** @jsxImportSource @emotion/react */
// Please remove above line if not using twin css
import React from 'react';
import cx from 'clsx';
import { useStyles } from './Input.styles';
import { DefaultProps, useBeautifyTheme } from '@library/theme';
import { ComponentPassThrough } from '@library/types';

export interface InputProps extends DefaultProps {
  /** Sets border color to red and aria-invalid=true on input element */
  invalid?: boolean;

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
  radius?: MantineNumberSize;

  /** Defines input appearance */
  variant?: 'default' | 'filled' | 'unstyled';
}

export const Input = <
  T extends React.ElementType = 'input',
  U extends HTMLElement = HTMLInputElement
>({
  component: Element = 'input',
  // className,
  invalid = false,
  required = false,
  variant = 'default',
  icon,
  style,
  rightSectionWidth = 36,
  rightSection,
  rightSectionProps = {},
  radius = 'sm',
  inputClassName,
  inputStyle,
  themeOverride,
  wrapperProps,
  elementRef,
  ...others
}: ComponentPassThrough<T, InputProps> & {
  /** Get element ref */
  elementRef?: React.ForwardedRef<U>;
}) => {
  const theme = useBeautifyTheme(themeOverride);
  const { classes, css } = useStyles({ radius, theme });

  return (
    <div
      css={[css.inputWrapper, { [css.invalid]: invalid }, css[`${variant}Variant`]]}
      className={cx(
        classes.inputWrapper,
        { [classes.invalid]: invalid },
        classes[`${variant}Variant`],
        className
      )}
      style={style}
      {...wrapperProps}
    >
      {icon && (
        <div
          data-mantine-icon
          css={css.icon}
          // className={classes.icon}
        >
          {icon}
        </div>
      )}

      <Element
        {...others}
        data-mantine-input
        ref={elementRef}
        css={[css.input, { [css.withIcon]: icon }, inputClassName]}
        aria-required={required}
        aria-invalid={invalid}
        // className={cx({ [classes.withIcon]: icon }, classes.input, inputClassName)}
        style={{
          paddingRight: rightSection ? rightSectionWidth : 12,
          ...inputStyle,
        }}
      />

      {rightSection && (
        <div
          {...rightSectionProps}
          css={[css.rightSection]}
          data-mantine-input-section
          style={{ ...rightSectionProps.style, width: rightSectionWidth }}
          className={rightSectionProps.className}
          // className={cx(classes.rightSection, rightSectionProps.className)}
        >
          {rightSection}
        </div>
      )}
    </div>
  );
};
Input.displayName = '@beautify/core/Input';
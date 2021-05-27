/** @jsxImportSource @emotion/react */
// Please remove above line if not using twin css

import React from 'react';
import cx from 'clsx';
import { useStyles, sizes } from './Checkbox.styles';
import { DefaultProps, useBeautifyTheme, BeautifySize } from '@library/theme';
import { CheckboxIcon } from './CheckboxIcon';

export const CHECKBOX_SIZES = sizes;

export interface CheckboxProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size'> {
  /** Checkbox checked and indeterminate state color from theme, defaults to theme.primaryColor */
  color?: string;

  /** Predefined label font-size and checkbox width and height in px */
  size?: BeautifySize;

  /** Checkbox label */
  label?: React.ReactNode;

  /** Indeterminate state of checkbox, overwrites checked */
  indeterminate?: boolean;

  /** Style properties added to input element */
  inputStyle?: React.CSSProperties;

  /** Class name added to input element */
  inputClassName?: string;

  /** Props spread to wrapper element */
  wrapperProps?: Record<string, any>;

  /** Id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Get input ref */
  elementRef?: React.ForwardedRef<HTMLInputElement>;
}

export const Checkbox = ({
  className,
  checked,
  onChange,
  color = 'blue',
  themeOverride,
  label,
  disabled,
  indeterminate = false,
  id = '1',
  size = 'md',
  wrapperProps,
  style,
  inputStyle,
  inputClassName,
  elementRef,
  // children,
  ...others
}: CheckboxProps) => {
  const { classes, css } = useStyles({ size, color, theme: useBeautifyTheme(themeOverride) });
  return (
    <div
      css={css.wrapper}
      className={cx(classes.wrapper, className)}
      style={style}
      {...wrapperProps}
    >
      <div css={css.checkboxWrapper} className={classes.checkboxWrapper}>
        <input
          id={id}
          ref={elementRef}
          type='checkbox'
          css={css.checkbox}
          className={cx(classes.checkbox, inputClassName)}
          checked={indeterminate || checked}
          onChange={onChange}
          disabled={disabled}
          style={inputStyle}
          {...others}
        />

        <CheckboxIcon indeterminate={indeterminate} css={css.icon} className={classes.icon} />
      </div>

      {label && (
        <label css={css.label} className={classes.label} htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};
Checkbox.displayName = '@beautify/core/Checkbox';

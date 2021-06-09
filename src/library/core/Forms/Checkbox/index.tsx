/** @jsxImportSource @emotion/react */
import { CheckIcon, MinusIcon } from '@heroicons/react/solid';
import { BeautifySize, DefaultProps } from '@library/theme';
import cx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useStyles } from './Checkbox.styles';
export interface CheckboxProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size'> {
  /** Checkbox checked and indeterminate state color from theme, defaults to theme.primaryColor */
  color?: string;

  /** Predefined label font-size and checkbox width and height in px */
  size?: BeautifySize;

  /** Predefined label font-size and checkbox width and height in px */
  radius?: BeautifySize;

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
  indeterminate,
  defaultChecked = false,
  id = '1',
  radius = 'xs',
  size = 'md',
  wrapperProps,
  style,
  inputStyle,
  inputClassName,
  elementRef,
  // children,
  ...others
}: CheckboxProps) => {
  const { classes, css } = useStyles({ size, color, radius, themeOverride });
  const [isChecked, setisChecked] = useState(checked || defaultChecked);

  useEffect(() => {
    setisChecked(checked || defaultChecked);
  }, [checked, defaultChecked]);

  const onCheckUncheck = (event: any) => {
    onChange && onChange(event);
    setisChecked(event?.currentTarget?.checked);
  };

  return (
    <div
      data-beautify-checkbox
      // css={css.wrapper}
      className={cx(classes.wrapper, className)}
      style={style}
      {...wrapperProps}
    >
      <div
        data-beautify-checkbox-wrapper
        // css={css.checkboxWrapper}
        className={classes.checkboxWrapper}
      >
        <input
          data-beautify-checkbox-input
          id={id}
          ref={elementRef}
          type='checkbox'
          css={css.checkbox}
          className={cx(classes.checkbox, inputClassName)}
          checked={indeterminate || isChecked}
          onChange={onCheckUncheck}
          disabled={disabled}
          style={inputStyle}
          {...others}
        />

        {indeterminate ? (
          <MinusIcon data-beautify-checkbox-icon css={css.icon} className={classes.icon} />
        ) : isChecked ? (
          <CheckIcon data-beautify-checkbox-icon css={css.icon} className={classes.icon} />
        ) : (
          <></>
        )}
      </div>

      {label && (
        <label css={css.label} data-beautify-checkbox-label className={classes.label} htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};
Checkbox.displayName = '@beautify/core/Checkbox';

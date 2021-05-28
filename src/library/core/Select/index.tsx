/** @jsxImportSource @emotion/react */
// Please remove above line if not using twin css

import React, { ComponentPropsWithoutRef } from 'react';
import { DefaultProps, useBeautifyTheme } from '@library/theme';
import { InputProps, Input } from '@library/core/Input';
import { InputWrapper, InputWrapperBaseProps } from '@library/core/InputWrapper';
import { ChevronIcon } from './ChevronIcon';
interface SelectItem {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends DefaultProps,
    InputWrapperBaseProps,
    Omit<InputProps, 'rightSection' | 'rightSectionWidth' | 'rightSectionProps'>,
    ComponentPropsWithoutRef<'select'> {
  /** id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Adds hidden option to select and sets it as selected if value is not present */
  placeholder?: string;

  /** Data used to render options */
  data: SelectItem[];

  /** Style properties added to select element */
  inputStyle?: React.CSSProperties;

  /** Props passed to root element (InputWrapper component) */
  wrapperProps?: Record<string, any>;

  /** Get element ref */
  elementRef?: React.ForwardedRef<HTMLSelectElement>;
}

export const Select = ({
  id,
  className,
  required,
  label,
  error,
  style,
  data,
  placeholder,
  themeOverride,
  wrapperProps,
  inputStyle,
  description,
  elementRef,
  ...others
}: SelectProps) => {
  const theme = useBeautifyTheme(themeOverride);

  const options = data.map((item) => (
    <option key={item.value} value={item.value} disabled={item.disabled}>
      {item.label}
    </option>
  ));

  if (placeholder) {
    options.unshift(
      <option key='placeholder' value='' selected disabled hidden>
        {placeholder}
      </option>
    );
  }

  const chevron = (
    <ChevronIcon style={{ color: error ? theme.colors.red[6] : theme.colors.gray[6] }} />
  );

  return (
    <InputWrapper
      {...wrapperProps}
      required={required}
      id={'1'}
      label={label}
      error={error}
      className={className}
      style={style}
      themeOverride={themeOverride}
      description={description}
    >
      <Input<'select', HTMLSelectElement>
        {...others}
        component='select'
        invalid={!!error}
        style={inputStyle}
        aria-required={required}
        elementRef={elementRef}
        id={id}
        inputStyle={inputStyle}
        rightSection={chevron}
        rightSectionProps={{ style: { pointerEvents: 'none' } }}
        required={required}
        themeOverride={themeOverride}
      >
        {options}
      </Input>
    </InputWrapper>
  );
};
Select.displayName = '@beautify/core/Select';

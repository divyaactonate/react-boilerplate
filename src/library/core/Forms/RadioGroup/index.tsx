/** @jsxImportSource @emotion/react */
import { BeautifyNumberSize, DefaultProps } from '@library/theme';
import cx from 'clsx';
import React, { Children, cloneElement, useState } from 'react';
import { InputWrapper, InputWrapperBaseProps } from '../InputWrapper';
import { Radio, RadioProps } from './Radio/Radio';
import { useStyles } from './RadioGroup.styles';
import { RegisterOptions, UseFormRegister } from 'react-hook-form/dist/types';

export { Radio };
export type { RadioProps };

export interface RadioGroupProps
  extends DefaultProps,
    InputWrapperBaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  /** <Radio /> components only */
  children: React.ReactNode;

  /** Value of currently selected radio */
  value?: string;

  /** Called when value changes */
  onChange?(value: string): void;

  /** Initial value for uncontrolled component */
  defaultValue?: string;

  /** Radios position */
  variant?: 'horizontal' | 'vertical';

  /** Spacing between radios in horizontal variant */
  spacing?: BeautifyNumberSize;

  // /** Active radio color */
  // color?: string;

  // /** Predefined label fontSize, radio width, height and border-radius */
  // size?: BeautifySize;
  register?: UseFormRegister<any>;
  rules?: RegisterOptions;
  name?: string;
}

export function RadioGroup({
  className,
  themeOverride,
  children,
  value,
  defaultValue,
  onChange,
  variant = 'horizontal',
  spacing = 2,
  register,
  name,
  rules,
  // color,
  ...others
}: RadioGroupProps) {
  const [_value, setValue] = useState(value || defaultValue || '');
  const finalValue = typeof value === 'string' ? value : _value;
  const { classes, css } = useStyles({ spacing, variant, themeOverride });

  const handleChange = (v: string) => {
    setValue(v);
    typeof onChange === 'function' && onChange(v);
  };

  const radios: any = (Children.toArray(children) as React.ReactElement[])
    .filter((item) => item.type === Radio)
    .map((radio, index) =>
      cloneElement(
        radio,
        register && name
          ? {
              key: index,
              register,
              name,
              rules,
              checked: finalValue === radio.props.value,
              onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(event.currentTarget.value),
            }
          : {
              key: index,
              checked: finalValue === radio.props.value,
              onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(event.currentTarget.value),
            }
      )
    );

  return (
    <InputWrapper labelElement='div' {...others}>
      <div role='radiogroup' css={css.wrapper} className={cx(classes.wrapper, className)}>
        {radios}
      </div>
    </InputWrapper>
  );
}

RadioGroup.displayName = '@mantine/core/RadioGroup';

/** @jsxImportSource @emotion/react */
// Please remove above line if not using twin css

import React, { Children, cloneElement, useState } from 'react';
import cx from 'clsx';
import { useStyles } from './RadioGroup.styles';
import { sizes } from './Radio/Radio.styles';
import { DefaultProps, BeautifySize, useBeautifyTheme } from '@library/theme';
import { InputWrapper, InputWrapperBaseProps } from '@library/core/InputWrapper';
import { Radio, RadioProps } from './Radio';

export { Radio };
export type { RadioProps };

export const RADIO_SIZES = sizes;

export interface RadioGroupProps
  extends DefaultProps,
    InputWrapperBaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  /** <Radio /> components only */
  children: React.ReactNode;

  /** Input name attribute, used to bind radios in one group, by default generated randomly with use-id hook */
  name?: string;

  /** Value of currently selected radio */
  value?: string;

  /** Called when value changes */
  onChange?(value: string): void;

  /** Initial value for uncontrolled component */
  defaultValue?: string;

  /** Radios position */
  variant?: 'horizontal' | 'vertical';

  /** Spacing between radios in horizontal variant */
  spacing?: BeautifySize;

  /** Active radio color */
  color?: string;

  /** Predefined label fontSize, radio width, height and border-radius */
  size?: BeautifySize;
}

export const RadioGroup = ({
  className,
  themeOverride,
  name,
  children,
  value,
  defaultValue,
  onChange,
  variant = 'horizontal',
  spacing = 'md',
  color,
  size,
  ...others
}: RadioGroupProps) => {
  const [_value, setValue] = useState(value || defaultValue || '');
  const finalValue = typeof value === 'string' ? value : _value;
  const { classes, css } = useStyles({ spacing, variant, theme: useBeautifyTheme(themeOverride) });

  const handleChange = (v: string) => {
    setValue(v);
    typeof onChange === 'function' && onChange(v);
  };

  const radios: any = (Children.toArray(children) as React.ReactElement[])
    .filter((item) => item.type === Radio)
    .map((radio, index) =>
      cloneElement(radio, {
        key: index,
        checked: finalValue === radio.props.value,
        name: name,
        color,
        size,
        onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(event.currentTarget.value),
      })
    );

  return (
    <InputWrapper labelElement='div' {...others}>
      <div role='radiogroup' css={css.wrapper} className={cx(classes.wrapper, className)}>
        {radios}
      </div>
    </InputWrapper>
  );
};
RadioGroup.displayName = '@beautify/core/RadioGroup';

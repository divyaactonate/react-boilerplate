/** @jsxImportSource @emotion/react */
// Please remove above line if not using twin css

import cx from 'clsx';
import { useStyles } from './ReactSelect.styles';
import { BeautifySize, DefaultProps } from '@library/theme';
import React, { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import Select from 'react-select';
// eslint-disable-next-line import/no-named-as-default
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export interface SelectItem {
  readonly value?: string;
  readonly label?: string;
  readonly color?: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}
export interface ReactSelectProps extends DefaultProps, ComponentPropsWithoutRef<'select'> {
  /** id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;
  closeMenuOnSelect?: boolean;
  /** Adds hidden option to select and sets it as selected if value is not present */
  placeholder?: string;
  radius?: BeautifySize;
  size?: 'sm' | 'md' | 'lg' | any;
  mode?: 'single' | 'multiple';
  /** Data used to render options */
  options: SelectItem[];
  isClearable?: boolean;
  isLoading?: boolean;
  isSearchable?: boolean;
  wrapperClass?: string;
  showArrow?: boolean;
  /** Called when value changes */
  onChange?: any;

  /** Get element ref */
  elementRef?: React.ForwardedRef<any>;
}
export const ReactSelect = ({
  themeOverride,
  isSearchable = true,
  isClearable = true,
  isLoading,
  mode = 'single',
  options = [],
  defaultValue,
  size = 'md',
  radius = 'md',
  wrapperClass,
  onChange,
  closeMenuOnSelect = true,
  elementRef,
  className,
  showArrow = true,
}: ReactSelectProps) => {
  const { classes, css, colourStyles } = useStyles({ themeOverride, radius, size });
  const [value, setvalue] = useState(null);
  const [state, setstate] = useState(true);

  useEffect(() => {
    if (
      defaultValue !== undefined &&
      defaultValue !== '' &&
      defaultValue !== null &&
      options &&
      options.length > 0 &&
      state
    ) {
      let setupValue: any;
      if (mode === 'multiple' && Array.isArray(defaultValue)) {
        setupValue = options?.filter((i) => defaultValue?.includes(i?.value));
      } else {
        setupValue = options?.filter((i) => i.value === defaultValue);
        setupValue = setupValue ? setupValue[0] : {};
      }
      setstate(false);
      setvalue(setupValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue, options]);

  const handleChange = (data: any) => {
    if (mode === 'multiple') {
      setvalue(data);
      if (onChange) {
        onChange(data);
      }
    } else {
      setvalue(data);
      if (onChange) {
        onChange(data);
      }
    }
  };
  return (
    <div
      data-beautify-reactselect
      css={css.reactselect}
      className={cx(classes.wrapper, wrapperClass)}
    >
      <Select
        instanceId={'hiii'}
        styles={colourStyles}
        components={animatedComponents}
        isSearchable={isSearchable}
        isLoading={isLoading}
        isMulti={mode === 'multiple' ? true : false}
        className={cx(classes.reactselect, className)}
        onChange={handleChange}
        options={options}
        isClearable={isClearable}
        showArrow={showArrow}
        closeMenuOnSelect={mode === 'multiple' ? false : closeMenuOnSelect}
        value={value}
        ref={elementRef}
      />
    </div>
  );
};
ReactSelect.displayName = '@beautify/core/ReactSelect';

/** @jsxImportSource @emotion/react */
import cx from 'clsx';
import { useStyles } from './ReactCheckbox.styles';
import { BeautifySize, DefaultProps } from '@library/theme';
import { RegisterOptions, UseFormRegister } from 'react-hook-form/dist/types';

export interface ReactCheckboxProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size'> {
  color?: string;
  size?: BeautifySize;
  label?: React.ReactNode;
  radius?: BeautifySize;
  elementRef?: React.ForwardedRef<HTMLInputElement>;
  register?: UseFormRegister<any>;
  rules?: RegisterOptions;
  name?: string;
  inputClassName?: string;
  inputStyle?: React.CSSProperties;
}
export const ReactCheckbox = ({
  className,
  color = 'blue',
  themeOverride,
  label,
  disabled,
  id = '1',
  inputStyle,
  inputClassName,
  radius = 'xs',
  size = 'md',
  style,
  elementRef,
  register,
  name,
  rules,
  ...others
}: ReactCheckboxProps) => {
  const { classes, css } = useStyles({ size, color, radius, themeOverride });
  return (
    <div data-beautify-checkbox className={cx(classes.wrapper, className)} style={style}>
      {register && name ? (
        <input
          data-beautify-checkbox-input
          id={id}
          type='checkbox'
          css={css.checkbox}
          className={cx(classes.checkbox, inputClassName)}
          disabled={disabled}
          style={inputStyle}
          {...register(name, rules)}
          {...others}
        />
      ) : (
        <input
          data-beautify-checkbox-input
          id={id}
          ref={elementRef}
          type='checkbox'
          css={css.checkbox}
          className={cx(classes.checkbox, inputClassName)}
          disabled={disabled}
          style={inputStyle}
          {...others}
        />
      )}
      {label && (
        <label css={css.label} data-beautify-checkbox-label className={classes.label} htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};
ReactCheckbox.displayName = '@beautify/core/ReactCheckbox';

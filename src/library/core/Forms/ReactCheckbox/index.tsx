/** @jsxImportSource @emotion/react */
import { BeautifySize, DefaultProps } from '@library/theme';
import cx from 'clsx';
import { useStyles } from './ReactCheckbox.styles';

export interface ReactCheckboxProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size'> {
  color?: string;
  size?: BeautifySize;
  label?: React.ReactNode;
  radius?: BeautifySize;
  elementRef?: React.ForwardedRef<HTMLInputElement>;
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
  ...others
}: ReactCheckboxProps) => {
  const { classes, css } = useStyles({ size, color, radius, themeOverride });
  return (
    <div data-beautify-checkbox className={cx(classes.wrapper, className)} style={style}>
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

      {label && (
        <label css={css.label} data-beautify-checkbox-label className={classes.label} htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};
ReactCheckbox.displayName = '@beautify/core/ReactCheckbox';

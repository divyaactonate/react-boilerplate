/** @jsxImportSource @emotion/react */

import { BeautifySize, DefaultProps, useBeautifyTheme } from '@library/theme';
import cx from 'clsx';
import { sizes, useStyles } from './Switch.styles';

export const SWITCH_SIZES = sizes;

export interface SwitchProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size'> {
  /** Id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Switch label */
  label?: React.ReactNode;

  /** Switch checked state color from theme, defaults to theme.primaryColor
   ** @type string
   * @default 'blue'
   */
  color?: string;

  /** Predefined size value */
  size?: BeautifySize;

  /** Predefined border-radius value from theme.radius or number for border-radius in px */
  radius?: BeautifySize;

  /** Style properties added to input element */
  inputStyle?: React.CSSProperties;

  /** Class name added to input element */
  inputClassName?: string;

  /** Props spread to wrapper element */
  wrapperProps?: Record<string, any>;

  /** Get element ref */
  elementRef?: React.ForwardedRef<HTMLInputElement>;
}

export const Switch = ({
  themeOverride,
  className,
  color = 'blue',
  label,
  id = '1',
  style,
  size = 'md',
  radius = 'xl',
  wrapperProps,
  inputStyle,
  inputClassName,
  elementRef,
  // children,
  ...others
}: SwitchProps) => {
  const { classes, css } = useStyles({
    theme: useBeautifyTheme(themeOverride),
    size,
    color,
    radius,
    // themeOverride
  });

  return (
    <div className={cx(classes.wrapper, className)} style={style} {...wrapperProps}>
      <input
        {...others}
        id={id}
        ref={elementRef}
        type='checkbox'
        css={css.switch}
        className={cx(classes.switch, inputClassName)}
        style={inputStyle}
      />

      {label && (
        <label className={classes.label} htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};
Switch.displayName = '@beautify/core/Switch';

/** @jsxImportSource @emotion/react */
// Please remove above line if not using twin css

import cx from 'clsx';
import { useStyles } from './Radio.styles';
import { DefaultProps, useBeautifyTheme, BeautifySize } from '@library/theme';

export interface RadioProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  /** Radio label */
  children: React.ReactNode;

  /** Radio value */
  value: string;

  /** Active radio color */
  color?: string;

  /** Predefined label fontSize, radio width, height and border-radius */
  size?: BeautifySize;

  /** Get input ref */
  elementRef?: React.ForwardedRef<HTMLInputElement>;
}
export const Radio = ({
  className,
  themeOverride,
  id,
  children,
  style,
  size = 'sm',
  elementRef,
  title,
  disabled,
  color,
  ...others
}: RadioProps) => {
  const { classes, css } = useStyles({ color, size, theme: useBeautifyTheme(themeOverride) });
  return (
    <div
      data-mantine-radio
      css={css.wrapper}
      className={cx(classes.wrapper, className)}
      style={style}
      title={title}
    >
      <label css={css.label} className={cx(classes.label, { [classes.labelDisabled]: disabled })}>
        <input
          ref={elementRef}
          css={css.radio}
          className={classes.radio}
          type='radio'
          id={id}
          disabled={disabled}
          {...others}
        />
        <span>{children}</span>
      </label>
    </div>
  );
};
Radio.displayName = '@beautify/core/Radio';

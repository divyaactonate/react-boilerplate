/** @jsxImportSource @emotion/react */
import { BeautifySize, DefaultProps } from '@library/theme';
import cx from 'clsx';
import React from 'react';
import { useStyles } from './Radio.styles';
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

export function Radio({
  className,
  themeOverride,
  children,
  style,
  size = 'sm',
  elementRef,
  title,
  disabled = false,
  color = 'blue',
  ...others
}: RadioProps) {
  const { classes, css } = useStyles({ color, size, themeOverride, disabled });
  return (
    <div
      data-mantine-radio
      css={css.wrapper}
      className={cx(classes.wrapper, className)}
      style={style}
      title={title}
    >
      <label css={css.label} className={cx(classes.label)}>
        <input
          ref={elementRef}
          className={classes.radio}
          css={css.radio}
          type='radio'
          disabled={disabled}
          {...others}
        />
        <span>{children}</span>
      </label>
    </div>
  );
}

Radio.displayName = '@mantine/core/Radio';

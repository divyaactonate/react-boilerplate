/** @jsxImportSource @emotion/react */
// import cx from 'clsx';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import { BeautifySize, DefaultProps } from '@library/theme';
import { useState } from 'react';
import { useStyles } from './PasswordInput.styles';
export interface PasswordInputProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size'> {
  size?: BeautifySize;
  isInvalid?: boolean;
  radius?: BeautifySize;
  elementRef?: React.ForwardedRef<HTMLInputElement>;
}
export const PasswordInput = ({
  size = 'md',
  radius = 'sm',
  themeOverride,
  isInvalid = false,
  elementRef,
  ...others
}: PasswordInputProps) => {
  const { classes, css } = useStyles({ themeOverride, size, isInvalid, radius });
  const [visible, setvisible] = useState(true);
  return (
    // <div data-beautify-textinput css={css.textinput} className={cx(classes.textinput)}>
    <div className={classes.wrapper}>
      <input
        ref={elementRef}
        type={visible ? 'password' : 'text'}
        css={css.textinput}
        autoComplete='off'
        className={classes.textinput}
        {...others}
      />
      <div css={css.iconWrapper} className={classes.iconWrapper}>
        {visible ? (
          <EyeIcon
            onClick={() => setvisible((e) => !e)}
            className={classes.iconClass}
            css={css.iconClass}
            aria-hidden='true'
          />
        ) : (
          <EyeOffIcon
            onClick={() => setvisible((e) => !e)}
            className={classes.iconClass}
            css={css.iconClass}
            aria-hidden='true'
          />
        )}
      </div>
    </div>
    // </div>
  );
};
PasswordInput.displayName = '@beautify/core/PasswordInput';

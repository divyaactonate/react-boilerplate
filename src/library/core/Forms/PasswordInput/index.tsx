/** @jsxImportSource @emotion/react */
// import cx from 'clsx';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import { BeautifySize, DefaultProps } from '@library/theme';
import { ComponentPassThrough } from '@library/types';
import { useState } from 'react';
import { useStyles } from './PasswordInput.styles';

export interface PasswordInputProps extends DefaultProps {
  size?: BeautifySize;
  radius?: BeautifySize;
}
export const PasswordInput = <
  T extends React.ElementType = 'input',
  U extends HTMLElement = HTMLInputElement
>({
  size = 'md',
  radius = 'sm',
  themeOverride,
  ...others
}: ComponentPassThrough<T, PasswordInputProps> & {
  /** Get element ref */
  elementRef?: React.ForwardedRef<U>;
}) => {
  const { classes, css } = useStyles({ themeOverride, size, radius });
  const [visible, setvisible] = useState(true);
  return (
    // <div data-beautify-textinput css={css.textinput} className={cx(classes.textinput)}>
    <div className={classes.wrapper}>
      <input
        {...others}
        type={visible ? 'password' : 'text'}
        css={css.textinput}
        className={classes.textinput}
      />
      <div className={classes.iconWrapper}>
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

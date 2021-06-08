/** @jsxImportSource @emotion/react */
import cx from 'clsx';
import { useStyles } from './ErrorLabel.styles';
import { DefaultProps } from '@library/theme';

export interface ErrorLabelProps extends DefaultProps {
  errorMessage?: any;
  name?: string | undefined;
  className?: string;
}
export const ErrorLabel = ({ errorMessage, className, themeOverride }: ErrorLabelProps) => {
  const { classes, css } = useStyles({ themeOverride });
  // if (errors && name && Object.keys(errors).length > 0 && errors[name]) {
  return (
    <span
      data-beautify-errorlabel
      css={css.errorlabel}
      className={cx(classes.errorlabel, className)}
    >
      {errorMessage}
      {/* {errors[name]?.message} */}
    </span>
  );
  // }
  // return null;
};
ErrorLabel.displayName = '@beautify/core/ErrorLabel';

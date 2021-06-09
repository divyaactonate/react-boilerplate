/** @jsxImportSource @emotion/react */
import { useStyles } from './Label.styles';
import { BeautifyCase, BeautifyWeight, DefaultProps } from '@library/theme';

export interface LabelProps extends DefaultProps {
  label?: string;
  size?: string;
  weight?: BeautifyWeight;
  required?: boolean;
  isInvalid?: boolean;
  transform?: BeautifyCase;
}
export const Label = ({
  themeOverride,
  label,
  size = 'sm',
  weight = 'extrabold',
  isInvalid = false,
  required = false,
  transform = 'capitalize',
}: LabelProps) => {
  const { classes, css } = useStyles({ themeOverride, transform, isInvalid, size, weight });
  return (
    <label data-beautify-label css={css.label} htmlFor={label} className={classes.label}>
      {label}
      {required && (
        <span data-mantine-required className={classes.required}>
          *
        </span>
      )}
    </label>
  );
};
Label.displayName = '@beautify/core/Label';

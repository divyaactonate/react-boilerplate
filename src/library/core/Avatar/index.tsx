/** @jsxImportSource @emotion/react */
import { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import cx from 'clsx';
import { PlaceholderIcon } from './PlaceholderIcon';
import { useStyles } from './Avatar.styles';
import { BeautifySize, DefaultProps } from '@library/theme';

export interface AvatarProps extends DefaultProps, ComponentPropsWithoutRef<'div'> {
  /** Image url */
  src?: string;

  /** Image alt text or title for placeholder variant */
  alt?: string;

  /** Avatar width and height */
  size?: BeautifySize;

  /** Predefined border-radius value from theme.radius or number for border-radius in px */
  radius?: BeautifySize;

  /** Color from theme used for letter and icon placeholders */
  color?: string;
}

export function Avatar({
  className,
  size = 'md',
  src,
  alt,
  radius = 'sm',
  children,
  color = 'gray',
  themeOverride,
  ...others
}: AvatarProps) {
  const { classes, css } = useStyles({ color, radius, size, themeOverride });
  const [error, setError] = useState(!src);

  useEffect(() => {
    !src ? setError(true) : setError(false);
  }, [src]);

  return (
    <div {...others} css={css.avatar} className={cx(classes.avatar, className)}>
      {error ? (
        <div
          data-beautify-placeholder
          css={css.placeholder}
          className={classes.placeholder}
          title={alt}
        >
          {children || <PlaceholderIcon css={css.placeholderIcon} />}
        </div>
      ) : (
        <img className={classes.image} src={src} alt={alt} onError={() => setError(true)} />
      )}
    </div>
  );
}

Avatar.displayName = '@beautify/core/Avatar';

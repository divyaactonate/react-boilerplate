/** @jsxImportSource @emotion/react */
import React from 'react';
import cx from 'clsx';
import { Text } from '../Text';
import { Paper } from '../Paper';
import { useStyles } from './Alert.styles';
import { BeautifyShadow, DefaultProps } from '@library/theme';
import {
  CheckCircleIcon as CheckIcon,
  ExclamationCircleIcon as WarningIcon,
  InformationCircleIcon as InfoIcon,
} from '@heroicons/react/outline';

export interface AlertProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Optional alert title */
  title?: React.ReactNode;

  /** Alert message */
  children: React.ReactNode;

  /** Alert message */
  icon?: React.ReactNode;

  /** Alert message */
  status?: 'error' | 'success' | 'warning' | 'info';

  /** Alert message */
  variant?: 'subtle' | 'solid' | 'leftAccent' | 'topAccent';

  /** Alert title and line colorSchemes from theme */
  color?: string;

  /** Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property */
  shadow?: BeautifyShadow;
}

const STATUSES = {
  info: { icon: InfoIcon, color: 'blue' },
  warning: { icon: WarningIcon, color: 'orange' },
  success: { icon: CheckIcon, color: 'green' },
  error: { icon: WarningIcon, color: 'red' },
};

export function Alert({
  className,
  title,
  icon,
  children,
  color,
  variant = 'subtle',
  status = 'info',
  shadow = 'sm',
  themeOverride,
  ...others
}: AlertProps) {
  const colorSelected = color || STATUSES[status].color;
  const Icon = STATUSES[status].icon || InfoIcon;
  const { classes, css } = useStyles({
    color: colorSelected,
    isTitle: title,
    variant,
    themeOverride,
  });

  return (
    <Paper
      data-beautify-alert-wrapper
      shadow={shadow}
      css={css[variant]}
      className={cx(classes.alert, className)}
      {...others}
    >
      {icon || <Icon css={css.iconClass} className={classes.iconClass} />}
      <div data-beautify-alert-content className={classes.contentWrapper}>
        {title && (
          <Text css={css.title} data-beautify-alert-title className={classes.title}>
            {title}
          </Text>
        )}

        <div css={css.body} data-beautify-alert-body className={classes.body}>
          {children}
        </div>
      </div>
    </Paper>
  );
}

Alert.displayName = '@beautify/core/Alert';

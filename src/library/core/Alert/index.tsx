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
  colorScheme?: string;

  /** Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property */
  shadow?: BeautifyShadow;
}

const STATUSES = {
  info: { icon: InfoIcon, colorScheme: 'blue' },
  warning: { icon: WarningIcon, colorScheme: 'orange' },
  success: { icon: CheckIcon, colorScheme: 'green' },
  error: { icon: WarningIcon, colorScheme: 'red' },
};

export function Alert({
  className,
  title,
  icon,
  children,
  colorScheme,
  variant = 'subtle',
  status = 'info',
  shadow = 'sm',
  ...others
}: AlertProps) {
  const colorSelected = colorScheme || STATUSES[status].colorScheme;
  const Icon = STATUSES[status].icon || InfoIcon;
  const classes = useStyles({ colorScheme: colorSelected, isTitle: title, variant });

  return (
    <Paper
      data-beautify-wrapper
      shadow={shadow}
      className={cx(classes.alert, classes[variant], className)}
      {...others}
    >
      {icon || <Icon className={classes.iconClass} />}
      <div data-beautify-alert-content className={classes.contentWrapper}>
        {title && (
          <Text data-beautify-alert-title className={classes.title}>
            {title}
          </Text>
        )}

        <div data-beautify-alert-body className={classes.body}>
          {children}
        </div>
      </div>
    </Paper>
  );
}

Alert.displayName = '@beautify/core/Alert';

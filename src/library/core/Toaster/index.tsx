import { ExclamationIcon, InformationCircleIcon } from '@heroicons/react/solid';
import { toast } from 'react-hot-toast';

/**
 *
 * Toaster
 *
 */

type toastContent = {
  loading: any;
  success: any;
  error: any;
};
export interface ToasterProps {
  message?: string;
  duration?: number;
  reverseOrder?: boolean;
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
  style?: any;
  className?: string;
  functionName?: Promise<any>;
  icon?: any;
  iconTheme?: any;
  role?: any;
  ariaLive?: any;
  content?: toastContent;
}

const ToastFunction = () => {
  const error = (props: ToasterProps) => {
    const {
      message = '',
      ariaLive,
      className,
      position,
      reverseOrder,
      duration,
      icon,
      iconTheme,
      role,
      style,
    } = props;
    const options = {
      ariaLive,
      className,
      duration,
      icon,
      position,
      reverseOrder,
      iconTheme,
      role,
      style,
    };
    toast.error(message, options);
  };
  const success = (props: ToasterProps) => {
    const {
      message = '',
      ariaLive,
      className,
      position,
      reverseOrder,
      duration,
      icon,
      iconTheme,
      role,
      style,
    } = props;
    const options = {
      ariaLive,
      className,
      duration,
      icon,
      position,
      reverseOrder,
      iconTheme,
      role,
      style,
    };
    toast.success(message, options);
  };
  const warning = (props: ToasterProps) => {
    const {
      message = '',
      ariaLive,
      className,
      duration,
      position,
      reverseOrder,
      icon = <ExclamationIcon />,
      iconTheme = {
        primary: '#faf089',
        secondary: '#faf089',
      },
      role,
      style = { backgroundColor: '#f6e05e', color: '#3D3D3D' },
    } = props;
    const options = {
      ariaLive,
      position,
      reverseOrder,
      className,
      duration,
      icon,
      iconTheme,
      role,
      style,
    };
    toast(message, options);
  };
  const info = (props: ToasterProps) => {
    const {
      message = '',
      ariaLive,
      position,
      reverseOrder,
      className,
      duration,
      icon = <InformationCircleIcon />,
      style = { backgroundColor: '#63B3ED', color: '#fff' },
      iconTheme = {
        primary: '#000',
        secondary: '#000',
      },
      role,
    } = props;
    const options = {
      ariaLive,
      position,
      reverseOrder,
      className,
      duration,
      icon,
      iconTheme,
      role,
      style,
    };
    toast(message, options);
  };
  const simple = (props: ToasterProps) => {
    const {
      message = '',
      position,
      reverseOrder,
      ariaLive,
      className,
      duration,
      icon,
      iconTheme,
      role,
      style,
    } = props;
    const options = {
      ariaLive,
      position,
      reverseOrder,
      className,
      duration,
      icon,
      iconTheme,
      role,
      style,
    };
    toast(message, options);
  };
  const promise = (props: ToasterProps) => {
    const {
      functionName,
      content = {
        loading: 'Saving...',
        success: <b>Settings saved!</b>,
        error: <b>Could not save.</b>,
      },
    } = props;
    if (functionName) {
      toast.promise(functionName, content);
    }
  };
  const custom = (props: ToasterProps) => {
    return toast((t) => (
      <span>
        Custom and <b>bold</b> and <b>{props.message}</b>
        <button
          className='p-1.5 border bg-gray-100 rounded-lg border-black-200 ext-md text-gray-700 ml-3'
          onClick={() => toast.dismiss(t.id)}
        >
          Dismiss
        </button>
      </span>
    ));
  };
  const loading = (props: ToasterProps) => {
    const { message = 'Waiting for the action to complete...' } = props;
    toast.loading(message);
  };
  return {
    simple,
    success,
    promise,
    warning,
    error,
    custom,
    info,
    loading,
  };
};

const func = ToastFunction();
const Toaster = {
  error: func.error,
  info: func.info,
  success: func.success,
  simple: func.simple,
  custom: func.custom,
  warning: func.warning,
  promise: func.promise,
  loading: func.loading,
};
export { Toaster };
ToastFunction.displayName = '@beautify/core/ToastFunction';

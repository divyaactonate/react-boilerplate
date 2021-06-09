import cx from 'clsx';

// interface StyleProps {}
export const useStyles = () => {
  // const {} = props;
  const classes = {
    wrapper: `min-h-screen flex bg-repeat-space flex-col justify-center py-6 sm:px-6 lg:px-8`,
    headingWrapper: `sm:mx-auto sm:w-full sm:max-w-md`,
    heading: `mt-6 text-center text-gray-800 text-2xl font-extrabold`,
    icon: `mx-auto h-12 w-auto`,
    formWrapper: cx(
      `sm:mx-auto sm:w-full sm:max-w-md shadow sm:rounded-lg sm:px-10`,
      `mt-4 py-8 px-4 border border-gray-200 bg-white `
    ),
    bottomWrapper: `flex items-center mt-5 justify-between`,
    checkboxWrapper: `flex items-center space-x-2`,
  };

  const css = {
    wrapper: {
      backgroundImage: `url(/assets/svg/loginBackground.svg)`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
  };
  const styles = {};

  return { classes, styles, css };
};

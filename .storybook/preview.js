import '../src/styles.css';
import { ToastProvider } from '../src/providers/toaster';
import { GLOBAL_THEME } from '../src/styles/global-theme';
import { BeautifyProvider } from '../src/library/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
export const decorators = [
  (Story) => (
    <BeautifyProvider theme={GLOBAL_THEME}>
      <div>
        <ToastProvider />
        <Story />
      </div>
    </BeautifyProvider>
  ),
];
// addDecorator(toastDecorator);

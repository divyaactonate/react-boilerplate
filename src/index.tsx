import { AllProviders } from '@providers';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import 'tailwindcss/dist/base.min.css';
// import './styles.css';

import { App } from './App';
// import * as Sentry from '@sentry/react'

// Sentry.init({ dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0' })

render(
  // <Sentry.ErrorBoundary fallback={'An error has occurred'}>
  <StrictMode>
    <AllProviders>
      <App />
    </AllProviders>
  </StrictMode>,
  // </Sentry.ErrorBoundary>,
  document.getElementById('root')
);

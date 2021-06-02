import { Logger, LoggerLevels } from '@libs/logger';
import { AllProviders } from '@providers';
import { StrictMode, Suspense } from 'react';
import { render } from 'react-dom';
import { App } from './App';
// import 'tailwindcss/dist/base.min.css';
// import './styles.css';
import './styles/main.css';
import './styles/globals.css';

// import 'react-contexify/dist/ReactContexify.css';
import './styles/react-contextify.css';

// import * as Sentry from '@sentry/react'

// Sentry.init({ dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0' })
Logger.setLevel(LoggerLevels.INFO);

render(
  // <Sentry.ErrorBoundary fallback={'An error has occurred'}>
  <Suspense fallback={<>Loading...</>}>
    <StrictMode>
      <AllProviders>
        <App />
      </AllProviders>
    </StrictMode>
  </Suspense>,
  // </Sentry.ErrorBoundary>,
  document.getElementById('root')
);

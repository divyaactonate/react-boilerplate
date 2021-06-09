import { Logger, LoggerLevels } from '@utils/logger';
import { AllProviders } from '@providers';
import { StrictMode, Suspense } from 'react';
import { render } from 'react-dom';
import { App } from './App';
import '@styles';
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

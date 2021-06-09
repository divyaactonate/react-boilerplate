import { Logger, LoggerLevels } from '@libs/logger';
import { AllProviders } from '@providers';
import { StrictMode, Suspense } from 'react';
import { render } from 'react-dom';
import { App } from './App';
import '@styles';
import { initJsStore } from './services/indexDBStorage/IdbService';
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

// Init jsstore to use local indexdb of browser
initJsStore();

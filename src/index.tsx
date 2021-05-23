import { Logger, LoggerLevels } from '@libs/logger';
import { AllProviders } from '@providers';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import { App } from './App';
// import 'tailwindcss/dist/base.min.css';
import './styles.css';

// import * as Sentry from '@sentry/react'

// Sentry.init({ dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0' })
Logger.setLevel(LoggerLevels.INFO);

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

import * as ReactDOM from 'react-dom';
import { App } from './App';
import { AllProviders } from '@providers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AllProviders>
      <App />
    </AllProviders>,
    div
  );
});

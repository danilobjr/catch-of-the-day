import './styles';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App, AppProvider } from './components/App';

ReactDOM.render((
  <AppProvider>
    <App />
  </AppProvider>
), document.getElementById('app'));

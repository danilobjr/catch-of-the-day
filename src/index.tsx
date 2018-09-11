import './styles';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';
import { AppProvider } from './components/AppContext';

ReactDOM.render((
  <AppProvider>
    <App />
  </AppProvider>
), document.getElementById('app'));

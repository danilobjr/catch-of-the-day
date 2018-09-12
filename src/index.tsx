import 'styles';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App, ContextProvider } from 'components';

ReactDOM.render((
  <ContextProvider>
    <App />
  </ContextProvider>
), document.getElementById('app'));

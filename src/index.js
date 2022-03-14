import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { FormContextProvider } from './store/form-context'

ReactDOM.render(
  <React.StrictMode>
    <FormContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FormContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
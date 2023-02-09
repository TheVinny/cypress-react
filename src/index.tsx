import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import App from './shared/App';
import { Provider } from './shared/ContextApi/Provider';
import './shared/Global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ToastContainer />
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
);

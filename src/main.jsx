// Import core React libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import Root Component, Security Layer & Styles
import App from './App';
import SecurityLayer from './components/Security and Protection/SecurityLayer';
import './index.css';

// Render the application into the root DOM element with StrictMode enabled
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SecurityLayer>
      <App />
    </SecurityLayer>
  </React.StrictMode>,
);

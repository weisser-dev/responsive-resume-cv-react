import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {LanguageProvider} from "./hooks/useLanguage"; // Your base styles


ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <App/>
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

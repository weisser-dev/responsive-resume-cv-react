import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {LanguageProvider} from './hooks/useLanguage';
import './index.css';


createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <LanguageProvider>
        <App/>
      </LanguageProvider>
    </Router>
  </React.StrictMode>
);

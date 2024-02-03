import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {LanguageProvider} from './hooks/useLanguage';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LanguageProvider>
        <App/>
      </LanguageProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

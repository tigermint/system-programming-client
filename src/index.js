import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { GlobalStyles } from './commonStyles';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <GlobalStyles />
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Router>
);


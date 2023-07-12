import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { IssueProvider } from './context/IssueContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <IssueProvider>
    <App />
  </IssueProvider>
);

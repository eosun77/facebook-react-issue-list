import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { IssueProvider } from './context/IssueContext';
import { IssueService } from './service/IssueService';
import { AxiosInstance } from './util/axiosInstance';

const root = ReactDOM.createRoot(document.getElementById('root'));

//bootstrapping
// Dependency Injection
//
const axiosInstance = AxiosInstance(process.env.REACT_APP_BASE_URL);
const issueService = new IssueService(axiosInstance);
root.render(
  <IssueProvider issueService={issueService}>
    <App />
  </IssueProvider>
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import  notificationsContextProvider and make it as high order as possible by wrapping the entire app around it.
import NotificationsContextProvider from './Notifications/NotificationsContextProvider';
ReactDOM.render(
  <React.StrictMode>
    <NotificationsContextProvider>
      <App />
    </NotificationsContextProvider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

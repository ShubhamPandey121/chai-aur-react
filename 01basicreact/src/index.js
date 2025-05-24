import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); 
// here reactDom means react can also have its own DOM and createRoot is a function
/*
=>Browser ka apna bhi DOM hota hai but react kya krta hai ki apna DOM bnata hai jissa hum virtual DOM kehta hai
=>And uss ReactDOM ka under aak method hai createRoot 
 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

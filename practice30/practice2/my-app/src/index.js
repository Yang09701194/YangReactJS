import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const counters = Array.from({length: 10}, (_, index) => index);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <div>
  ` <App />
    <App />
    <App />
    {
      counters.map(
        (item) => { return  <App /> }
      )
    }`
  </div>
    

  // </React.StrictMode>
);

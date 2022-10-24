import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import Calculator from './components/Calculator.jsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);


reportWebVitals();

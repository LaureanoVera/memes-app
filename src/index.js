import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

console.log('%cAuthor: Laureano Vera', 'background: #2a2a2c; padding: 20px 48px; border-radius: 5px')
console.log('Github:','https://github.com/LaureanoVera')
console.log('Portfolio:','https://portfolio-lv.netlify.app/')
console.log('Linkedin:','https://www.linkedin.com/in/laureano-vera-320086204/')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

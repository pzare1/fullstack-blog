import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/jquery/dist/jquery.js'
import'../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

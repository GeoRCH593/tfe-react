import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import UserRegister from './context/UserRegister';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserRegister/>
  </React.StrictMode>,
)

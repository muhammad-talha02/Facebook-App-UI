import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.jsx'
import "./style.css";
import { AuthContextProvider } from './context/AuthContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
  </React.StrictMode>
)

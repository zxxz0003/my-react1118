import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import App from './App6.jsx'
import { BrowserRouter } from 'react-router-dom'
//import './assets/all.scss'
import './App.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
   
  
  </React.StrictMode>,
)

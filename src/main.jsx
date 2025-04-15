import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Router from './routes.jsx'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from "react-dom/client"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
)

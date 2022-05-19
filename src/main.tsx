import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Layout } from './components/Layout'
import MainRoutes from './routes'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainRoutes />
  </React.StrictMode>
)

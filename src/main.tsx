import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import GlobalContext from './contexts'

import App from './App'
import { Layout } from './components/Layout'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContext>
        <App />
      </GlobalContext>
    </BrowserRouter>
  </React.StrictMode>
)

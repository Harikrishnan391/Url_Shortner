import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store.js'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

  <React.StrictMode>
    <BrowserRouter >
    <ToastContainer />
    <App />
    
    </BrowserRouter>
  </React.StrictMode>
  </Provider>

)

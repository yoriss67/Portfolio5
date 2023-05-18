import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {App, Bio} from "./index"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Bio />
  </React.StrictMode>,
)

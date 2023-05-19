import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {App, Bio, Avatar, Currently} from "./index"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Bio />
    <Avatar />
    <Currently />
  </React.StrictMode>,
)

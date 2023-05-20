import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Board, Bio, Avatar, Currently, Projects} from "./index"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Board /> */}
    <Bio />
    <Projects />
    {/* <Avatar /> */}
    <Currently />
  </React.StrictMode>,
)

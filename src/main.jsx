// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import {Board, Bio, Avatar, Currently, Projects, Global} from "./index"

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Global />
//     {/* <Board /> */}
//     <Bio />
//     <Projects />
//     {/* <Avatar /> */}
//     <Currently />
//   </React.StrictMode>,
// )

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Board, Bio, Avatar, Currently, Projects, Global } from './index';

function Main() {
  const [isJapanese, setLanguage] = useState(false);
  return (
    <React.StrictMode>
      <Global isJapanese={isJapanese} setLanguage={setLanguage} />
      <Board />
      <Bio isJapanese={isJapanese} />
      <Projects isJapanese={isJapanese} />
      <Avatar />
      <Currently />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);

// import React, { useState }  from 'react'
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
import { Header, Board, Bio, Avatar, Currently, Works, Global, Horizontal, Gsap} from './index';

// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Main() {
  const [isJapanese, setLanguage] = useState(false);
  return  (
    <>
      <Global isJapanese={isJapanese} setLanguage={setLanguage} />
      <Header />
      <Bio isJapanese={isJapanese} />
      <Board />
      <Works isJapanese={isJapanese} />
      <Avatar />
      {/* <Horizontal /> */}
      {/* <Gsap /> */}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);


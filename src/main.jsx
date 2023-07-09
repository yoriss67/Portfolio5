
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import {  Hero, Bio, Avatar, Currently, Works, Global, Navbar, Home, About, Contact} from './index';

import {  Hero, Bio, Avatar, Currently, Works, Global, Navbar} from './index';

// import App from './components/App';
// import { BrowserRouter } from 'react-router-dom';

// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Main() {
  const [isJapanese, setLanguage] = useState(false);
  return  (
    <>
      <Global isJapanese={isJapanese} setLanguage={setLanguage} />
      <Navbar />
      <Hero isJapanese={isJapanese} />
      <Bio isJapanese={isJapanese} />
      <Works isJapanese={isJapanese} />
      <Avatar />
      <Currently  isJapanese={isJapanese}/>
    </>
  );

}

// function Main() {
//   const [isJapanese, setLanguage] = useState(false);
  
//   return  (
//     <React.StrictMode>
//     <BrowserRouter>
//     <code>This is main.jsx</code>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
//   );
// }


ReactDOM.createRoot(document.getElementById('root')).render(<Main />);



import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header, Hero, Bio, Avatar, Currently, Works, Global, Horizontal, Gsap, Navbar} from './index';

// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Main() {
  const [isJapanese, setLanguage] = useState(false);
  return  (
    <>
      <Global isJapanese={isJapanese} setLanguage={setLanguage} />
      {/* <Header /> */}
      <Navbar />
      <Hero isJapanese={isJapanese} />
      <Bio isJapanese={isJapanese} />
      <Works isJapanese={isJapanese} />
      <Avatar />
      <Currently />
      {/* <Horizontal /> */}
      {/* <Gsap /> */}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);


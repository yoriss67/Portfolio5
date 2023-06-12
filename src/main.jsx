
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'animate.css';
import {  Hero, Bio, Avatar, Currently, Works, Global, Navbar, Framer} from './index';


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
      {/* <Framer /> */}
    </>
  );

//   <Router>
//   <Global isJapanese={isJapanese} setLanguage={setLanguage} />
//   <Navbar />

//   <Routes>
//     <Route path="/" exact>
//       <>
//         {/* <Hero isJapanese={isJapanese} /> */}
//         <Bio isJapanese={isJapanese} />
//         <Works isJapanese={isJapanese} />
//         <Avatar />
//         <Currently isJapanese={isJapanese} />
//       </>
//     </Route>

//     {/* Include other Routes here for different paths */}
//   </Routes>
// </Router>

}


ReactDOM.createRoot(document.getElementById('root')).render(<Main />);


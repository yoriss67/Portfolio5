<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./components/css/index.css";
import { Header,Home, Work1, Work2, Global } from "./index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

=======
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './components/css/index.css';
import { Hero, Bio, Currently, Works, Global, Navbar, Footer, Note, ParallaxComponent, Lottie1 } from './index';
>>>>>>> bcd281b (Portfolio5)


const App = () => {
  const [isJapanese, setLanguage] = useState(true);
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const socialElement = document.querySelector(".social");
  //     if (socialElement) {
  //       // social要素の上部がビューポート上部に到達したかどうかを確認
  //       const socialTop = socialElement.getBoundingClientRect().top;

  //       if (socialTop * 7 < scrollY) {
  //         // sticky状態になる条件
  //         setStickySocial(true);
  //         console.log("sticky");
  //       } else {
  //         setStickySocial(false);
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // // spとpcで表示を変える
  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);



  return (
    <Router>
      <Global isJapanese={isJapanese} setLanguage={setLanguage} />
      <Routes>
        <Route path="/" element={<Home isJapanese={isJapanese} />} />
        <Route path="/work1" element={<Work1 />} />
        <Route path="/work2" element={<Work2 />} />
      </Routes>



<<<<<<< HEAD
=======
      {/* <div className="social" style={{ gap: stickySocial ? '4rem' : '3rem', scale: stickySocial ?  '1.1' : '1'  }}> */}
      <div className="social" style={socialStyle}>
        {socialLinks.map((link, index) => (
          <a
            key={index}
            className={`social-icon`}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
          >
            <img src={link.src} alt={link.label} className="social-icon" />
          </a>
        ))}
      </div>
      <Bio isJapanese={isJapanese} />
      <Works isJapanese={isJapanese} />
      <Note isJapanese={isJapanese} />
      <Footer />
      <Lottie1 />
>>>>>>> bcd281b (Portfolio5)
      {/* <ParallaxComponent /> */}
    </Router>
  );
};

export default App;


// 🌸
import React, { useEffect } from 'react';
import './Currently.css';

function Currently() {
  useEffect(() => {
    // const currentlyLeftElement = document.querySelector('.currently_left');
    // const currentlyMiddleElement = document.querySelector('.currently_middle');
    // const currentlyRightElement = document.querySelector('.currently_right');

    // currentlyLeftElement.addEventListener('animationend', () => {
    //   currentlyMiddleElement.style.opacity = 1;
    //   // currentlyMiddleElement.style.left = '35%'; // currently_rightの初期位置（画面の中央）に設定
      
    // });
  }, []);

  return (
    <>
      <div className="currently_pa">
        <img src='netlify-digital-card.png' className="slideAndRotate currently_left " />
        <img src='netlify-travel-journal.png' className="slideAndRotate currently_middle" />.
        <img src='netlify-meme.png' className="slideAndRotate currently_right " />
      </div>
    </>
  );
}

export default Currently;
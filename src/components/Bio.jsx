

// // 🌸
// import React, { useRef, useEffect, useState } from 'react';
// // import './Bio.css';

// function Bio({isJapanese}) {
//   useEffect(() => {
//     const bioLeftElement = document.querySelector('.bio_left');
//     const bioRightElement = document.querySelector('.bio_right');

//     bioLeftElement.addEventListener('animationend', () => {
//       bioRightElement.style.opacity = 1;
//       // bioRightElement.style.left = '50%'; // bio_rightの初期位置（画面の中央）に設定
//     });
//   }, []);

//   return (
//     <div>
//       <div className="bio_pa">
//         <div className="bio_left"></div>
//         <div className="bio_right"></div>

//         <div>
//               <p className={`bio_right left-align toggleBox-en ${isJapanese ? 'display-none' : ''}`}>Hello</p>
//               <p className={`bio_right left-align toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>こんにちは</p>
//             </div>
//       </div>
//     </div>
//   );
// }

// export default Bio;


import React, { useEffect, useState } from 'react';
// import './Bio.css';

function Bio({isJapanese}) {
  const [animationClass, setAnimationClass] = useState('animated');

  useEffect(() => {
    setAnimationClass('animated');
    const timer = setTimeout(() => {
      setAnimationClass('');
    }, 5000); // remove the animation class after 5 seconds

    // Cleanup function to clear the timer if the component is unmounted before the timeout finishes
    return () => {
      clearTimeout(timer);
    }
  }, []); // run this effect only once, when the component mounts

  return (
    <div>
      <div className={`bio_pa ${animationClass}`}>
        <div className="bio_left"></div>
        <div className="bio_right"></div>

        <div>
          <p className={`bio_right left-align toggleBox-en ${isJapanese ? 'display-none' : ''}`}>Hello</p>
          <p className={`bio_right left-align toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>こんにちは</p>
        </div>
      </div>
    </div>
  );
}

export default Bio;

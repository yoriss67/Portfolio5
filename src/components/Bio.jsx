

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
        <img className="bio_left" src='/public/bali-profile.png'></img>
        <div className="bio_right"></div>

        <div>
          <p className={`bio_right left-align toggleBox-en ${isJapanese ? 'display-none' : ''}`}>As a self-taught learner, I continuously pursue new challenges and opportunities to sharpen my abilities. My passion lies in acquiring knowledge and staying abreast with the latest advancements that have the potential to improve our lives. Driven by curiosity and a desire for personal growth, I strive to turn insights into impactful actions.</p>
          <p className={`bio_right left-align toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>独学で学ぶ者として、私は自分の能力を磨くために新しい挑戦と機会を追い求め続けています。私の情熱は、知識を身につけ、私たちの生活を向上させる可能性のある最新の進歩に遅れないようにすることにあります。好奇心と自己成長への欲求に突き動かされ、自分なりの考えをインパクトある行動につなげるよう努力しています。</p>
        </div>
      </div>
    </div>
  );
}

export default Bio;

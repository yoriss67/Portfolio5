// import React, { useEffect, useState } from 'react';
// // import './Bio.css';
// import { useInView } from 'react-intersection-observer';

// function Bio({isJapanese}) {
//   const [animationClass, setAnimationClass] = useState('animated');

//   // useEffect(() => {
//   //   setAnimationClass('animated');
//   //   const timer = setTimeout(() => {
//   //     setAnimationClass('');
//   //   }, 5000); // remove the animation class after 5 seconds

//   //   // Cleanup function to clear the timer if the component is unmounted before the timeout finishes
//   //   return () => {
//   //     clearTimeout(timer);
//   //   }
//   // }, []); // run this effect only once, when the component mounts

//   // 🌸 理解していない！
//   // useEffect(() => {
//   //   setAnimationClass('animated');
//   //   const timer = setTimeout(() => {
//   //     setAnimationClass('');
//   //   }, 6000); // remove the animation class after 5 seconds

//   //   // Cleanup function to clear the timer if the component is unmounted before the timeout finishes
//   //   return () => {
//   //     clearTimeout(timer);
//   //   }
//   // }, []); // run this effect only once, when the component mounts

//   const { ref, inView } = useInView({
//     // オプション
//     rootMargin: '-10px', // ref要素が現れてから50px過ぎたら
//     triggerOnce: true, // 最初の一度だけ実行
//   });

//   return (
//     <div  ref={ref} style={{ height: '30vh', border: '1px solid salmon'}}>
//        {inView && (
//       <div className={`bio_pa ${animationClass}`}>
//         <img className="bio_left" src='/public/bali-profile.png'></img>
//         <div className="bio_right"></div>

//         <div>
//           <p className={`bio_right left-align toggleBox-en ${isJapanese ? 'display-none' : ''}`}>As a self-taught learner, I continuously pursue new challenges and opportunities to sharpen my abilities. My passion lies in acquiring knowledge and staying abreast with the latest advancements that have the potential to improve our lives. Driven by curiosity and a desire for personal growth, I strive to turn insights into impactful actions.</p>
//           <p className={`bio_right left-align toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>独学で学ぶ者として、私は自分の能力を磨くために新しい挑戦と機会を追い求め続けています。私の情熱は、知識を身につけ、私たちの生活を向上させる可能性のある最新の進歩に遅れないようにすることにあります。好奇心と自己成長への欲求に突き動かされ、自分なりの考えをインパクトある行動につなげるよう努力しています。</p>
//         </div>
//       </div>
//        )}
//     </div>
//   );
// }

// export default Bio;
// ーーーーーーーーーーーー



import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function Bio({isJapanese}) {
  const [animationClass, setAnimationClass] = useState('');
  const [isFirstLanguageChange, setIsFirstLanguageChange] = useState(true);

  // useEffect(() => {
  //   if (isFirstLanguageChange) {
  //     setAnimationClass('animated');
  //     const timer = setTimeout(() => {
  //       setAnimationClass('');
  //     }, 5000); // remove the animation class after 5 seconds
  //     setIsFirstLanguageChange(false);

  //     // Cleanup function to clear the timer if the component is unmounted before the timeout finishes
  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }
  // }, [isJapanese]); // run this effect when isJapanese changes
 
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '10px', // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  return (
    <div ref={ref} style={{ height: '30vh' }}>
      {inView && (
        // <div className={`bio_pa ${animationClass}`}>
        <div className="bio_pa">

          <img className="bio_left" src="profile.png"></img>
       
            <div className={`bio_right left-align toggleBox-en ${isJapanese ? 'display-none' : ''}`}>
              As a self-taught learner, I continuously pursue new challenges and
              opportunities to sharpen my abilities. My passion lies in
              acquiring knowledge and staying abreast with the latest
              advancements that have the potential to improve our lives. Driven
              by curiosity and a desire for personal growth, I strive to turn
              insights into impactful actions.
            </div>
            <div className={`bio_right left-align toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>
              独学で学ぶ者として、私は自分の能力を磨くために新しい挑戦と機会を追い求め続けています。私の情熱は、知識を身につけ、私たちの生活を向上させる可能性のある最新の進歩に遅れないようにすることにあります。好奇心と自己成長への欲求に突き動かされ、自分なりの考えをインパクトある行動につなげるよう努力しています。
            </div>
          </div>
        
      )}
    </div>
  );
}

export default Bio;



// ーーーーーーーーーーーー
// // 🌸　だめ
// import React, { useEffect, useRef } from 'react';
// import { useInView } from 'react-intersection-observer';

// function Bio({isJapanese}) {
//   const hasAnimated = useRef(false);

//   const { ref, inView } = useInView({
//     rootMargin: '10px',
//     triggerOnce: true,
//   });

//   useEffect(() => {
//     if (inView && !hasAnimated.current) {
//       hasAnimated.current = true;
//       const bioPaElement = ref.current.querySelector('.bio_pa');
//       bioPaElement.classList.add('animated');

//       const timer = setTimeout(() => {
//         bioPaElement.classList.remove('animated');
//       }, 5000); // remove the animation class after 5 seconds

//       // Cleanup function to clear the timer if the component is unmounted before the timeout finishes
//       return () => {
//         clearTimeout(timer);
//       };
//     }
//   }, [inView]); // run this effect when inView changes

//   return (
//     <div ref={ref} style={{ height: '30vh', border: '1px solid salmon' }}>
//       {inView && (
//         <div className="bio_pa">
//           <img className="bio_left" src="/public/bali-profile.png"></img>
//           <div className={`bio_right left-align toggleBox-en ${isJapanese ? 'display-none' : ''}`}>
//             As a self-taught learner, I continuously pursue new challenges and
//             opportunities to sharpen my abilities. My passion lies in
//             acquiring knowledge and staying abreast with the latest
//             advancements that have the potential to improve our lives. Driven
//             by curiosity and a desire for personal growth, I strive to turn
//             insights into impactful actions.
//           </div>
//           <div className={`bio_right left-align toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>
//             独学で学ぶ者として、私は自分の能力を磨くために新しい挑戦と機会を追い求め続けています。私の情熱は、知識を身につけ、私たちの生活を向上させる可能性のある最新の進歩に遅れないようにすることにあります。好奇心と自己成長への欲求に突き動かされ、自分なりの考えをインパクトある行動につなげるよう努力しています。
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Bio;

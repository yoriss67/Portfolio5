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
import 'animate.css';
import '../index.css'

function Bio({ isJapanese }) {
  // const [animationClass, setAnimationClass] = useState('');
  // const [isFirstLanguageChange, setIsFirstLanguageChange] = useState(true);

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

  // const { ref, inView } = useInView({
  //   rootMargin: '-300px', // ref要素が現れてから50px過ぎたら
  //   triggerOnce: true, // 最初の一度だけ実行
  // });

  // const [animationClass, setAnimationClass] = useState('');
  // const [isFirstLanguageChange, setIsFirstLanguageChange] = useState(true);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000); // Set your own delay time (in ms)
  //   return () => clearTimeout(timer);
  // }, []);

  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Simulating a delay of 1 second before showing the animation
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);

  return (
    // ref={ref} style={{ minHeight: '30vh' }}
    <div className="bio">
      {/* {inView && ( */}
      {/* // <div className={`bio_pa ${animationClass}`}> */}
      {showAnimation && (
        <>
          <div className="bio_name">Hi, I'm Iori !</div>
          <div className="bio_pa">
            <img
              className="bio_left animate__animated animate__fadeInUp"
              src="profile.png"
            ></img>

            <p
              className={`bio_right animate__animated animate__fadeInUp animate__slow left-align toggleBox-en ${
                isJapanese ? 'display-none' : ''
              }`}
            >
              As a self-taught learner, I continuously pursue new challenges and
              opportunities to sharpen my abilities. My passion lies in
              acquiring knowledge and staying abreast with the latest
              advancements that have the potential to improve our lives. Driven
              by curiosity and a desire for personal growth, I strive to turn
              insights into impactful actions.
            </p>
            <div
              className={`bio_right animate__animated animate__fadeInUp animate__slow left-align toggleBox-jp ${
                isJapanese ? '' : 'display-none'
              }`}
            >
              独学で学ぶ者として、私は自分の能力を磨くために新しい挑戦と機会を追い求め続けています。私の情熱は、知識を身につけ、私たちの生活を向上させる可能性のある最新の進歩に遅れないようにすることにあります。好奇心と自己成長への欲求に突き動かされ、自分なりの考えをインパクトある行動につなげるよう努力しています。
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Bio;

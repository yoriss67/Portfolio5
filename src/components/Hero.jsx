import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

import { useInView } from 'react-intersection-observer';

function Hero({ isJapanese }) {
  // const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false); // New loading state

//   window.onload = ()=>{
//     const heroRight = document.querySelector('.hero_right');
//     heroRight.classList.add('loaded');
// }

  const { ref, inView } = useInView({
    // Optionについては、rootMarginを設定。要素が400pxより上に入った段階でinViewを取得できます。
    rootMargin: '-50px 0px', // px以外は❌??
    triggerOnce: true, // 最初の一度だけ実行
  });

  // 🤔loadingがおわってからanimation
  // 🌸
  // useEffect(() => {
  //   if (inView) {
  //     const timer = setTimeout(() => {
  //       setLoaded(true);
  //     }, 6000); // Wait for 1 second or the amount of time it takes for your component to load

  //     return () => clearTimeout(timer);
  //   }
  // }, [inView]);

  return (
    <div className="hero" ref={ref}>
      <div className="hero_bg"></div>
      {inView && (
        <div className="hero_width">
          <div className="circles"></div>

          <div className="hero_left">
            <div className="intro">
              {/* The provided delays are from 1 to 5 seconds.  */}
              <h2
                className={`animate__animated animate__fadeInUp animate__delay-3s`}
              >
                Hi, I'm Iori !
              </h2>
              <h3
                className={`animate__animated animate__fadeInUp animate__slow animate__delay-3s`}
              >
                Front-end learner
              </h3>
            </div>
            <div className="spline">
              {/* <Spline scene="https://prod.spline.design/Yf-lxfYRDOlgM0NW/scene.splinecode" /> */}
              <Spline scene="https://prod.spline.design/pIljFw02dlaoJp6S/scene.splinecode" />
            </div>
          </div>

          <div className={`hero_right`}>
            <p
              className={`hero_right_p
hero_right_p hero_right_p1 toggleBox-en ${isJapanese ? 'display-none' : ''}`}
            >
              As a self-taught learner, I continuously pursue new challenges and
              opportunities to sharpen my abilities.
            </p>
            <p
              className={`hero_right_p
hero_right_p hero_right_p1 toggleBox-jp ${isJapanese ? '' : 'display-none'}`}
            >
              {' '}
              独学で学ぶ者として、私は自分の能力を磨くために新しい挑戦と機会を追い求め続けています。
            </p>

            <p
              className={`hero_right_p
hero_right_p hero_right_p2 toggleBox-en ${isJapanese ? 'display-none' : ''}`}
            >
              My passion lies in acquiring knowledge and staying abreast with
              the latest advancements that have the potential to improve our
              lives.
            </p>
            <p
              className={`hero_right_p
hero_right_p hero_right_p2 toggleBox-jp ${isJapanese ? '' : 'display-none'}`}
            >
              私の情熱は、知識を身につけ、私たちの生活を向上させる可能性のある最新の進歩に遅れないようにすることにあります。
            </p>

            <p
              className={`hero_right_p
hero_right_p hero_right_p3 toggleBox-en ${isJapanese ? 'display-none' : ''}`}
            >
              Driven by curiosity and a desire for personal growth, I strive to
              turn insights into impactful actions.
            </p>
            <p
              className={`hero_right_p
hero_right_p hero_right_p3 toggleBox-jp ${isJapanese ? '' : 'display-none'}`}
            >
              好奇心と自己成長への欲求に突き動かされ、自分なりの考えをインパクトある行動につなげるよう努力しています。
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;

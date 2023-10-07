import { useState, useEffect } from 'react';

import { useTransform, useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import { useScroll } from 'react-fns';


// import Waves from './Waves';

function Hero({ isJapanese }) {
  const [refH1, inViewH1] = useInView({
    rootMargin: '50px',
    triggerOnce: true,
  });

  const [refH3, inViewH3] = useInView({
    rootMargin: '50px',
    triggerOnce: true,
  });

  const [refWork, inViewWork] = useInView({
    rootMargin: '-50px',
    triggerOnce: true,
  });

  const [refBc1, inViewBc1] = useInView({
    rootMargin: '-50px',
    triggerOnce: true,
  });

  const [refBc2, inViewBc2] = useInView({
    rootMargin: '-50px',
    triggerOnce: true,
  });

  const isPhone = window.innerWidth <= 768; // or any width that you consider makes the device a phone

  const phoneTransition = {
    duration: 3,
    delay: 0.8, // Adjust this delay for phone
  };

  const defaultTransition = {
    duration: 3,
    delay: 2.8, // Your original delay
  };

  // 🌸
  // const [sunRef, inView] = useInView({
  //   triggerOnce: false,
  //   threshold: 0,
  // });

  // const controls = useAnimation();

  // useEffect(() => {
  //   if (inView) {
  //     controls.start({ rotate: 360, transition: { duration: 10, loop: Infinity } });
  //   } else {
  //     controls.stop();
  //   }
  // }, [controls, inView]);

  // 🌸🌸
  // const { y } = useScroll();
  // const rotation = useTransform(y, (value) => value * 0.1);

  // 🌸🌸🌸
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="hero">
      <div className="hero-bg"></div>

      {/* <Waves /> */}
      {/* <img className="sun-image" src="/sun2.png" alt="sun" /> */}
      {/* <motion.img ref={sunRef} className="sun-image" src="/sun2.png" alt="sun" animate={controls} /> */}
      {/* <motion.img className="sun-image" src="/sun2.png" alt="sun" style={{ rotate: rotation }} /> */}
      <motion.img
        className="sun-image"
        src="/sun2.png"
        alt="sun"
        style={{ rotate: scrollPosition * 0.1 }} // Adjust multiplier to control rotation speed
      />

      <div className="hero-container">
        <div className={`hero-top`}>
          <motion.h1
            initial={{ opacity: 0, y: '20vw' }}
            animate={inViewH1 ? { y: '0vw', opacity: 1, scale: 1 } : {}}
            transition={{ ease: [0.2, 0, 0.6, 1], duration: 1.5, delay: 1, bounce: 0.3 }}
            className={` ${inViewH1 ? 'true' : 'false'}`}
            ref={refH1}
          >
            Hi, I'm Iori !
          </motion.h1>

          <motion.h3
            className={` ${inViewH3 ? 'true' : 'false'}`}
            ref={refH3}
            initial={{ opacity: 0, y: '20vw' }}
            animate={inViewH1 ? { y: '0vw', opacity: 1, scale: 1 } : {}}
            transition={{ ease: 'easeInOut', duration: 1.5, delay: 1.2 }}
          >
            Front-end learner
          </motion.h3>
        </div>

        <motion.div
          className={`I-work-with ${inViewWork ? 'true' : 'false'} `}
          ref={refWork}
          initial={{ opacity: 0, y: '5vh' }}
          animate={inViewWork ? { y: '0vw', opacity: 1, scale: 1 } : {}}
          transition={{ duration: 3, delay: 2.5 }}
        >
          <p className={` toggleBox-en ${isJapanese ? 'display-none' : ''}`}> I live by</p>
          <p className={` toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>以下をモットーにしています</p>
        </motion.div>

        <div className={`hero-bottom`}>
          <div className={`hero-bc ${inViewBc1 ? 'true' : 'false'}`} ref={refBc1}>
            <motion.div
              initial={{ opacity: 0, y: '5vh' }}
              animate={inViewBc1 ? { y: '0vw', opacity: 1, scale: 1 } : {}}
              transition={{ duration: 3, delay: 2.8 }}
            >
              <h3 className={`hero-bc-h heading  toggleBox-en ${isJapanese ? 'display-none' : ''}`}>Curiosity</h3>
              <h3 className={`hero-bc-h heading  toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>好奇心</h3>

              <div className="hero-bc-p">
                <p className={` toggleBox-en ${isJapanese ? 'display-none' : ''}`}>
                  Driven by curiosity to gain knowledge, I strive to turn my insights into impactful actions.
                </p>
                <p className={` toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>
                  知識を得るための好奇心に突き動かされ、自分なりの考えをインパクトのある行動につなげようと努力しています。
                </p>
              </div>
            </motion.div>
          </div>

          <div className={`hero-bc ${inViewBc2 ? 'true' : 'false'}`} ref={refBc2}>
            <motion.div
              initial={{ opacity: 0, y: '5vh' }}
              animate={inViewBc2 ? { y: '0vw', opacity: 1, scale: 1 } : {}}
              transition={isPhone ? phoneTransition : defaultTransition}
            >
              <h3 className={`hero-bc-h heading  toggleBox-en ${isJapanese ? 'display-none' : ''}`}>Perseverance</h3>
              <h3 className={`hero-bc-h heading  toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>粘り強さ</h3>

              <div className="hero-bc-p">
                <p className={` toggleBox-en ${isJapanese ? 'display-none' : ''}`}>
                  Using the habits of self-analysis and reflection, I continue to take structured actions for personal
                  growth with perseverance.
                </p>
                <p className={` toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>
                  自己分析と振り返りの習慣を用いて、計画性のある自己成長のための行動を根気強く続けています。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

import { useState } from 'react';
// import Spline from '@splinetool/react-spline';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function Hero({ isJapanese }) {

  // const { ref, inView } = useInView({
  //   rootMargin: '-50px 0px', // px以外は❌??
  //   triggerOnce: true, 
  // });

  const [refH1, inViewH1] = useInView({
    rootMargin: '50px',
    triggerOnce: true,
  });

  const [refH3, inViewH3] = useInView({
    rootMargin: '50px',
    triggerOnce: true,
  });

  const [ref1, inView1] = useInView({
    rootMargin: '-50px',
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    rootMargin: '-50px',
    triggerOnce: true,
  });

  const [ref3, inView3] = useInView({
    rootMargin: '-30px',
    triggerOnce: true,
  });



  return (
    <div className="hero">
      {/* <Spline className="spline_waves" scene="https://prod.spline.design/TVtHs7EEwNMWNjKT/scene.splinecode"/> */}
          <div className="spline_waves"></div>


        <div className="hero_width">

          <div className={`hero_left `}>

          <motion.div initial={{ opacity: 0.3, y: '10vw' }} animate={inViewH1 ? { y: '0vw', opacity: 1, scale: 1 } : {}} transition={{ duration: 1.5, delay: 5  }} >
              <h1
                className={` ${inViewH1 ?  'true' : 'false' }`} ref={refH1}>
                Hi, I'm Iori !
              </h1>
              </motion.div>


              <h3
                className={` ${inViewH3 ?  'true' : 'false' }`} ref={refH3}>
          <motion.div initial={{ opacity: 0.3, y: '10vw' }} animate={inViewH1 ? { y: '0vw', opacity: 1, scale: 1 } : {}} transition={{ duration: 1.5, delay: 5.2  }} >

                Front-end learner
                </motion.div>
              </h3>
            

          </div>



          <div className={`hero_right`}>

            <div className={`hero_right_p1 ${inView1 ?  'true' : 'false' }`} ref={ref1} >
            <motion.div initial={{ opacity: 0, y: '5vh' }} animate={inView1 ? { y: '0vw', opacity: 1, scale: 1 } : {}} transition={{ duration: 3, delay: 7  }} >

              <p
                className={`hero_right_p toggleBox-en ${isJapanese ? 'display-none' : ''}`}>
                As a self-taught learner, I continuously pursue new challenges and
                opportunities to sharpen my abilities.
              </p>
              <p
                className={`hero_right_p toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>
                独学で学ぶ者として、私は自分の能力を磨くために新しい挑戦と機会を追い求め続けています。
              </p>
              </motion.div>
            </div>


            <div className={`hero_right_p2 ${inView2 ?  'true' : 'false' }`} ref={ref2} >
            <motion.div initial={{ opacity: 0, y: '5vh' }} animate={inView2 ? { y: '0vw', opacity: 1, scale: 1 } : {}} transition={{ duration: 3, delay: 7.2  }} >
              <p
                className={`hero_right_p hero_right_p2 toggleBox-en ${isJapanese ? 'display-none' : ''}`}>
                My passion lies in acquiring knowledge and staying abreast with
                the latest advancements that have the potential to improve our
                lives.
              </p>
              <p
                className={`hero_right_p hero_right_p2 toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>
                私の情熱は、知識を身につけ、私たちの生活を向上させる可能性のある最新の進歩に遅れないようにすることにあります。
              </p>
              </motion.div>
            </div>


            <div className={`hero_right_p3 ${inView3 ?  'true' : 'false' }`} ref={ref3} >
            <motion.div initial={{ opacity: 0, y: '5vh' }} animate={inView3 ? { y: '0vw', opacity: 1, scale: 1 } : {}} transition={{ duration: 3, delay: 7.5  }} >
<p className={`hero_right_p hero_right_p3 toggleBox-en ${isJapanese ? 'display-none' : ''}`}>
                Driven by curiosity and a desire for personal growth, I strive to
                turn insights into impactful actions.
              </p>
              <p
                className={`hero_right_p hero_right_p3 toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>
                好奇心と自己成長への欲求に突き動かされ、自分なりの考えをインパクトある行動につなげるよう努力しています。
              </p>
              </motion.div>
            </div>


          </div>
        </div>

    </div>
  );
}

export default Hero;

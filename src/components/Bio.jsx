import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function Bio({ isJapanese }) {
  const [ref1, inView1] = useInView({
    rootMargin: '-50px',
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    rootMargin: '-50px',
    triggerOnce: true,
  });

  const [ref3, inView3] = useInView({
    rootMargin: '-50px',
    triggerOnce: true,
  });

  const [ref4, inView4] = useInView({
    rootMargin: '-50px',
    triggerOnce: true,
  });

  return (
    <div className="bio section">
      <>
        <div className="bio_img_container">
          <img className="bio_img " src="profile-min.png"></img>
        </div>
        <div className="bio_text">
          <h2 className="bio_name">Iori Kawano</h2>

          <div className={`bio_first ${inView1 ? 'true' : 'false'} `} ref={ref1}>
            <motion.div
              initial={{ opacity: 0.3, y: '10vw' }}
              animate={inView1 ? { y: '0vw', opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1 }}
            >
              <div className={`bio_snt bio_snt1 left-align toggleBox-en ${isJapanese ? 'display-none' : ''}`}>
                I started studying programming in July 2022. I am completely self-taught as I belong to a liberal arts
                department. This sparked my interest in IT.
              </div>
              <div className={`bio_snt bio_snt1 left-align toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>
                2022年7月からプログラミングの勉強を始めました。私は文系学部に所属しているため、完全に独学で勉強しています。これをきっかけにITに興味を持ち始めました。
              </div>
            </motion.div>
          </div>

          {/* <div className={`bio_second ${inView2 ? 'true' : 'false'} `} ref={ref2}>
            <motion.div
              initial={{ opacity: 0.3, y: '10vw' }}
              animate={inView2 ? { y: '0vw', opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1 }}
            >
              <div
                className={`bio_snt bio_snt2  left-align toggleBox-en ${
                  isJapanese ? 'display-none' : ''
                }`}
              >
                In recent news and in my daily life, I feel that the demand for technology is only
                increasing day by day. I believe that humans and computers will be more closely
                related in the future.
              </div>
              <div
                className={`bio_snt bio_snt2 left-align toggleBox-jp ${
                  isJapanese ? '' : 'display-none'
                }`}
              >
                ニュースや日々の生活の中で、技術に対する要求は日々高まるばかりだと感じています。今後、人間とコンピューターはより密接な関係になっていくのではないでしょうか。
              </div>
            </motion.div>
          </div> */}

          <div className={`bio_third ${inView3 ? 'true' : 'false'} `} ref={ref3}>
            <motion.div
              initial={{ opacity: 0.3, y: '10vw' }}
              animate={inView3 ? { y: '0vw', opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1 }}
            >
              <div className={`bio_snt bio_snt3  left-align toggleBox-en ${isJapanese ? 'display-none' : ''}`}>
                What I prioritize in terms of work values are internationalism and the future prospects of the business.
                I have a strong interest in English and different cultures, and aspire to work with an international
                perspective. Eventually, I want to work beyond the borders of Japan, gaining experiences around the
                world.
              </div>
              <div className={`bio_snt bio_snt3 left-align toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>
                私が仕事の価値観として優先するのは、国際性と事業の将来性です。私には英語や異文化に対する強い興味と、国際的な視野を持って働きたいという思いがあります。将来的には、日本の枠を超えて、世界各地での経験を積みながら働きたいと考えています。
              </div>
            </motion.div>
          </div>

          <div className={`bio_fourth ${inView4 ? 'true' : 'false'} `} ref={ref4}>
            <motion.div
              initial={{ opacity: 0.3, y: '10vw' }}
              animate={inView4 ? { y: '0vw', opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1 }}
            >
              <div className={`bio_snt bio_snt4 left-align toggleBox-en ${isJapanese ? 'display-none' : ''}`}>
                My second priority is the potential of the business. Through IT, I aim to improve the interaction
                between humans and computers, and engage in projects that can provide convenience and happiness.
              </div>
              <div className={`bio_snt bio_snt4 left-align toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>
                第二の優先順位は、仕事の可能性です。ITを通じて人とコンピュータのインタラクションを向上させ、便利さや幸福を提供できるプロジェクトに携わりたいと考えています。
              </div>
            </motion.div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Bio;

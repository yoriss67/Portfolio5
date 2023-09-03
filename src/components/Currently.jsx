import React from 'react';

// https://zenn.dev/himorishige/articles/e17b7d04fc7722
import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';

function Currently({ isJapanese }) {
  const [refLeft, inViewLeft] = useInView({
    rootMargin: '-10px',
    triggerOnce: true,
  });

  const [refMiddle, inViewMiddle] = useInView({
    rootMargin: '-10px',
    triggerOnce: true,
  });

  const [refRight, inViewRight] = useInView({
    rootMargin: '-10px',
    triggerOnce: true,
  });

  return (
    <div className="currently section">
      <h2>I’m learning <br className='dn-in-pc'/> React now!</h2>
      
      <div className="currently_container">
        <div className={`currently_child currently_left ${inViewLeft ? 'true' : 'false'} `} ref={refLeft}>
          <motion.div
            initial={{ opacity: 0.3, scale: 0.8, y: '10vw' }}
            animate={inViewLeft ? { y: '0vw', opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <h3>Digital business card</h3>
            <div className="currently_img_pa">
              <img src="digital-business-card.avif" className="currently_img " />
            </div>
            <div className="currently_text currently_text_left">
              <a
                className={`heading  toggleBox-en ${isJapanese ? 'display-none' : ''}`}
                href="https://myprofile-card-yoriss67.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                view site
              </a>
              <a
                className={`heading  toggleBox-jp ${isJapanese ? '' : 'display-none'}`}
                href="https://myprofile-card-yoriss67.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                サイトを見る
              </a>

              <p className={`toggleBox-en" ${isJapanese ? 'display-none' : ''}`}>This is first solo React project!</p>
              <p className={`toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>最初のReactプロジェクトです！</p>
            </div>
          </motion.div>
        </div>

        <div className={`currently_child currently_middle ${inViewMiddle ? 'true' : 'false'} `} ref={refMiddle}>
          <motion.div
            initial={{ opacity: 0.3, scale: 0.8, y: '10vw' }}
            animate={inViewMiddle ? { y: '0vw', opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3>Top companies</h3>
            <div className="currently_img_pa">
              <img src="netlify-travel-journal.avif" className="currently_img" />
            </div>

            <div className="currently_text currently_text_middle">
              <a
                className={`heading  toggleBox-en ${isJapanese ? 'display-none' : ''}`}
                href="https://yoriss67top-companies.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                view site
              </a>
              <a
                className={`heading  toggleBox-jp ${isJapanese ? '' : 'display-none'}`}
                href="https://yoriss67travel-journal.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                サイトを見る
              </a>
              <p className={`toggleBox-en" ${isJapanese ? 'display-none' : ''}`}>
                I learned how to use props and array map.
              </p>
              <p className={`toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>
                propsとarray mapの使い方を学びました。
              </p>
            </div>
          </motion.div>
        </div>

        <div className={`currently_child currently_right ${inViewRight ? 'true' : 'false'} `} ref={refRight}>
          <motion.div
            initial={{ opacity: 0.3, scale: 0.8, y: '10vw' }}
            animate={inViewRight ? { y: '0vw', opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h3>Meme generator</h3>
            <div className="currently_img_pa">
              <img src="meme-generator.avif" className="currently_img" />
            </div>
            <div className="currently_text currently_text_right">
              <a
                className={`heading  toggleBox-en ${isJapanese ? 'display-none' : ''}`}
                href="https://yoriss67meme-generator.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                view site
              </a>
              <a
                className={`heading  toggleBox-jp ${isJapanese ? '' : 'display-none'}`}
                href="https://yoriss67meme-generator.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                サイトを見る
              </a>

              <p className={`toggleBox-en" ${isJapanese ? 'display-none' : ''}`}>
                There were so many concepts to learn ! I learned how to use basic hooks, API calls and async function.
              </p>
              <p className={`toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>
                学ぶべき概念がたくさんありました！基本のHooksやAPIコール、async関数の使い方などを学びました。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Currently;

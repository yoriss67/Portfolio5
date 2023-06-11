import { faL } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef } from 'react';

// https://zenn.dev/himorishige/articles/e17b7d04fc7722
import { useInView } from 'react-intersection-observer';
import 'animate.css';

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
    <div className="currently section" style={{ height: '30vh' }}>
      <div className="currently_pa ">
        <div className={`currently_child currently_left   ${inViewLeft ? 'animate__animated animate__fadeInUp animate__slower' : '' } `} ref={refLeft}>
          <div className="currently_img_pa">
            <img src="n.png" className="currently_img " />
          </div>
          <div className="currently_text currently_text_left">
            <h4>Digital business card</h4>
            <a
              className={`eye-text toggleBox-en ${
                isJapanese ? 'display-none' : ''
              }`}
              href="https://myprofile-card-yoriss67.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              view site
            </a>
            <a
              className={`eye-text toggleBox-jp ${
                isJapanese ? '' : 'display-none'
              }`}
              href="https://myprofile-card-yoriss67.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              サイトを見る
            </a>
            <p className={`toggleBox-en" ${isJapanese ? 'display-none' : ''}`}>
              This is first solo React project!
            </p>
            <p className={`toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>
              最初のReactプロジェクトです！
            </p>
          </div>
        </div>

        <div ref={refMiddle} className={`currently_child currently_middle ${ inViewMiddle ? 'animate__animated animate__fadeInUp animate__slower' : ''}`}>     
         <div className="currently_img_pa">
            <img src="netlify-travel-journal.png" className="currently_img" />
          </div>
          <div className="currently_text currently_text_middle">
            <h4>Travel journal</h4>
            <a
              className={`eye-text toggleBox-en ${
                isJapanese ? 'display-none' : ''
              }`}
              href="https://yoriss67travel-journal.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              view site
            </a>
            <a
              className={`eye-text toggleBox-jp ${
                isJapanese ? '' : 'display-none'
              }`}
              href="https://yoriss67travel-journal.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              サイトを見る
            </a>
            <p className={`toggleBox-en" ${isJapanese ? 'display-none' : ''}`}>
              NOT ABOUT TRAVEL😂Showcase of top 5 companies in te world. Still
              static...
            </p>
            <p className={`toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>
              旅行関係ないです😂世界のトップ5の会社をリストにしました。でもまだ静的です...
            </p>
          </div>
        </div>

        <div
          ref={refRight}
          className={`currently_child currently_right ${
            inViewRight
              ? 'animate__animated animate__fadeInUp animate__slower'
              : ''
          }`}
        >
      
          <div className="currently_img_pa">
            <img src="netlify-meme.png" className="currently_img" />
          </div>
          <div className="currently_text currently_text_right">
            <h4>Meme generator</h4>

            {/* <a
                  className={`eye-text toggleBox-en ${isJapanese ? 'display-none' : ''}`}
                  href='   '
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  view site
                </a>
                <a
                  className={`eye-text toggleBox-en ${isJapanese ? '' : 'display-none'}`}
                  href='   '
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  サイトを見る
                </a> */}

            <p className={`toggleBox-en" ${isJapanese ? 'display-none' : ''}`}>
              I am literally developing now!🙋‍♀️
            </p>
            <p className={`toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>
              まさに今開発中です！🙋‍♀️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Currently;

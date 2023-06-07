// 🌸
import React, { useEffect, useState } from 'react';
// import './Currently.css';

// https://zenn.dev/himorishige/articles/e17b7d04fc7722
import { useInView } from 'react-intersection-observer';
// import 'animate.css';

function Currently({ isJapanese }) {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '10px', // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  const animationClassName = inView ? 'start-animation' : '';

  return (
    <div className="currently section" ref={ref} style={{ height: '30vh' }}>
      {inView && (
        <div className="currently_pa ">
          <div
            className={`currently_child currently_left ${animationClassName}`}
          >
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
                className={`eye-text toggleBox-en ${
                  isJapanese ? '' : 'display-none'
                }`}
                href="https://myprofile-card-yoriss67.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                サイトを見る
              </a>
              <p
                className={`toggleBox-en" ${isJapanese ? 'display-none' : ''}`}
              >
                This is first solo React project!
              </p>
              <p
                className={`toggleBox-jp" ${isJapanese ? '' : 'display-none'}`}
              >
                最初のReactプロジェクトです！
              </p>
            </div>
          </div>

          <div
            className={`currently_child currently_middle ${animationClassName}`}
          >
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
                className={`eye-text toggleBox-en ${
                  isJapanese ? '' : 'display-none'
                }`}
                href="https://yoriss67travel-journal.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                サイトを見る
              </a>
              <p
                className={`toggleBox-en" ${isJapanese ? 'display-none' : ''}`}
              >
                NOT ABOUT TRAVEL😂Showcase of top 5 companies in te world. Still
                static...
              </p>
              <p
                className={`toggleBox-jp" ${isJapanese ? '' : 'display-none'}`}
              >
                旅行関係ないです😂世界のトップ5の会社をリストにしました。でもまだ静的です...
              </p>
            </div>
          </div>

          <div
            className={`currently_child currently_right ${animationClassName}`}
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

              <p
                className={`toggleBox-en" ${isJapanese ? 'display-none' : ''}`}
              >
                I am literally developing now!🙋‍♀️
              </p>
              <p
                className={`toggleBox-jp" ${isJapanese ? '' : 'display-none'}`}
              >
                まさに今開発中です！🙋‍♀️
              </p>
            </div>
          </div>
        </div>
      )}
    </div>

    //   <div>
    //   <div style={{ height: '2000px', backgroundColor: 'blue' }}>contents</div>
    //   {/* refを与えた要素がウインドウ内に現れるとinViewがtrueになります */}
    //   <div ref={ref} style={{ height: '300px' }}>
    //     {inView && (
    //       <div
    //         className="animate__animated animate__fadeInUp"
    //         style={{ backgroundColor: 'yellow' }}
    //       >
    //         <p>黄色の要素が出現！</p>
    //       </div>
    //     )}
    //   </div>
    // </div>
    // </div>
  );
}

export default Currently;

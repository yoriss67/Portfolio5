// 🌸
import React, { useEffect, useState  } from 'react';
// import './Currently.css';

// https://zenn.dev/himorishige/articles/e17b7d04fc7722
import { useInView } from 'react-intersection-observer';
import 'animate.css';

function Currently({isJapanese}) {
  // useEffect(() => {
  //   const currentlyLeftElement = document.querySelector('.currently_left');
  //   const currentlyMiddleElement = document.querySelector('.currently_middle');
  //   const currentlyRightElement = document.querySelector('.currently_right');

  //   currentlyLeftElement.addEventListener('animationend', () => {
  //     currentlyMiddleElement.style.opacity = 1;
  //     // currentlyMiddleElement.style.left = '35%'; // currently_rightの初期位置（画面の中央）に設定

  //   });
  // }, []);

  const { ref, inView } = useInView({
    // オプション
    rootMargin: '10px', // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  return (

      <div className='currently' ref={ref} style={{ height: '2000px'}}>
        {inView && (
          // animate__animated animate__fadeInUp
          <div className="currently_pa ">
            <div className="currently_child currently_left">
              <img src="n.png" className="slideAndRotate " />
              <div className="currently_text currently_text_left">
                <h4>Digital business card</h4>
                <p className={`toggleBox-en" ${isJapanese ? 'display-none' : ''}`}>
                  This is first solo React project!
                </p>
                <p className={`toggleBox-jp" ${isJapanese ? '' : 'display-none'}`}>最初のReactプロジェクトです！</p>
              </div>
            </div>

            <div className="currently_child currently_middle">
              <img
                src="netlify-travel-journal.png"
                className="slideAndRotate"
              />
              <div className="currently_text currently_text_middle">
                <h4>Travel journal</h4>
                <p className={`toggleBox-en" ${isJapanese ? 'display-none' : ''}`}>
                NOT ABOUT TRAVEL😂Showcase of top 5 companies in te world. Still static...
                </p>
                <p className={`toggleBox-jp" ${isJapanese ? '' : 'display-none'}`}>旅行関係ないです😂世界のトップ5の会社をリストにしました。でもまだ静的です...</p>
              </div>
            </div>

            <div className="currently_child currently_right">
              <img src="netlify-meme.png" className="slideAndRotate" />
              <div className="currently_text currently_text_right">
                <h4>Meme generator</h4>
                <p className={`toggleBox-en" ${isJapanese ? 'display-none' : ''}`}>
                 I'm literally developing now!🙋‍♀️
                </p>
                <p className={`toggleBox-jp" ${isJapanese ? '' : 'display-none'}`}>まさに今開発中です！🙋‍♀️</p>
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

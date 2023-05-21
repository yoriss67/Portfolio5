
// 🌸
import React, { useEffect } from 'react';
import './Currently.css';

// https://zenn.dev/himorishige/articles/e17b7d04fc7722
import { useInView } from 'react-intersection-observer';
import 'animate.css';

function Currently() {
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
    rootMargin: '-10px', // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  return (
    <div ref={ref} style={{ height: '900px' }}>
      {inView && (
      
      <div className="currently_pa animate__animated animate__fadeInUp">
        <img src='netlify-digital-card.png' className="slideAndRotate currently_left " />
        <img src='netlify-travel-journal.png' className="slideAndRotate currently_middle" />.
        <img src='netlify-meme.png' className="slideAndRotate currently_right " />
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
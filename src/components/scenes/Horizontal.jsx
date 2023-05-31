// // import React from 'react';
// import './Horizontal.css'; // CSSをインポートします
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import React,  { useLayoutEffect, useRef } from "react";

// const Horizontal = () => {
//   //   const text =
//   //     'テキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよテキストが入りますよ';
//   //   const cards = new Array(6).fill('Card');

//   //   const listWrapperEl = document.querySelector('.side-scroll-list-wrapper');
//   //   const listEl = document.querySelector('.side-scroll-list');

//   //   gsap.to(listEl, {
//   //     x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
//   //     ease: 'none',
//   //     scrollTrigger: {
//   //       trigger: '.side-scroll',
//   //       start: 'top top', // 要素の上端（top）が、ビューポートの上端（top）にきた時
//   //       end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
//   //       scrub: true,
//   //       pin: true,
//   //       anticipatePin: 1,
//   //       invalidateOnRefresh: true,
//   //     },
//   //   });

//   window.addEventListener('load', function () {
//     //プラグインを定義
//     gsap.registerPlugin(ScrollTrigger);

//     const area = document.querySelector('.js-area');
//     const wrap = document.querySelector('.js-wrap');
//     const items = document.querySelectorAll('.js-item');
//     const num = items.length;

//     //横幅を指定
//     gsap.set(wrap, { width: num * 100 + '%' });
//     gsap.set(items, { width: 100 / num + '%' });

//     gsap.to(items, {
//       xPercent: -100 * (num - 1), //x方向に移動させる
//       ease: 'none',
//       scrollTrigger: {
//         trigger: area, //トリガー
//         start: 'top top', //開始位置
//         end: '+=1000', //終了位置 スクロール量の調整
//         pin: true, //ピン留め
//         scrub: true, //スクロール量に応じて動かす
//       },
//     });
//   });

//   return (
// //     // <div>
// //     //   <h1 className="title">GSAP Pinning Side Scroll</h1>

// //     //   <section className="normal section">
// //     //     <div className="container">
// //     //       <h2 className="normal-heading heading">普通のセクション</h2>
// //     //       <p className="normal-text">{text}</p>
// //     //     </div>
// //     //   </section>

// //     //   <section className="side-scroll section">
// //     //     <div className="side-scroll-container container">
// //     //       <h2 className="side-scroll-heading heading">
// //     //         横にスクロールするセクション
// //     //       </h2>
// //     //       <div className="side-scroll-list-wrapper">
// //     //         <ul className="side-scroll-list">
// //     //           {/* {cards.map((card, index) => (
// //     //             <li key={index} className="side-scroll-item">{card}</li>
// //     //           ))} */}
// //     //           <li className="side-scroll-item">Card</li>
// //     //           <li className="side-scroll-item">Card</li>
// //     //           <li className="side-scroll-item">Card</li>
// //     //           <li className="side-scroll-item">Card</li>
// //     //           <li className="side-scroll-item">Card</li>
// //     //           <li className="side-scroll-item">Card</li>
// //     //         </ul>
// //     //       </div>
// //     //     </div>
// //     //   </section>

// //     //   <section className="normal section">
// //     //     <div className="container">
// //     //       <h2 className="normal-heading heading">普通のセクション</h2>
// //     //       <p className="normal-text">{text}</p>
// //     //     </div>
// //     //   </section>
// //     // </div>

//     // https://web-design-note.net/2022/07/26/side-scroll/
//     <div>
//       <div className="item item01">
//         <span>1</span>
//       </div>
//       <div className="item item02">
//         <span>2</span>
//       </div>
//       <div className="item item03">
//         <span>3</span>
//       </div>

//       <div className="area js-area">
//         <h1>title</h1>
//         <div className="wrap js-wrap" ref={wrapRef}>
//           <div className="item item04 js-item">
//             <span>4</span>
//           </div>
//           <div className="item item05 js-item">
//             <span>5</span>
//           </div>
//           <div className="item item06 js-item">
//             <span>6</span>
//           </div>
//         </div>

//       </div>
//       <div className="item item01">
//         <span>7</span>
//       </div>
//       <div className="item item02">
//         <span>8</span>
//       </div>
//       <div className="item item03">
//         <span>9</span>
//       </div>
//     </div>

//   )

// };

// export default Horizontal;

// // https://greensock.com/forums/topic/35340-horizontal-scroll-gsap-scrolltrigger-react-dude/
// import React,  { useLayoutEffect, useRef } from "react";

// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import "./Horizontal.css";

// gsap.registerPlugin(ScrollTrigger);

// export default function Horizontal() {
//   const component = useRef();
//   const slider = useRef();

//   useLayoutEffect(() => {
//     let ctx = gsap.context(() => {
//       let panels = gsap.utils.toArray(".panel");
//       gsap.to(panels, {
//         xPercent: -100 * (panels.length - 1),
//         ease: "none",
//         scrollTrigger: {
//           trigger: slider.current,
//           pin: true,
//           scrub: 1,
//           snap: 1 / (panels.length - 1),
//           end: () => "+=" + slider.current.offsetWidth
//         }
//       });
//     }, component);
//     return () => ctx.revert();
//   });

//   return (
//     <div className="App" ref={component}>
//       <div className="firstContainer">
//         <h1>Testing horizontal scrolling w/ three sections</h1>
//         <h2>First Container</h2>
//       </div>
//       <div ref={slider} className="container">
//         <div className="description panel blue">
//           <div>
//             SCROLL DOWN
//             <div className="scroll-down">
//               <div className="arrow"></div>
//             </div>
//           </div>
//         </div>
//         <div className="panel red">ONE</div>
//         <div className="panel orange">TWO</div>
//         <div className="panel purple">THREE</div>
//       </div>
//       <div className="lastContainer">Last Container</div>
//     </div>
//   );
// }

// // 🌸
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Horizontal.css';

gsap.registerPlugin(ScrollTrigger);

const Horizontal = () => {
  const areaRef = useRef(null);
  const wrapRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const area = areaRef.current;
    const wrap = wrapRef.current;
    const items = itemRefs.current;
    const num = items.length;

    gsap.set(wrap, { width: num * 100 + '%' });
    gsap.set(items, { width: 100 / num + '%' });

    gsap.to(items, {
      xPercent: -100 * (num - 1), //x方向に移動させる
      ease: 'none',
      scrollTrigger: {
        trigger: area, //トリガー
        start: 'top top', //開始位置
        end: '+=1000', //終了位置 スクロール量の調整
        pin: true, //ピン留め
        scrub: true, //スクロール量に応じて動かす
      },
    });
  }, areaRef);

  // const addToRefs = (el) => {
  //   if (el && !itemRefs.current.includes(el)) {
  //     itemRefs.current.push(el);
  //   }
  // };

  return (
    <div>
      <div className="item item01">
        <span>1</span>
      </div>
      <div className="item item02">
        <span>2</span>
      </div>
      <div className="item item03">
        <span>3</span>
      </div>
      <div className="area js-area" ref={areaRef}>
        <h1>title</h1>
        <div className="wrap js-wrap" ref={wrapRef}>
          <div className="item item04 js-item" ref={addToRefs}>
            <span>4</span>
          </div>
          <div className="item item05 js-item" ref={addToRefs}>
            <span>5</span>
          </div>
          <div className="item item06 js-item" ref={addToRefs}>
            <span>6</span>
          </div>
        </div>
      </div>
      <div className="item item01">
        <span>7</span>
      </div>
      <div className="item item02">
        <span>8</span>
      </div>
      <div className="item item03">
        <span>9</span>
      </div>
    </div>
  );
};

export default Horizontal;

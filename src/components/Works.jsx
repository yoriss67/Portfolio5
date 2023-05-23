// import React, { useRef, useEffect, useState } from 'react';
// import WorksData from './WorksData'; // replace with the actual path to your data file
// import './Works.css';

// import { useInView } from 'react-intersection-observer';
// import 'animate.css';


// const Works = () => {
//   const { ref, inView } = useInView({
//     // オプション
//     rootMargin: '-100px', // ref要素が現れてから50px過ぎたら
//     triggerOnce: true, // 最初の一度だけ実行
//   });

//   // const [refs, setRefs] = useState([]);
//   // const { inView, ref: inViewRef } = useInView({
//   //   rootMargin: '-10px',
//   //   triggerOnce: true,
//   // });

//   // useEffect(() => {
//   //   setRefs((refs) => Array(WorksData.length).fill().map((_, i) => refs[i] || createRef()));
//   // }, []);

//   // useEffect(() => {
//   //   refs.forEach(ref => {
//   //     inViewRef(ref.current);
//   //   });
//   // }, [refs]);


//   return (
//     <div className="works section-wrapper">
//       <h2>works</h2>

//       {WorksData.map((work) => (
//         <div
//           key={work.id}
//           className={`works__flex ${work.title
//             .replace(/\s+/g, '')
//             .toLowerCase()}`}
//         >
//           <div className="works__image" ref={ref} >
//           {/* {Object.values(work.images).map((image, index) =>  */}
           
//                 <img
//                 className='animate__animated animate__fadeInUp'
//                   // key={index}
//                   key={work.id}
//                   src={work.image}
//                   alt={`${work.title} image `}
//                 />
              
//             {/* )}  */}
//           </div>













//           <div className="works__text">
//             <div className="works__text__title">
//               <h3>{work.title}</h3>
//               <div className="eye-container">
//                 <img src="images/eye.png" alt="" />
//                 <a
//                   className="eye-text"
//                   href={work.siteLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   view site
//                 </a>
//               </div>
//             </div>

//             <div className="works__text__sent">
//               <p className="left-align toggleBox-en">{!isJapanese && work.descriptionEn}</p>
//               <p className="left-align toggleBox-jp">{work.descriptionJp}</p>
//             </div>

//             {/* <div className="language-meter">
//               {work.languages.html && <div className="meter-html" style={{ width: work.languageDistribution.html }}></div>}
//               {work.languages.css && <div className="meter-css"></div>}
//               {work.languages.js && <div className="meter-js"></div>}
//             </div> */}

// {/* 🤔 */}
//             <div className="language-meter">
//               {work.languages.html && (
//                 <div
//                   className={`${work.title
//                     .replace(/\s+/g, '')
//                     .toLowerCase()}-meter-html meter-html`}
//                   style={{ width: work.languageDistribution.html }}
//                 ></div>
//               )}

//               {work.languages.css && (
//                 <div
//                   className={`${work.title
//                     .replace(/\s+/g, '')
//                     .toLowerCase()}-meter-css meter-css`}
//                   style={{ width: work.languageDistribution.css }}
//                 ></div>
//               )}

//               {work.languages.js && (
//                 <div
//                   className={`${work.title
//                     .replace(/\s+/g, '')
//                     .toLowerCase()}-meter-js meter-js`}
//                   style={{ width: work.languageDistribution.js }}
//                 ></div>
//               )}
//             </div>




//             <div className="language-meter-info">
//               {work.languages.html && (
//                 <>
//                   <div className="html-circle"></div>
//                   <p>HTML</p>
//                 </>
//               )}
//               {work.languages.css && (
//                 <>
//                   <div className="css-circle"></div>
//                   <p>CSS</p>
//                 </>
//               )}
//               {work.languages.js && (
//                 <>
//                   <div className="js-circle"></div>
//                   <p>JavaScript</p>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Works;


// // 🙋‍♀️with this code, the daInUp animation is executed as soon as I reflesh. But I want to display the animation when the element gets in screen
// // ❌













import React, { useRef, useEffect, useState } from 'react';
import WorksData from './WorksData'; // replace with the actual path to your data file
import './Works.css';

import { useInView } from 'react-intersection-observer';
import 'animate.css';

const Works = ({isJapanese}) => {
  const { ref, inView } = useInView({
    rootMargin: '-100px',
    triggerOnce: true,
  });

  return (
    <div className="works">
      <h2>Works</h2>

      {WorksData.map((work) => (
        <div
          key={work.id}
          className={`works__flex ${work.title
            .replace(/\s+/g, '')
            .toLowerCase()}`}
        >
          <div className="works__image" ref={ref}>
                <img
                  className='animate__animated animate__fadeInUp'
                  key={work.id}
                  src={work.image}
                  alt={`${work.title} image `}
                />
          </div>

          <div className="works__text">
            <div className="works__text__title">
              <h3>{work.title}</h3>
              <div className="eye-container">
                <img src="images/eye.png" alt="" />
                <a
                  className={`eye-text toggleBox-en ${isJapanese ? 'display-none' : ''}`}
                  href={work.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  view site
                </a>
                <a
                  className={`eye-text toggleBox-en ${isJapanese ? '' : 'display-none'}`}
                  href={work.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  サイトを見る
                </a>
              </div>
            </div>

            <div className="works__text__sent">
              <p className={`left-align toggleBox-en ${isJapanese ? 'display-none' : ''}`}>{work.descriptionEn}</p>
              <p className={`left-align toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>{work.descriptionJp}</p>
            </div>

            <div className="language-meter">
              {work.languages.html && (
                <div
                  className={`${work.title
                    .replace(/\s+/g, '')
                    .toLowerCase()}-meter-html meter-html`}
                  style={{ width: work.languageDistribution.html }}
                ></div>
              )}

              {work.languages.css && (
                <div
                  className={`${work.title
                    .replace(/\s+/g, '')
                    .toLowerCase()}-meter-css meter-css`}
                  style={{ width: work.languageDistribution.css }}
                ></div>
              )}

              {work.languages.js && (
                <div
                  className={`${work.title
                    .replace(/\s+/g, '')
                    .toLowerCase()}-meter-js meter-js`}
                  style={{ width: work.languageDistribution.js }}
                ></div>
              )}
            </div>

            <div className="language-meter-info">
              {work.languages.html && (
                <>
                  <div className="html-circle"></div>
                  <p>HTML</p>
                </>
              )}
              {work.languages.css && (
                <>
                  <div className="css-circle"></div>
                  <p>CSS</p>
                </>
              )}
              {work.languages.js && (
                <>
                  <div className="js-circle"></div>
                  <p>JavaScript</p>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Works;

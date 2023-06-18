
import React, { useRef, useEffect, useState } from 'react';
import WorksData from './WorksData'; 
import './Works.css';


import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';


const Works = ({isJapanese}) => {

  // const { ref, inView } = useInView({
  //   rootMargin: '-10px',
  //   triggerOnce: true,
  // });

  return (
    <div className="works section works_bg">
      {/* <div className="works_bg"></div> */}
      <h2>Works</h2>

      {WorksData.map((work) => (
        <div
          key={work.id}
          // ref={ref}
          
          className={`
          works__flex
           ${work.title}
            `}
        >
          {/* 使わない .replace(/\s+/g, '').toLowerCase() */}
          
          {/* 使わない<div className="works__image" ref={ref}> */}
          <div className="works__image">
      
                <motion.img
                  className='works__image__img'
                  key={work.id}
                  src={work.image}
                  alt={`${work.title} image `}

                  initial={{ opacity: 0.8, scale: 1}}
                  // animate={inView ? { opacity: 1, scale: 1 } : {}}
                  whileHover={{ 
                    scale: 1.05,
                    opacity: 1,
                    transition: { duration: .5 },
                   }}
                />
                {/* {console.log(inView)} */}
          </div>

          <div className="works__text">
            <div className="works__text__title">
              <h3>{work.title}</h3>
              <div className="eye-container">
                
                <a
                  className={`eye-text toggleBox-en ${isJapanese ? 'display-none' : ''}`}
                  href={work.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  view site
                </a>
                <a
                  className={`eye-text toggleBox-jp ${isJapanese ? '' : 'display-none'}`}
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

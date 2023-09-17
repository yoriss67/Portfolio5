import WorksData from './WorksData';
import './css/Works.css';

import Parallax from './Parallax';
import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

{
  /* <motion.img
className="works_pc_image"
key={work.id}
src={work.pcImage}
alt={`${work.title} image `}
initial={{ opacity: 0.8, scale: 1 }}
// animate={inView ? { opacity: 1, scale: 1 } : {}}
whileHover={{
  scale: 1.05,
  opacity: 1,
  transition: { duration: 0.5 },
}}
/> */
}

// const Image = ({}) => (
//   <motion.img
//     style={{
//       position: 'absolute',
//       height: 'auto',
//       objectFit: 'cover',
//       objectPosition: 'center 0%',
//       top: `${top}%`,
//       left: `${left}%`,
//       width: `${width}%`,
//     }}
//   />
// );

const Works = ({ isJapanese }) => {
  const ImagesArray = [
    { pcImage: 'works/lean/lean-pc.png', tabletImage: 'works/lean/lean-tablet.png', spImage: 'works/lean/lean-sp.png' },
    {
      pcImage: 'works/pomodoro/pomodoro-pc.png',
      tabletImage: 'works/pomodoro/pomodoro-tablet.png',
      spImage: 'works/pomodoro/pomodoro-sp.png',
    },
    {
      pcImage: 'works/ninbai/ninbai-pc.png',
      tabletImage: 'works/ninbai/ninbai-tablet.png',
      spImage: 'works/ninbai/ninbai-sp.png',
    },
  ];

  // 🌸
  const parallaxProps = [
    { offset: 100, stiffness: 100 },
    { offset: 50, stiffness: 200 },
    { offset: 150, stiffness: 50 },
  ];

  const renderWorks = () => {
    return ImagesArray.map((project, index) => {
      const { pcImage, tabletImage, spImage } = project;

      // console.log(ImagesArray[0].pcImage);

      console.log(ImagesArray[0].pcImage);

      // for ( let i = 0; i < ImagesArray.length; i++) {
      //   for ( let j = 0; j < ImagesArray[i].length; j++) {
      //     console.log(ImagesArray[i][j]);
      //   }
      //   // console.log(ImagesArray[i]);
      // }

      return (
        <div key={index} className="project-container">
          {['pc', 'tablet', 'sp'].map((type, i) => {
            let image;
            if (type === 'pc') image = pcImage;
            if (type === 'tablet') image = tabletImage;
            if (type === 'sp') image = spImage;

            return (
              <Parallax key={i} offset={parallaxProps[i].offset} stiffness={parallaxProps[i].stiffness}>
                {/* <img src={image} alt={`${type} image`} className={`works_${type}_image`} /> */}

                <img src={ImagesArray[i].pcImage} alt={`${type} image`} className={`works_pc_image`} />
                <img src={ImagesArray[i].tabletImage} alt={`${type} image`} className={`works_tablet_image`} />
                <img src={ImagesArray[i].spImage} alt={`${type} image`} className={`works_${type}_image`} />
              </Parallax>
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className="works section works_bg">
      {/* <div className="works_bg"></div> */}
      <h2>Works</h2>

      {WorksData.map((work) => (
        <div key={work.id} className={`works_flex`}>
          {/* 使わない<div className="works_image" ref={ref}> */}
          <div className="works_image">
            {/* <motion.img
              className="works_pc_image"
              src={work.pcImage}
              alt={`${work.title} image `}
              initial={{ opacity: 0.8, scale: 1 }}
              // animate={inView ? { opacity: 1, scale: 1 } : {}}
              whileHover={{
                scale: 1.05,
                opacity: 1,
                transition: { duration: 0.5 },
              }}
            />
            <motion.img
              className="works_tablet_image"
              src={work.tabletImage}
              alt={`${work.title} image `}
              initial={{ opacity: 0.8, scale: 1 }}
              // animate={inView ? { opacity: 1, scale: 1 } : {}}
              whileHover={{
                scale: 1.05,
                opacity: 1,
                transition: { duration: 0.5 },
              }}
            />

            <motion.img
              className="works_sp_image"
              src={work.spImage}
              alt={`${work.title} image `}
              initial={{ opacity: 0.8, scale: 1 }}
              // animate={inView ? { opacity: 1, scale: 1 } : {}}
              whileHover={{
                scale: 1.05,
                opacity: 1,
                transition: { duration: 0.5 },
              }}
            /> */}

            {/* 🙋‍♀️🙋‍♀️🙋‍♀️ */}
            <div className="works-container">{renderWorks()}</div>

            {/* {console.log(inView)} */}
          </div>

          <div className="works_text">
            <div className="works_text_title">
              <h3>{work.title}</h3>

              <a
                className={`toggleBox-en ${isJapanese ? 'display-none' : ''}`}
                href={work.siteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                view site
              </a>
              <a
                className={`heading toggleBox-jp ${isJapanese ? '' : 'display-none'}`}
                href={work.siteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                サイトを見る
              </a>
            </div>

            <div className="works_text_sent">
              <p className={`left-align toggleBox-en ${isJapanese ? 'display-none' : ''}`}>{work.descriptionEn}</p>
              <p className={`left-align toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>{work.descriptionJp}</p>
            </div>

            <div className="language-meter">
              {work.languages.html && (
                <div
                  className={`${work.title.replace(/\s+/g, '').toLowerCase()}-meter-html meter-html`}
                  style={{ width: work.languageDistribution.html }}
                ></div>
              )}

              {work.languages.css && (
                <div
                  className={`${work.title.replace(/\s+/g, '').toLowerCase()}-meter-css meter-css`}
                  style={{ width: work.languageDistribution.css }}
                ></div>
              )}

              {/* 🙋‍♀️ */}
              {work.languages.ts && (
                <div
                  className={`${work.title.replace(/\s+/g, '').toLowerCase()}-meter-ts meter-ts`}
                  style={{ width: work.languageDistribution.ts }}
                ></div>
              )}

              {work.languages.js && (
                <div
                  className={`${work.title.replace(/\s+/g, '').toLowerCase()}-meter-js meter-js`}
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

              {/* 🙋‍♀️ */}
              {work.languages.ts && (
                <>
                  <div className="ts-circle"></div>
                  <p>TypeScript</p>
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

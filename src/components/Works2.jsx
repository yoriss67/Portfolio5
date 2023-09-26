import WorksData from './WorksData';
import './css/Works.css';

import Parallax from './Parallax';
import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

const Image = ({}) => (
  <motion.img
    style={{
      position: 'absolute',
      height: 'auto',
      objectFit: 'cover',
      objectPosition: 'center 0%',
      top: `${top}%`,
      left: `${left}%`,
      width: `${width}%`,
  
    }}
  />
);

const Works = ({ isJapanese }) => {

  const LeanImagesArray = [
    { pcImage: WorksData[0].pcImage, tabletImage: WorksData[0].tabletImage, spImage: WorksData[0].spImage },
  ];

  const PomodoroImagesArray = [
    { pcImage: WorksData[1].pcImage, tabletImage: WorksData[1].tabletImage, spImage: WorksData[1].spImage },
  ];

  const NinbaiImagesArray = [
    { pcImage: WorksData[2].pcImage, tabletImage: WorksData[2].tabletImage, spImage: WorksData[2].spImage },
  ];


  // const ImagesArray = [
  //   { pcImage: 'works/lean/lean-pc.png', tabletImage: 'works/lean/lean-tablet.png', spImage: 'works/lean/lean-sp.png' },
  //   {
  //     pcImage: 'works/pomodoro/pomodoro-pc.png',
  //     tabletImage: 'works/pomodoro/pomodoro-tablet.png',
  //     spImage: 'works/pomodoro/pomodoro-sp.png',
  //   },
  //   {
  //     pcImage: 'works/ninbai/ninbai-pc.png',
  //     tabletImage: 'works/ninbai/ninbai-tablet.png',
  //     spImage: 'works/ninbai/ninbai-sp.png',
  //   },
  // ];

  // console.log(ImagesArray[0]);

  // 🌸
  const parallaxProps = [
    { offset: 100, stiffness: 100 },
    { offset: 100, stiffness: 150 },
    { offset: 150, stiffness: 200 },
  ];

  //   😆😆😆
  //   const renderWorks = () => {
  //     return ImagesArray.map((project, index) => {
  //       const { pcImage, tabletImage, spImage } = project;

  //       const firstProjectImages = ImagesArray[0];
  //       const { pcImage, tabletImage, spImage } = firstProjectImages;

  //       return (
  //         <div key={index} className="project-container">
  //           {['pc', 'tablet', 'sp'].map((type, i) => {
  //             let image;
  //             if (type === 'pc') image = pcImage;
  //             if (type === 'tablet') image = tabletImage;
  //             if (type === 'sp') image = spImage;

  //             return (
  //               <Parallax key={i} offset={parallaxProps[i].offset} stiffness={parallaxProps[i].stiffness}>
  //                 {/* <img src={image} alt={`${type} image`} className={`works_${type}_image`} /> */}

  //                 <img src={ImagesArray[i].pcImage} alt={`${type} image`} className={`works_pc_image`} />
  //                 <img src={ImagesArray[i].tabletImage} alt={`${type} image`} className={`works_tablet_image`} />
  //                 <img src={ImagesArray[i].spImage} alt={`${type} image`} className={`works_${type}_image`} />
  //               </Parallax>
  //             );
  //           })}
  //         </div>
  //       );
  //     });
  //   };

  return (
    <div className="works section works_bg">
      {/* <div className="works_bg"></div> */}
      <h2>Works</h2>

      {/* {WorksData.map((work) => ( */}

      <div className={`works_flex`}>
        {/* 使わない<div className="works_image" ref={ref}> */}
        <div className="works_image">

          {/* 😆😆😆 */}
          {/* <div className="works-container">{renderWorks()}</div> */}

          {/* <img src={ImagesArray[0].pcImage} alt={`pc image`} className={`works_pc_image`} />
          <img src={ImagesArray[0].tabletImage} alt={`tablet image`} className={`works_tablet_image`} />
          <img src={ImagesArray[0].spImage} alt={`sp image`} className={`works_sp_image`} /> */}

          {/* {console.log(inView)} */}

          <div className="works-container">

            {LeanImagesArray.map((project, index) => (
              <div key={index} className="project-container">
                {['pc', 'tablet', 'sp'].map((type, i) => {
                  const { pcImage, tabletImage, spImage } = project;
                  let image;

                  if (type === 'pc') image = pcImage;
                  if (type === 'tablet') image = tabletImage;
                  if (type === 'sp') image = spImage;

                  return (
                    <Parallax key={i} offset={parallaxProps[i].offset} stiffness={parallaxProps[i].stiffness}>
                      <img src={image} alt={`${type} image`} className={`works_${type}_image`} />
                    </Parallax>
                  );
                })}
              </div>
            ))}


          </div>
        </div>

        <div className="works_text">
          <div className="works_text_title">
            {/* 🙋‍♀️ */}
            <h3>{WorksData[0].title}</h3>

            <a
              className={`  toggleBox-en ${ isJapanese ? 'display-none' : ''}`}
              // 🙋‍♀️
              href={`${WorksData[0].siteLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              view site
            </a>
            <a
              className={` toggleBox-jp ${isJapanese ? '' : 'display-none'}`}
              // 🙋‍♀️
              href={`${WorksData[0].siteLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              サイトを見る
            </a>
          </div>

          <div className="works_text_sent">
            {/* 🙋‍♀️🙋‍♀️ */}
            <p className={`left-align toggleBox-en ${isJapanese ? 'display-none' : ''}`}>
              {WorksData[0].descriptionEn}
            </p>
            <p className={`left-align toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>
              {WorksData[0].descriptionJp}
            </p>
          </div>

          <div className="language-meter">
            {/* 🙋‍♀️ */}
            {WorksData[0].languages.html && (
            <div
              // 🙋‍♀️🙋‍♀️
              className={`lean-meter-html meter-html`}
              style={{ width: WorksData[0].languageDistribution.html }}
            ></div>
            )}

            {/* 🙋‍♀️ */}
            {WorksData[0].languages.css && (
            <div
              // 🙋‍♀️🙋‍♀️
              className={`lean-meter-css meter-css`}
              style={{ width: WorksData[0].languageDistribution.css }}
            ></div>
            )}

            {/* 🙋‍♀️ */}
            {WorksData[0].languages.ts && (
            <div
              //   🙋‍♀️🙋‍♀️
              className={`lean-meter-ts meter-ts`}
              style={{ width: WorksData[0].languageDistribution.ts }}
            ></div>
            )}

            {/* 🙋‍♀️ */}
            {WorksData[0].languages.js && (
            <div
              //   🙋‍♀️🙋‍♀️
              className={`lean-meter-js meter-js`}
              style={{ width: WorksData[0].languageDistribution.js }}
            ></div>
            )}

          </div>

          <div className="language-meter-info">
            {/* 🙋‍♀️ */}
            {WorksData[0].languages.html && (
            <div className='html'>
              <div className="html-circle"></div>
              <p>HTML</p>
            </div>
            )}
            {/* 🙋‍♀️ */}
            {WorksData[0].languages.css && (
            <div className='css'>
              <div className="css-circle"></div>
              <p>CSS</p>
            </div>
            )}

            {/* 🙋‍♀️ */}
            {WorksData[0].languages.ts && (
            <div className='ts'>
              <div className="ts-circle"></div>
              <p>TypeScript</p>
            </div>
            )}

            {/* 🙋‍♀️ */}
            {WorksData[0].languages.js && (
            <div className='js'>
              <div className="js-circle"></div>
              <p>JavaScript</p>
            </div>
            )}
          </div>
        </div>
      </div>

              
      <div className={`works_flex`}>
        <div className="works_image">
          <div className="works-container">

            {PomodoroImagesArray.map((project, index) => (
              <div key={index} className="project-container">
                {['pc', 'tablet', 'sp'].map((type, i) => {
                  const { pcImage, tabletImage, spImage } = project;
                  let image;
console.log(PomodoroImagesArray)
                  if (type === 'pc') image = pcImage;
                  if (type === 'tablet') image = tabletImage;
                  if (type === 'sp') image = spImage;

                  return (
                    <Parallax key={i} offset={parallaxProps[i].offset} stiffness={parallaxProps[i].stiffness}>
                      <img src={image} alt={`${type} image`} className={`works_${type}_image`} />
                    </Parallax>
                  );

                })}
              </div>
            ))}
          </div>
        </div>

        <div className="works_text">
          <div className="works_text_title">
            {/* 🙋‍♀️ */}
            <h3>{WorksData[1].title}</h3>
              
            <a

              className={` toggleBox-en ${isJapanese ? 'display-none' : ''}`}
              // 🙋‍♀️
              href={`${WorksData[1].siteLink}`}
              target="_blank"
              rel="noopener noreferrer"
            > 

              view site
            </a>
            <a

              className={` toggleBox-jp ${isJapanese ? '' : 'display-none'}`}
              // 🙋‍♀️
              href={`${WorksData[1].siteLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              サイトを見る
            </a>
          </div>

          <div className="works_text_sent">
            {/* 🙋‍♀️🙋‍♀️ */}
            <p className={`left-align toggleBox-en ${isJapanese ? 'display-none' : ''}`}>
              {WorksData[1].descriptionEn}
            </p>
            <p className={`left-align toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>
              {WorksData[1].descriptionJp}

            </p>
          </div>
                
          <div className="language-meter">
            {/* 🙋‍♀️ */}
            {WorksData[1].languages.html && (
            <div
              
              // 🙋‍♀️🙋‍♀️
              className={`pomodoro-meter-html meter-html`}
              style={{ width: WorksData[1].languageDistribution.html }}
            ></div>
            )}

            {/* 🙋‍♀️ */}
            {WorksData[1].languages.css && (
            <div
              // 🙋‍♀️🙋‍♀️
              className={`pomodoro-meter-css meter-css`}
              style={{ width: WorksData[1].languageDistribution.css }}

            ></div>
            )}

            {/* 🙋‍♀️ */}
            {WorksData[1].languages.ts && (
            <div
              //   🙋‍♀️🙋‍♀️
              className={`pomodoro-meter-ts meter-ts`}
              style={{ width: WorksData[1].languageDistribution.ts }}
            ></div>
            )}

            {/* 🙋‍♀️ */}
            {WorksData[1].languages.js && (
            <div
              //   🙋‍♀️🙋‍♀️
              className={`pomodoro-meter-js meter-js`}
              style={{ width: WorksData[1].languageDistribution.js }}
            ></div>
            )}

          </div>

          <div className="language-meter-info">
            {/* 🙋‍♀️ */}
            {WorksData[1].languages.html && (
            <div className='html'>
              <div className="html-circle"></div>
              <p>HTML</p>
            </div>
            )}
            {/* 🙋‍♀️ */}
            {WorksData[1].languages.css && (
            <div className='css'>
              <div className="css-circle"></div>
              <p>CSS</p>
            </div>
            )}

            {/* 🙋‍♀️ */}
            {WorksData[1].languages.ts && (
            <div className='ts'>
              <div className="ts-circle"></div>
              <p>TypeScript</p>
            </div>
            )}

            {/* 🙋‍♀️ */}
            {WorksData[1].languages.js && (
        <div className='js'>  

              <div className="js-circle"></div>
              <p>JavaScript</p>
            </div>
            )}
          </div>
        </div>
      </div>


      <div className={`works_flex`}>
        {/* 使わない<div className="works_image" ref={ref}> */}
        <div className="works_image">
           
          <div className="works-container">

            {NinbaiImagesArray.map((project, index) => (
              <div key={index} className="project-container">
                {['pc', 'tablet', 'sp'].map((type, i) => {
                  const { pcImage, tabletImage, spImage } = project;
                  let image;

                  if (type === 'pc') image = pcImage;
                  if (type === 'tablet') image = tabletImage;
                  if (type === 'sp') image = spImage;

                  return (
                    <Parallax key={i} offset={parallaxProps[i].offset} stiffness={parallaxProps[i].stiffness}>
                      <img src={image} alt={`${type} image`} className={`works_${type}_image`} />
                    </Parallax>
                  );

                })}
              </div>
            ))}
          </div>
        </div>

        <div className="works_text">
          <div className="works_text_title">
            {/* 🙋‍♀️ */}
            <h3>{WorksData[2].title}</h3>
              
            <a

              className={` toggleBox-en ${isJapanese ? 'display-none' : ''}`}
              // 🙋‍♀️
              href={`${WorksData[2].siteLink}`}
              target="_blank"
              rel="noopener noreferrer"
            > 

              view site
            </a>
            <a

              className={` toggleBox-jp ${isJapanese ? '' : 'display-none'}`}
              // 🙋‍♀️
              href={`${WorksData[2].siteLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              サイトを見る
            </a>
          </div>

          <div className="works_text_sent">
            {/* 🙋‍♀️🙋‍♀️ */}
            <p className={`left-align toggleBox-en ${isJapanese ? 'display-none' : ''}`}>
              {WorksData[2].descriptionEn}
            </p>
            <p className={`left-align toggleBox-jp ${isJapanese ? '' : 'display-none'}`}>
              {WorksData[2].descriptionJp}

            </p>
          </div>
                
          <div className="language-meter">
            {/* 🙋‍♀️ */}
            {WorksData[2].languages.html && (
            <div
              
              // 🙋‍♀️🙋‍♀️
              className={`pomodoro-meter-html meter-html`}
              style={{ width: WorksData[2].languageDistribution.html }}
            ></div>
            )}

            {/* 🙋‍♀️ */}
            {WorksData[2].languages.css && (
            <div
              // 🙋‍♀️🙋‍♀️
              className={`pomodoro-meter-css meter-css`}
              style={{ width: WorksData[2].languageDistribution.css }}

            ></div>
            )}

            {/* 🙋‍♀️ */}
            {WorksData[2].languages.ts && (
            <div
              //   🙋‍♀️🙋‍♀️
              className={`pomodoro-meter-ts meter-ts`}
              style={{ width: WorksData[2].languageDistribution.ts }}
            ></div>
            )}

            {/* 🙋‍♀️ */}
            {WorksData[2].languages.js && (
            <div
              //   🙋‍♀️🙋‍♀️
              className={`pomodoro-meter-js meter-js`}
              style={{ width: WorksData[2].languageDistribution.js }}
            ></div>
            )}

          </div>

          <div className="language-meter-info">
            {/* 🙋‍♀️ */}
            {WorksData[2].languages.html && (
            <div className='html'>
              <div className="html-circle"></div>
              <p>HTML</p>
            </div>
            )}
            {/* 🙋‍♀️ */}
            {WorksData[2].languages.css && (
            <div className='css'>
              <div className="css-circle"></div>
              <p>CSS</p>
            </div>
            )}

            {/* 🙋‍♀️ */}
            {WorksData[2].languages.ts && (
            <div className='ts'>
              <div className="ts-circle"></div>
              <p>TypeScript</p>
            </div>
            )}

            {/* 🙋‍♀️ */}
            {WorksData[2].languages.js && (
            <div className='js'>  
              <div className="js-circle"></div>
              <p>JavaScript</p>
            </div>
            )}
          </div>
        </div>
      </div>
   





       {/* ))} */}
    </div>
  );
};

export default Works;




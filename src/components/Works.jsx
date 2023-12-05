import WorksData from "./WorksData";
import "./css/Works.css";

import Parallax from "./Parallax";
import { motion } from "framer-motion";

const Image = ({}) => (
  <motion.img
    style={{
      position: "absolute",
      height: "auto",
      objectFit: "cover",
      objectPosition: "center 0%",
      top: `${top}%`,
      left: `${left}%`,
      width: `${width}%`,
    }}
  />
);

const Works = ({ isJapanese }) => {
  const LeanImagesArray = [
    {
      pcImage: WorksData[0].pcImage,
      tabletImage: WorksData[0].tabletImage,
      spImage: WorksData[0].spImage,
    },
  ];

  const PomodoroImagesArray = [
    {
      pcImage: WorksData[1].pcImage,
      tabletImage: WorksData[1].tabletImage,
      spImage: WorksData[1].spImage,
    },
  ];

  const NinbaiImagesArray = [
    {
      pcImage: WorksData[2].pcImage,
      tabletImage: WorksData[2].tabletImage,
      spImage: WorksData[2].spImage,
    },
  ];

  const parallaxProps = [
    { offset: 100, stiffness: 100 },
    { offset: 100, stiffness: 150 },
    { offset: 100, stiffness: 200 },
  ];

  return (
    <div className="works section works-bg">
      <h2>Works</h2>

      <div className={`work-flex minus-x`}>
        <div className="works-img-container">
          {LeanImagesArray.map((project, index) => (
            <div key={index} className="project-container">
              {["pc", "tablet", "sp"].map((type, i) => {
                const { pcImage, tabletImage, spImage } = project;
                let image;

                if (type === "pc") image = pcImage;
                if (type === "tablet") image = tabletImage;
                if (type === "sp") image = spImage;

                return (
                  <Parallax
                    key={i}
                    offset={parallaxProps[i].offset}
                    stiffness={parallaxProps[i].stiffness}
                  >
                    <a
                      href={`${WorksData[0].siteLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={image}
                        alt={`${type} image`}
                        className={`works-img works-${type}-img`}
                      />
                    </a>
                  </Parallax>
                );
              })}
            </div>
          ))}
        </div>

        <div className="works-text">
          <div className="works-text-title">
            <a
              // className={`toggleBox-en ${isJapanese ? 'display-none' : ''}`}
              href={`${WorksData[0].siteLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{WorksData[0].title}</h3>
            </a>

          </div>

          <div className="works-text-sent">
            <p
              className={`left-align toggleBox-en ${
                isJapanese ? "display-none" : ""
              }`}
            >
              {WorksData[0].descriptionEn}
            </p>
            <p
              className={`left-align toggleBox-jp ${
                isJapanese ? "" : "display-none"
              }`}
            >
              {WorksData[0].descriptionJp}
            </p>
          </div>

          <div className="language-meter">
            {WorksData[0].languages.html && (
              <div
                className={`lean-meter-html meter-html`}
                style={{ width: WorksData[0].languageDistribution.html }}
              ></div>
            )}

            {WorksData[0].languages.css && (
              <div
                className={`lean-meter-css meter-css`}
                style={{ width: WorksData[0].languageDistribution.css }}
              ></div>
            )}

            {WorksData[0].languages.ts && (
              <div
                className={`lean-meter-ts meter-ts`}
                style={{ width: WorksData[0].languageDistribution.ts }}
              ></div>
            )}

            {WorksData[0].languages.js && (
              <div
                className={`lean-meter-js meter-js`}
                style={{ width: WorksData[0].languageDistribution.js }}
              ></div>
            )}
          </div>

          <div className="language-meter-info">
            {WorksData[0].languages.html && (
              <div className="html">
                <div className="html-circle"></div>
                <p>HTML</p>
              </div>
            )}

            {WorksData[0].languages.css && (
              <div className="css">
                <div className="css-circle"></div>
                <p>CSS</p>
              </div>
            )}

            {WorksData[0].languages.ts && (
              <div className="ts">
                <div className="ts-circle"></div>
                <p>TypeScript</p>
              </div>
            )}

            {WorksData[0].languages.js && (
              <div className="js">
                <div className="js-circle"></div>
                <p>JavaScript</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Pomodoro */}
      <div className={`work-flex plus-x`}>
        <div className="works-img-container">
          {PomodoroImagesArray.map((project, index) => (
            <div key={index} className="project-container">
              {["pc", "tablet", "sp"].map((type, i) => {
                const { pcImage, tabletImage, spImage } = project;
                let image;
                console.log(PomodoroImagesArray);
                if (type === "pc") image = pcImage;
                if (type === "tablet") image = tabletImage;
                if (type === "sp") image = spImage;

                return (
                  <Parallax
                    key={i}
                    offset={parallaxProps[i].offset}
                    stiffness={parallaxProps[i].stiffness}
                  >
                    <a
                      href={`${WorksData[1].siteLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={image}
                        alt={`${type} image`}
                        className={`works-img works-${type}-img`}
                      />
                    </a>
                  </Parallax>
                );
              })}
            </div>
          ))}
        </div>

        <div className="works-text">
          <div className="works-text-title">
            <a
              // className={` toggleBox-en ${isJapanese ? 'display-none' : ''}`}
              href={`${WorksData[1].siteLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{WorksData[1].title}</h3>
            </a>

            {/* <a
              className={` toggleBox-en ${isJapanese ? 'display-none' : ''}`}
              href={`${WorksData[1].siteLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              view site
            </a>
            <a
              className={` toggleBox-jp ${isJapanese ? '' : 'display-none'}`}
              href={`${WorksData[1].siteLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              サイトを見る
            </a> */}
          </div>

          <div className="works-text-sent">
            <p
              className={`left-align toggleBox-en ${
                isJapanese ? "display-none" : ""
              }`}
            >
              {WorksData[1].descriptionEn}
            </p>
            <p
              className={`left-align toggleBox-jp ${
                isJapanese ? "" : "display-none"
              }`}
            >
              {WorksData[1].descriptionJp}
            </p>
          </div>

          <div className="language-meter">
            {WorksData[1].languages.html && (
              <div
                className={`pomodoro-meter-html meter-html`}
                style={{ width: WorksData[1].languageDistribution.html }}
              ></div>
            )}

            {WorksData[1].languages.css && (
              <div
                className={`pomodoro-meter-css meter-css`}
                style={{ width: WorksData[1].languageDistribution.css }}
              ></div>
            )}

            {WorksData[1].languages.ts && (
              <div
                className={`pomodoro-meter-ts meter-ts`}
                style={{ width: WorksData[1].languageDistribution.ts }}
              ></div>
            )}

            {WorksData[1].languages.js && (
              <div
                className={`pomodoro-meter-js meter-js`}
                style={{ width: WorksData[1].languageDistribution.js }}
              ></div>
            )}
          </div>

          <div className="language-meter-info">
            {WorksData[1].languages.html && (
              <div className="html">
                <div className="html-circle"></div>
                <p>HTML</p>
              </div>
            )}

            {WorksData[1].languages.css && (
              <div className="css">
                <div className="css-circle"></div>
                <p>CSS</p>
              </div>
            )}

            {WorksData[1].languages.ts && (
              <div className="ts">
                <div className="ts-circle"></div>
                <p>TypeScript</p>
              </div>
            )}

            {WorksData[1].languages.js && (
              <div className="js">
                <div className="js-circle"></div>
                <p>JavaScript</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Ninbai */}
      <div className={`work-flex minus-x`}>
        <div className="works-img-container">
          {NinbaiImagesArray.map((project, index) => (
            <div key={index} className="project-container">
              {["pc", "tablet", "sp"].map((type, i) => {
                const { pcImage, tabletImage, spImage } = project;
                let image;

                if (type === "pc") image = pcImage;
                if (type === "tablet") image = tabletImage;
                if (type === "sp") image = spImage;

                return (
                  <Parallax
                    key={i}
                    offset={parallaxProps[i].offset}
                    stiffness={parallaxProps[i].stiffness}
                  >
                    <a
                      href={`${WorksData[2].siteLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={image}
                        alt={`${type} image`}
                        className={`works-${type}-img`}
                      />
                    </a>
                  </Parallax>
                );
              })}
            </div>
          ))}
        </div>

        <div className="works-text">
          <div className="works-text-title">
            <a
              // className={` toggleBox-en ${isJapanese ? 'display-none' : ''}`}
              href={`${WorksData[2].siteLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{WorksData[2].title}</h3>
            </a>

            {/* <a
              className={` toggleBox-en ${isJapanese ? 'display-none' : ''}`}
              href={`${WorksData[2].siteLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              view site
            </a>
            <a
              className={` toggleBox-jp ${isJapanese ? '' : 'display-none'}`}
              href={`${WorksData[2].siteLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              サイトを見る
            </a> */}
          </div>

          <div className="works-text-sent">
            <p
              className={`left-align toggleBox-en ${
                isJapanese ? "display-none" : ""
              }`}
            >
              {WorksData[2].descriptionEn}
            </p>
            <p
              className={`left-align toggleBox-jp ${
                isJapanese ? "" : "display-none"
              }`}
            >
              {WorksData[2].descriptionJp}
            </p>
          </div>

          <div className="language-meter">
            {WorksData[2].languages.html && (
              <div
                className={`pomodoro-meter-html meter-html`}
                style={{ width: WorksData[2].languageDistribution.html }}
              ></div>
            )}

            {WorksData[2].languages.css && (
              <div
                className={`pomodoro-meter-css meter-css`}
                style={{ width: WorksData[2].languageDistribution.css }}
              ></div>
            )}

            {WorksData[2].languages.ts && (
              <div
                className={`pomodoro-meter-ts meter-ts`}
                style={{ width: WorksData[2].languageDistribution.ts }}
              ></div>
            )}

            {WorksData[2].languages.js && (
              <div
                className={`pomodoro-meter-js meter-js`}
                style={{ width: WorksData[2].languageDistribution.js }}
              ></div>
            )}
          </div>

          <div className="language-meter-info">
            {WorksData[2].languages.html && (
              <div className="html">
                <div className="html-circle"></div>
                <p>HTML</p>
              </div>
            )}

            {WorksData[2].languages.css && (
              <div className="css">
                <div className="css-circle"></div>
                <p>CSS</p>
              </div>
            )}

            {WorksData[2].languages.ts && (
              <div className="ts">
                <div className="ts-circle"></div>
                <p>TypeScript</p>
              </div>
            )}

            {WorksData[2].languages.js && (
              <div className="js">
                <div className="js-circle"></div>
                <p>JavaScript</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;

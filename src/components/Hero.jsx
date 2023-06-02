import { useState } from 'react';
import Spline from '@splinetool/react-spline';

function Hero({ isJapanese }) {
  const [count, setCount] = useState(0);

  return (
    <div className="hero ">
      <div className="hero_width">
      <div className="circles"></div>


      <div className="hero_left">
        <div className="intro">
          <h2>Hi, I'm Iori !</h2>
          <h3>Front-end learner</h3>
        </div>
        <div className="spline">
          <Spline scene="https://prod.spline.design/Yf-lxfYRDOlgM0NW/scene.splinecode" />
        </div>
      </div>

      <div
        className={`hero_right toggleBox-en ${
          isJapanese ? 'display-none' : ''
        }`}
      >
        As a self-taught learner, I continuously pursue new challenges and
        opportunities to sharpen my abilities. My passion lies in acquiring
        knowledge and staying abreast with the latest advancements that have the
        potential to improve our lives. Driven by curiosity and a desire for
        personal growth, I strive to turn insights into impactful actions.
      </div>
      <div
        className={`hero_right toggleBox-jp ${
          isJapanese ? '' : 'display-none'
        }`}
      >
        独学で学ぶ者として、私は自分の能力を磨くために新しい挑戦と機会を追い求め続けています。私の情熱は、知識を身につけ、私たちの生活を向上させる可能性のある最新の進歩に遅れないようにすることにあります。好奇心と自己成長への欲求に突き動かされ、自分なりの考えをインパクトある行動につなげるよう努力しています。
      </div>
      </div>
    </div>
  );
}

export default Hero;

// 前の
// {/* <Spline scene="https://prod.spline.design/oMHtygfB0MXKMfAl/scene.splinecode" /> */}

// styled component版
// import { useState } from 'react';
// import styled from 'styled-components';
// import Spline from '@splinetool/react-spline';

// const SplineContainer = styled.div`
//   width: 80%;
//   height: 50vh;
//   margin: 10vh auto;
//   position: relative;
// `;

// const StyledSvg = styled.svg`
//   position: absolute;
//   bottom: 0;
// `;

// const StyledCanvas = styled.canvas`
//   position: absolute;
//   bottom: 0;
//   z-index: 2;
// `;

// const StyledImg = styled.img`
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   height: 80vh;
//   z-index: 1;
// `;

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <SplineContainer>
//       <Spline scene="https://prod.spline.design/zcaoqR2JOYOCmmmd/scene.splinecode" />
//       {/* Assuming the SVG, Canvas and Image are part of your component */}
//       <StyledSvg />
//       <StyledCanvas />
//       <StyledImg />
//     </SplineContainer>
//   );
// }

// export default App;

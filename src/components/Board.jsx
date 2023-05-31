import { useState } from 'react';
import Spline from '@splinetool/react-spline';

function Board() {
  const [count, setCount] = useState(0);

  return (
    <div className="spline">
      <Spline scene="https://prod.spline.design/Yf-lxfYRDOlgM0NW/scene.splinecode" />
    </div>
  );
}

export default Board;

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


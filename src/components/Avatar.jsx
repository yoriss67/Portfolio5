import { useState } from 'react';
// import reactLogo from '../assets/react.svg';
// import viteLogo from '/vite.svg';
// import './Avatar.css';
import Spline from '@splinetool/react-spline';

function Avatar() {
  const [count, setCount] = useState(0);

  return (
    <div className='avatar'>
   
      <h2>I’m learning React now!</h2>
      <div className="canvas_pa spline">
      <Spline scene="https://prod.spline.design/o-qD5uBjwhHFWCAL/scene.splinecode" />
      </div>
    </div>
  );
}

export default Avatar;

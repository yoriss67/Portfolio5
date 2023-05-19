import { useState } from 'react';
// import reactLogo from '../assets/react.svg';
// import viteLogo from '/vite.svg';
import './Avatar.css';
import Spline from '@splinetool/react-spline';

function Avatar() {
  const [count, setCount] = useState(0);

  return (
    <div className="avatar">
        <Spline scene="https://prod.spline.design/6splkedRobq543mR/scene.splinecode" />
    </div>
  );
}

export default Avatar;

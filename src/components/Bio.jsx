// import React from 'react'
// import './Anime.css'

// function Anime() {

// return (

//     <div>
//         <div className="anime_pa">
//             <div className="anime_left"></div>
//             <div className="anime_right"></div>
//         </div>
//     </div>
// )
// }

// export default Anime

// 🌸
import React, { useEffect } from 'react';
// import './Bio.css';

function Bio() {
  useEffect(() => {
    const bioLeftElement = document.querySelector('.bio_left');
    const bioRightElement = document.querySelector('.bio_right');

    bioLeftElement.addEventListener('animationend', () => {
      bioRightElement.style.opacity = 1;
      bioRightElement.style.left = '50%'; // bio_rightの初期位置（画面の中央）に設定
    });
  }, []);

  return (
    <div>
      <div className="bio_pa">
        <div className="bio_left"></div>
        <div className="bio_right">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore blanditiis minima, eaque optio tenetur aspernatur qui fugit ut id repudiandae itaque in repellendus officiis hic cum quisquam saepe quia veritatis.</div>
      </div>
    </div>
  );
}

export default Bio;
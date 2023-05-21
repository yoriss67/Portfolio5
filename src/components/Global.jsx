// import React, { useState, useEffect } from 'react';
// import './Global.css';

// function Global({ isJapanese, setLanguage })  {



//   useEffect(() => {
//     const loader = document.getElementById('loading');
//     loader.classList.add('loaded');
//   }, []);

//   document.addEventListener('mousemove', function (e) {
//     const x = e.clientX;
//     const y = e.clientY;
//     const cursor = document.querySelector('#cursor');
//     const stalker = document.querySelector('#stalker');

//     cursor.style.opacity = '1';
//     cursor.style.top = y + 'px';
//     cursor.style.left = x + 'px';

//     setTimeout(function () {
//       stalker.style.opacity = '.4';
//       stalker.style.top = y + 'px';
//       stalker.style.left = x + 'px';
//     }, 140);
//   });


//   // LANGUAGE SWITCH
//   const toggleBoxesEn = document.querySelector('.toggleBox-en');
//   const toggleBoxesJp = document.querySelector('.toggleBox-jp');
//   // toggleBoxesJp.forEach((toggleBox) => toggleBox.classList.add('display-none'));


// // Add a state to control the language
// const [isJapanese, setLanguage] = useState(false);

// // Function to handle the click event
// const handleTranslateClick = () => {
//   setLanguage(!isJapanese);
// };




//   // document.querySelector('#translate').addEventListener('click', function () {
//   //   toggleBoxesEn.forEach((toggleBox) =>
//   //     toggleBox.classList.toggle('display-none'),
//   //   );
//   //   toggleBoxesJp.forEach((toggleBox) =>
//   //     toggleBox.classList.toggle('display-none'),
//   //   );
//   // });


//   return (
//     <>
//       <div id="cursor"></div>
//       <div id="stalker"></div>

//       <div id="loading">
//         <div id="loading-relative">
//           <div className="sun-circle"></div>
//           <div className="horizon"></div>

//           <div className="sun-border1"></div>
//           <div className="sun-border2"></div>
//           <div className="sun-border3"></div>
//           <div className="sun-border4"></div>
//           <div className="sun-border5"></div>
//         </div>
//       </div>

//       {/* // Add the translation button here */}
// <button 
//   id="translate" 
//   className={`js-turn-to-red ${isJapanese ? 'change-color' : ''}`} 
//   onClick={handleTranslateClick}
// >
//   <p>EN-JP</p>
// </button>
//     </>
//   );
// }

// export default Global;


import React, { useEffect } from 'react';
import './Global.css';

function Global({ isJapanese, setLanguage })  {

  useEffect(() => {
    const loader = document.getElementById('loading');
    loader.classList.add('loaded');
  }, []);

  // Function to handle the click event
  const handleTranslateClick = () => {
    setLanguage(!isJapanese);
  };

  return (
    <>
      <div id="cursor"></div>
      <div id="stalker"></div>

      <div id="loading">
        <div id="loading-relative">
          <div className="sun-circle"></div>
          <div className="horizon"></div>

          <div className="sun-border1"></div>
          <div className="sun-border2"></div>
          <div className="sun-border3"></div>
          <div className="sun-border4"></div>
          <div className="sun-border5"></div>
        </div>
      </div>

      <button 
        id="translate" 
        className={`js-turn-to-red ${isJapanese ? 'change-color' : ''}`} 
        onClick={handleTranslateClick}
      >
        <p>EN-JP</p>
      </button>
    </>
  );
}

export default Global;

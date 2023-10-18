// import React, { useEffect, useState } from 'react';
// import './css/Global.css';

// const Note = ({ isJapanese }) => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     async function fetchNote() {
//       try {
//         const response = await fetch('http://localhost:3002/latest-articles');
//         if (!response.ok) {
//           throw new Error('Network response was not ok ' + response.statusText);
//         }
//         const data = await response.json();
//         setArticles(data);
//       } catch (error) {
//         console.error('There has been a problem with your fetch operation:', error);
//       }
//     }

//     fetchNote();
//   }, []);

//   return (
//     <div className="note section">
//       <div className="note-container">
//         <div className={`note-heading toggleBox-en ${isJapanese ? 'display-none' : ''} `}>
//           <h2>I'm frequently on </h2>
//           <img src="icons/square.svg" alt="note square" />
//         </div>

//         <div className={`note-heading  toggleBox-jp ${isJapanese ? '' : 'display-none'} `}>
//           <img src="icons/square.svg" alt="note square" /><h2>よく使ってます</h2>
//         </div>

//         <div className="article-container">
//           {articles.map((article, index) => (
//             <div key={index} className="article">
//               <img src={article.thumbnail} alt={article.title} />
//               <h3>{article.title}</h3>
//               <div dangerouslySetInnerHTML={{ __html: article.description }} className="article-desc" />
//               {/* <a href={article.link} target="_blank" rel="noopener noreferrer"></a> */}
//             </div>
//           ))}
//         </div>
//         <div className="more-container">
//           <button
//             className={`more-button  toggleBox-en ${isJapanese ? 'display-none' : ''} `}
//             onClick={() => (window.location.href = 'https://note.com/yoriss_b0607')}
//           >
//             view more on my creator page
//           </button>
//           <button
//             className={`more-button  toggleBox-jp ${isJapanese ? '' : 'display-none'}`}
//             onClick={() => (window.location.href = 'https://note.com/yoriss_b0607')}
//           >
//             クリエイターページでもっと見る
//           </button>
//           <img src="icons/note.svg" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Note;









// import React, { useEffect, useState } from 'react';
// import './css/Global.css';

// const Note = ({ isJapanese }) => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     async function fetchNote() {
//       try {
//         const response = await fetch('http://localhost:3002/latest-articles');
//         if (!response.ok) {
//           throw new Error('Network response was not ok ' + response.statusText);
//         }
//         const data = await response.json();
//         if (!isJapanese) {
//           const translatedData = await Promise.all(
//             data.map(async (article) => {
//               const translatedTitle = await translateText(article.title, 'en');
//               const translatedDescription = await translateText(article.description, 'en');
//               return {
//                 ...article,
//                 title: translatedTitle,
//                 description: translatedDescription,
//               };
//             }),
//           );
//           setArticles(translatedData);
//         } else {
//           setArticles(data);
//         }
//       } catch (error) {
//         console.error('There has been a problem with your fetch operation:', error);
//       }
//     }

//     async function translateText(text, targetLang) {
//       try {
//         const response = await fetch('https://libretranslate.com/translate', {
//           method: 'POST',
//           headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             q: text,
//             source: 'ja',
//             target: targetLang,
//             api_key: '',  // If the API requires an API key
//           })
//         });
//         const data = await response.json();
//         return data.translatedText;
//       } catch (error) {
//         console.error('Translation failed:', error);
//         return text;  // Return the original text if translation fails
//       }
//     }


//     // async function translateText(text, targetLang) {
//     //   try {
//     //     const response = await fetch('http://localhost:3002/translate', {
//     //       method: 'POST',
//     //       headers: {
//     //         Accept: 'application/json',
//     //         'Content-Type': 'application/json',
//     //       },
//     //       body: JSON.stringify({
//     //         text,
//     //         targetLang,
//     //       }),
//     //     });
//     //     const data = await response.json();
//     //     return data.translatedText;
//     //   } catch (error) {
//     //     console.error('Translation failed:', error);
//     //     return text; // Return the original text if translation fails
//     //   }
//     // }


//     fetchNote();
//   }, [isJapanese]);

//   return (
//     <div className="note section">
//       <div className="note-container">
//         <div className={`note-heading toggleBox-en ${isJapanese ? 'display-none' : ''} `}>
//           <h2>I'm frequently on </h2>
//           <img src="icons/square.svg" alt="note square" />
//         </div>

//         <div className={`note-heading  toggleBox-jp ${isJapanese ? '' : 'display-none'} `}>
//           <img src="icons/square.svg" alt="note square" />
//           <h2>よく使ってます</h2>
//         </div>

//         <div className="article-container">
//           {articles.map((article, index) => (
//             <div key={index} className="article">
//               <img src={article.thumbnail} alt={article.title} />
//               <h3>{article.title}</h3>
//               <div dangerouslySetInnerHTML={{ __html: article.description }} className="article-desc" />
//               {/* <a href={article.link} target="_blank" rel="noopener noreferrer"></a> */}
//             </div>
//           ))}
//         </div>
//         <div className="more-container">
//           <button
//             className={`more-button  toggleBox-en ${isJapanese ? 'display-none' : ''} `}
//             onClick={() => (window.location.href = 'https://note.com/yoriss_b0607')}
//           >
//             view more on my creator page
//           </button>
//           <button
//             className={`more-button  toggleBox-jp ${isJapanese ? '' : 'display-none'}`}
//             onClick={() => (window.location.href = 'https://note.com/yoriss_b0607')}
//           >
//             クリエイターページでもっと見る
//           </button>
//           <img src="icons/note.svg" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Note;



import React, { useEffect, useState } from 'react';
import './css/Global.css';

const Note = ({ isJapanese }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // async function fetchNote() {
    //   try {
    //     const response = await fetch('http://localhost:3002/latest-articles');
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok ' + response.statusText);
    //     }
    //     const data = await response.json();
    //     setArticles(data);
    //   } catch (error) {
    //     console.error('There has been a problem with your fetch operation:', error);
    //   }
    // }

    const url = 'https://without-server.netlify.app/.netlify/functions/latest-articles';
    async function fetchNote() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          const text = await response.text();
          console.error('Error response:', text);
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    }

    fetchNote();
  }, [isJapanese]);

  return (
    <div className="note section">
      
      <div className="note-container">
        <div className={`note-heading toggleBox-en ${isJapanese ? 'display-none' : ''} `}>
          <h2>I'm frequently on </h2>
          <img src="icons/square.svg" alt="note square" />
        </div>

        <div className={`note-heading  toggleBox-jp ${isJapanese ? '' : 'display-none'} `}>
          <img src="icons/square.svg" alt="note square" />
          {/*<h2>よく使ってます</h2>*/}
        </div>

        <div className="article-container">
          {articles.map((article, index) => (
            <div key={index} className="article">
              <img src={article.thumbnail} alt={article.title} />
              <h3>{article.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: article.description }} className="article-desc" />
              {/* <a href={article.link} target="_blank" rel="noopener noreferrer"></a> */}
            </div>
          ))}
        </div>
        {/* <div className="more-container"> */}
       
          <button
            className={` more-button  toggleBox-en ${isJapanese ? 'display-none' : ''} `}
            onClick={() => (window.location.href = 'https://note.com/yoriss_b0607')}
          >
            <img src="icons/note.svg" alt="note icon" />
            <p>view more</p>
          </button>
          <button
            className={`more-button  toggleBox-jp ${isJapanese ? '' : 'display-none'}`}
            onClick={() => (window.location.href = 'https://note.com/yoriss_b0607')}
          >
            <img src="icons/note.svg" alt="note icon" />
            <p>もっと見る</p>
          </button>
        </div>
      </div>
    // </div>
  );
};

export default Note;

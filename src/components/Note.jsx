import React, { useEffect, useState } from 'react';
import './css/Global.css';



const Note = ({ isJapanese }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {


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


  function formatDate(dateString) {
    const options = { month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ja-JP', options);
  }


  // 翻訳APIを使ってテキストを翻訳する
  async function translateText(text, sourceLang, targetLang) {
    const url = 'https://libretranslate.com/translate';
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          q: text,
          source: sourceLang,
          target: targetLang,
          format: 'text'
        }),
      });
  
      const result = await response.json();
      return result.translatedText;
    } catch (error) {
      console.error('Translation error:', error);
      return text;
    }
  }
  




  const Article = ({ title, link, description, thumbnail, pubDate }) => {
    const handleArticleClick = () => {
      window.open(link, '_blank'); 
    };
  
    return (
      <div className="article" onClick={handleArticleClick}>
        <img src={thumbnail} alt={title} />
        <div className="article-text">
        <p className='article-date'>{formatDate(pubDate)}</p>
        <h3 className='article-title'>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: description }} className="article-desc" />
        </div>
      </div>
    );
  };
  

  // tryしてみたけど、エラーが出てしまう
  // const Article = ({ title, description, thumbnail, pubDate, link, isJapanese }) => {
  //   const [translatedTitle, setTranslatedTitle] = useState('');
  //   const [translatedDescription, setTranslatedDescription] = useState('');
  
  //   useEffect(() => {
  //     if (!isJapanese) {
  //       translateText(title, 'ja', 'en').then(setTranslatedTitle);
  //       translateText(description, 'ja', 'en').then(setTranslatedDescription);
  //     }
  //   }, [title, description, isJapanese]);
  
  //   const handleArticleClick = () => {
  //     window.open(link, '_blank');
  //   };
  
  //   return (
  //     <div className="article" onClick={handleArticleClick}>
  //       <img src={thumbnail} alt={title} />
  //       <div className="article-text">
  //         <p className='article-date'>{formatDate(pubDate)}</p>
  //         <h3 className='article-title'>{isJapanese ? title : translatedTitle}</h3>
  //         <div dangerouslySetInnerHTML={{ __html: isJapanese ? description : translatedDescription }} className="article-desc" />
  //       </div>
  //     </div>
  //   );
  // };
  
  
  
  


  return (
    <div className="note section">
      
      <div className="note-container">

        <h2>note</h2>
        {/* <div className={`note-heading toggleBox-en ${isJapanese ? 'display-none' : ''} `}>
          <img src="icons/square2.png" alt="note square" />
        </div>

        <div className={`note-heading  toggleBox-jp ${isJapanese ? '' : 'display-none'} `}>
          <img src="icons/square2.png" alt="note square" />
        </div> */}

        <div className="articles-container">
          {articles.map((article, index) => (
  
              <Article key={index} {...article} isJapanese={isJapanese}/>
      
          ))}
        </div>
       
          <button
            className={` more-button  toggleBox-en ${isJapanese ? 'display-none' : ''} `}
            onClick={() => (window.location.href = 'https://note.com/yoriss_b0607')}
          >
            {/* <img src="creator.png" alt="creator image" /> */}
            <p>view more</p>
          </button>
          <button
            className={`more-button  toggleBox-jp ${isJapanese ? '' : 'display-none'}`}
            onClick={() => (window.location.href = 'https://note.com/yoriss_b0607')}
          >
            {/* <img src="creator.png" alt="creator image"  /> */}
            <p>もっと見る</p>
          </button>
        </div>
      </div>
  );
};

export default Note;

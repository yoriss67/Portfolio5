import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Header, Hero, Bio, Works, Footer, Note, Lottie1 } from "../../index";
import Skeleton from "react-loading-skeleton";

import App from "./Skeleton/App";

function Home({ isJapanese}) {
  const [scrollY, setScrollY] = useState(0);
  const [profileImageLoaded, setProfileImageLoaded] = useState(false); 
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);



  useEffect(() => {
    const handleScroll = () => {
      const newY = window.scrollY;
      setScrollY(newY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollY)
  // // スクロール位置に基づいたスタイル
  // const profileStyle = {
  //   top: scrollY > 60 ? "108vh" : "52vh",
  //   left: scrollY > 60 ? "40%" : "24%",
  //   width: "20vw",
  //   position: "absolute",
  //   filter: scrollY > 60 ? "blur(0px)" : "blur(2px)",
  //   objectFit: "cover",
  // };

  const isMobile = viewportWidth < 768; // スマホ用の閾値

  // スクロール位置とビューポート幅に基づいたスタイル
  const profileStyle = isMobile
    ? {
        // スマートフォン用のスタイル
        top: "50vh", 
        left: "10%", 
        width: "80vw", 
        position: "absolute",
        objectFit: "cover",
      }
    : {
        // デスクトップ用のスタイル
        top: scrollY > 60 ? "148vh" : "52vh",
        left: scrollY > 60 ? "40%" : "24%",
        width: "20vw",
        position: "absolute",
        
        objectFit: "cover",
      };



  // // アニメーション用のスタイル
  // const profileAnimation = {
  //   top: scrollY > 60 ? "110vh" : "70vh",
  //   left: scrollY > 60 ? "38%" : "23%",
  //   borderRadius: scrollY > 60 ? "100%" : "20px",
  //   width: scrollY > 60 ? "25vw" : "20vw",
  //   height: scrollY > 60 ? "25vw" : "30vw",
  // };


    // アニメーション用のスタイル
    const profileAnimation = isMobile
    ? {
        // スマートフォン用のアニメーション
        top: scrollY > 60 ? "110vh" : "70vh",
        left: scrollY > 60 ? "28%" : "16%",
        width: scrollY > 60 ? "45vw" : "40vw",
        height: scrollY > 60 ? "45vw" : "60vw",
        borderRadius: scrollY > 60 ? "100%" : "20px",
        filter: scrollY > 60 ? "blur(0px)" : "blur(2px)",
      }
    : {
        // デスクトップ用のアニメーション
        top: scrollY > 60 ? "110vh" : "70vh",
        left: scrollY > 60 ? "38%" : "23%",
        width: scrollY > 60 ? "25vw" : "20vw",
        height: scrollY > 60 ? "25vw" : "30vw",
        borderRadius: scrollY > 60 ? "100%" : "20px",
        filter: scrollY > 60 ? "blur(0px)" : "blur(2px)",
      };

      console.log(profileAnimation)



  function handleProfileImageLoaded(imgKey) {
    console.log(`Global Profile Image ${imgKey} loaded`);
    setProfileImageLoaded((prev) => {
      const newState = { ...prev, [imgKey]: true };
      console.log(newState);
      return newState;
    });
  }


 

// 🌸🌸🌸
// スクロール位置に応じて top の値を計算する関数
// const calculateTopValue = () => {
//   const baseTop = 65; // 基準の高さ
//   const maxTop = 108; // 最大の高さ
//   const scrollThreshold = 60; // スクロールしきい値

//   if (scrollY <= scrollThreshold) {
//     // スクロール位置がしきい値以下の場合は基準の高さを使用
//     return `${baseTop}vh`;
//   } else {
//     // スクロール位置がしきい値を超えた場合は徐々に高さを増加
//     const additionalTop = Math.min((scrollY - scrollThreshold) / 10, 56);
//     return `${Math.min(baseTop + additionalTop, maxTop)}vh`; // 最大高さを超えないように制限
//   }
// };

// // スクロール位置に応じて left の値を計算する関数
// const calculateLeftValue = () => {
//   const baseLeft = 22; // 基準の左の位置（%）
//   const maxLeft = 40; // 最大の左の位置（%）
//   const scrollThreshold = 60; // スクロールしきい値

//   if (scrollY <= scrollThreshold) {
//     // スクロール位置がしきい値以下の場合は基準の位置を使用
//     return `${baseLeft}%`;
//   } else {
//     // スクロール位置がしきい値を超えた場合は徐々に位置を増加
//     const additionalLeft = Math.min((scrollY - scrollThreshold) / 10, 15);
//     return `${Math.min(baseLeft + additionalLeft, maxLeft)}%`; // 最大位置を超えないように制限
//   }
// };

// // スクロール位置に応じて border-radius の値を計算する関数
// const calculateBorderRadius = () => {
//   const scrollThreshold = 60; // スクロールしきい値

//   if (scrollY <= scrollThreshold) {
//     // スクロール位置がしきい値以下の場合は基準の値（40px）を使用
//     return "40px";
//   } else {
//     // スクロール位置がしきい値を超えた場合は徐々に値を増加させる
//     const radiusIncrease = Math.min((scrollY - scrollThreshold) / 5, 60); // 増加量を調節
//     const borderRadius = Math.min(40 + radiusIncrease, 100); // 最大100%まで
//     return borderRadius + "%";
//   }
// };


// // スクロール位置に応じて height の値を計算する関数
// const calculateHeightValue = () => {
//   const baseHeight = 0; // 基準の高さ（vw）
//   const maxHeight = 20; // 最大の高さ（vw）
//   const scrollThreshold = 70; // スクロールしきい値
//   const scrollFactor = 5; // スクロールによる増加係数

//   if (scrollY <= scrollThreshold) {
//     return "auto"; // スクロール位置がしきい値以下の場合は基準の高さ（auto）を使用
//   } else {
//     // スクロール位置がしきい値を超えた場合は徐々に高さを増加
//     const heightIncrease = (scrollY - scrollThreshold) / scrollFactor;
//     const newHeight = Math.min(baseHeight + heightIncrease, maxHeight);
//     return newHeight + "vw"; // 最大高さを超えないように制限
//   }
// };

//   const profileStyle = {
//     top: calculateTopValue(),
//     left: calculateLeftValue(),
//     width: "20vw",
//     // height: "20vw",
//     height: calculateHeightValue(), 
//     position: "absolute",
//     objectFit: "cover",
//     borderRadius: calculateBorderRadius(),

//   };



  return (
    // <section className="home">
    //   {/* <App /> */}

    //   <Header />
    //   <Hero />
    //   {/* 前のバージョン */}
    //   {/* <motion.img
    //     className="global-img-profile"
    //     src="profile-min.jpg"
    //     alt="image of me"
    //     style={profileStyle}
    //     animate={profileAnimation}
    //     transition={{ duration: 0.6, type: "ease-in-out" }}
    //   /> */}
    //    {/* てほん */}
    //    {/* {!imageLoaded.img1 && <Skeleton height={256} width={332} />}
    //       <img
    //         className={`img-high-scool1 ${!imageLoaded.img1 ? "skeleton" : ""}`}
    //         src="hero__images/High-school1.png"
    //         alt="image of class group photo of high school graduation ceremony"
    //         onLoad={() => handleImageLoaded("img1")}
    //       /> */}


    //    {/* スケルトンまたは画像の表示 */}
    //    {!profileImageLoaded && <Skeleton height={384} width={256} />}
    //     <motion.img
    //       className="global-img-profile"
    //       src="profile-min.jpg"
    //       alt="image of me"
    //       style={profileStyle}
    //       animate={profileAnimation}
    //       transition={{ duration: 0.6, type: "ease-in-out" }}
    //       onLoad={() => handleProfileImageLoaded(true)} 
    //     />
      
    //   <Bio isJapanese={isJapanese} />
    //   <Works isJapanese={isJapanese} />
    //   <Note isJapanese={isJapanese} />
    //   <Footer />
    //   {/* <Lottie1 /> */}
    // </section>
    <section className="home">
    <Header />
    <Hero />
    
        <motion.img
         className="global-img-profile"
         src="profile-min.jpg"
         alt="image of me"
         style={profileStyle}
         animate={profileAnimation}
         transition={{ duration: 0.6, type: "ease-in-out" }}
       /> 
    
    {/* 🌸🌸🌸 */}
    {/* <motion.img
      className="global-img-profile"
      src="profile-min.jpg"
      alt="image of me"
      style={profileStyle}
      transition={{ duration: 1, type: "ease-in-out" }}
    /> */}
    <Bio isJapanese={isJapanese} />
    <Works isJapanese={isJapanese} />
    <Note isJapanese={isJapanese} />
    <Footer />
  </section>
  );
}

export default Home;

// import React, { useEffect, useState } from "react";

// const generateRandomShadows = (count, color) => {
//   let boxShadow = "";
//   for (let i = 0; i < count; i++) {
//     const randomX = Math.floor(Math.random() * 2000);
//     const randomY = Math.floor(Math.random() * 2000);
//     boxShadow += `${randomX}px ${randomY}px ${color}`;
//     if (i < count - 1) boxShadow += ", ";
//   }
//   return boxShadow;
// };

// const StarLayer = ({ count, size, color, speed }) => {
//   const [yPos, setYPos] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setYPos(window.scrollY * speed);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [speed]);

//   const starStyle = {
//     boxShadow: generateRandomShadows(count, color),
//     height: size,
//     width: size,
//     transition: "all .9s linear",
//     transform: `translateY(-${yPos}px)`,
//   };

//   return <div style={starStyle} />;
// };

// const StarBackground = () => {
//   return (
//     <div>
//       <StarLayer
//         count={100}
//         size="0.5rem"
//         color="rgba(0, 0, 0, .5)"
//         speed={0.05}
//       />
//       <StarLayer
//         count={200}
//         size="0.3rem"
//         color="rgba(0, 0, 0, .5)"
//         speed={0.3}
//       />
//       <StarLayer
//         count={300}
//         size="0.1rem"
//         color="rgba(0, 0, 0, .5)"
//         speed={0.1}
//       />
//     </div>
//   );
// };

// export default StarBackground;

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";


const generateRandomShadows = (count, color) => {
  let boxShadow = "";
  for (let i = 0; i < count; i++) {
    const randomX = Math.floor(Math.random() * 2000);
    const randomY = Math.floor(Math.random() * 2000);
    // boxShadow += `${randomX}px ${randomY}px ${color}`;
    boxShadow += `${randomX}px ${randomY}px ${color}`;

    if (i < count - 1) boxShadow += ", ";
  }
  return boxShadow;
};

const StarLayer = ({ count, size, color, speed }) => {
  const [yPos, setYPos] = useState(0);
  const [shadows, setShadows] = useState("");

  const spring = useSpring(yPos, {
    stiffness: 100, // スターの動きの硬さ
    damping: 1, // スターの動きの減衰率
  });

  useEffect(() => {
    // Generate shadows only once when the component is mounted
    setShadows(generateRandomShadows(count, color));
  }, [count, color]);

  useEffect(() => {
    const handleScroll = () => {
      setYPos(window.scrollY * speed);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  const starStyle = {
    boxShadow: shadows,
    height: size,
    width: size,
    transition: "all .05s ease-in-out",
    transform: `translateY(-${yPos}px)`,
    borderRadius: "50%",
    y: spring,
  };

  return <div style={starStyle} />;
};

const StarBackground = () => {
  return (
    <div className="star-background"> 
      <StarLayer
        count={100}
        size="0.5rem"
        color="rgba(125, 182, 187, 0.5)"
        speed={.4}
        filter="blur(1px)"
      />
      <StarLayer
        count={25}
        size="0.3rem"
        color="#eef2dc"
        speed={.1}
      />
      <StarLayer
        count={100}
        size="0.2rem"
        color="rgba(0, 0, 0, .5)"
        speed={0.09}
      />
    </div>
  );
};

export default StarBackground;

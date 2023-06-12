import React from 'react';
import { motion } from "framer-motion"

export default function Framer() {

  return (

    <div>
    <motion.div
    className="box"
      initial={{ opacity: 0.4, scale: 0.5, backgroundColor: "salmon" }}
      animate={{ 
        rotate: -360,
         opacity: 1, 
         scale: 1, 
         x: "40vw",
         y: "40vh",
       backgroundColor: "greenyellow",
       scale: 1.5
         }}
      // dampingのdefaultは10
      transition={{ duration: 0.5, type: "spring",stiffness: 20, damping: 20}}

      whileHover={{
        scale: .8,
        transition: { duration: 1 },
      }}
      onHoverStart={(e) => {
        console.log('start');
      }}
      onHoverEnd={(e) => {
        console.log('end');
      }}
    >
     


    </motion.div>

    

    </div>
 
  )
}

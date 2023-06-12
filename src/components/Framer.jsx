import React from 'react';
import { motion } from "framer-motion"

export default function Framer() {

  return (

    <div>
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ rotate: 360, opacity: 1, scale: 1 }}
      transition={{ duration: 0.5}}

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
        <div className="box">box</div>


    </motion.div>

    

    </div>
 
  )
}

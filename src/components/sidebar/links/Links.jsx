import React from 'react'
import { motion } from 'framer-motion';

const Links = () => {

  const items = ["HomePage", "About", "Qualifications", "Projects", "Contact"];

  const variants = {
    open:{
      transition: {
        staggerChildren: 0.1,
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      }
    }
  }

  const itemVariants = {
    open:{
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    }
  }

  return (
    <motion.div className='links' variants={variants}>
      {
        items.map((item, i) => (
          <motion.a key={i} href={`#${item}`} variants={itemVariants} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
            {item}
          </motion.a>
        ))
      }
    </motion.div>
  )
}

export default Links

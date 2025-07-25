import { useRef } from 'react'
import './parallax.scss'
import { motion, useScroll, useTransform } from 'framer-motion'

const Parallax = () => {

  const ref = useRef();

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const yBg = useTransform(scrollYProgress, [0,1], ["0%", "50%"]);

  return (
    <div className='parallax' ref={ref}>
      <motion.h1 
        style={{y: yText}}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        Welcome to my <b>Portfolio</b>
      </motion.h1>
      <motion.div className='mountains'></motion.div>
      <motion.div 
        className='planets' 
        style={{y: yBg}}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", duration: 0.8, delay: 0.5 }}
      ></motion.div>
      <motion.div 
        className='stars'
        style={{x: yBg}}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      ></motion.div>
    </div>
  )
}
import './parallax.scss'

export default Parallax

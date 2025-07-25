import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'

const LiIcon = () => {

  const ref = useRef(null);

  const {scrollYProgress} = useScroll (
    {
      target: ref,
      offset: ["center end", "center start"]
    }
  );

  return (
    <figure ref={ref} className='absolute -left-13 md:left-0 stroke-dark'>
      <svg className='-rotate-90' width="75" height="75" viewBox='0 0 100 100'>
        <circle cx="75" cy="50" r="20" className='stroke-1 fill-none'/>
        <motion.circle cx="75" cy="50" r="20" fill="white"
          style={{
            pathLength: scrollYProgress,
            strokeWidth: 5,
            stroke: "black"
          }}
          transition={{ duration: 5, ease: "easeInOut" }}
        />
        <circle cx="75" cy="50" r="10" className='stroke-1 fill-black'/>
      </svg>
    </figure>
  )
}

export default LiIcon

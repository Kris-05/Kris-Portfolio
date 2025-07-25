import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details =  ({position, company, time, work}) => {  

  const ref = useRef(null);

  return (
    <li ref={ref} className='my-2 md:my-8 md:ml-32 first:mt-0 last:mb-0 w-full mx-auto flex flex-col items-start justify-between'>
      <LiIcon/>
      <motion.div 
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
      >
        <h3 className='text-left w-full capitalize font-bold md:text-2xl'>
          {position}&nbsp;
          <span className=' text-amber-400/75'>
            @{company}
          </span>
        </h3>
        <span className='capitalize font-medium text-emerald-500/75'>
          {time}
          {/* {time} | {address} */}
        </span>
        <p className='font-medium w-full max-w-[500px] break-words text-left'> 
          {work}
        </p>
      </motion.div>
    </li>
  )
}

const Card = ({ title, data, place }) => {

  const ref = useRef(null);
  const {scrollYProgress} = useScroll (
    {
      target: ref,
      offset: ["center end", "center start"]
    }
  )

  return (
    <div>
      <div className={`bg-gray-800 rounded-3xl overflow-hidden relative z-0 p-8 
        md:w-[75%] w-[90%] mx-auto
        after:-z-10 after:content-[''] after:absolute after:inset-0 after:pointer-events-none
        after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20`}
      >
        <div className='flex justify-center items-center'>
          <motion.span 
            className='text-center font-bold uppercase tracking-wider bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text'
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
          >
            {title}
          </motion.span>
        </div>
        
        <hr className='border-t-2 border-white/25 mt-4'/>
          
        <div ref={ref} className='w-[75%] mx-auto relative mt-4'>
          <motion.div
            style={{scaleY: scrollYProgress}}
            className='absolute -left-4 md:left-9 top-0 w-[4px] h-full bg-black origin-top' 
          />
          <ul className='w-full flex flex-col items-start justify-between ml-4'>
            {
              data.map((e,i)=>(
                <Details 
                  key={i}
                  position={e.a}
                  company={e.b}
                  time={e.c}
                  work={e.d}
                />
              ))
            }
          </ul>
        </div>  
      </div>
    </div>
  )
}

export default Card

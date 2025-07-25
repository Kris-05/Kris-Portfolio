import React from 'react'
import {techIcons} from './TechIcons.jsx'
import { motion } from 'framer-motion'
import Tape from '../Tape.jsx'

const MyTools = () => {
  return (
    <div className='container'>
      <div className='pt-10 flex justify-center'>
        <p className='mt-2 text-3xl md:text-5xl uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text'>
          My Toolbox
        </p>
      </div>
      <p className='text-center md:text-lg text-white/60 mt-4'>
        Behold, my mighty collection of tools - because apparently, brute force and print debugging aren’t '<b>best practices</b>' anymore
      </p>
      <div className="mt-12 px-8 py-4 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className='flex gap-8 flex-none mx-4 animate-move-left hover:[animation-play-state:paused]'>
        {[...new Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            {techIcons.map((categoryObj, index) => (
              <motion.div 
                key={index}
                className="p-4 mb-6 flex flex-col max-w-xs md:max-w-md border-3 border-gray-700 rounded-3xl bg-gray-800"
                whileHover={{scale: 1.05}}
              >
                <h2 className="text-center text-xl font-bold text-white pt-2">
                  {categoryObj.category}
                </h2>
                <hr className='border-t-2 border-white/5 mt-4'/>
                <div className="grid grid-cols-4 gap-4 p-2">
                  {categoryObj.items.map((tech, i) => (
                    <motion.div key={i} 
                      className="flex flex-col items-center gap-2 p-2 text-white"
                      style={{ filter: "drop-shadow(0px 0px 8px rgba(56, 189, 248, 0.8))" }}
                      whileHover={{scale: 1.1,}}
                    >
                      <span className="text-2xl">
                        {tech.icon}
                      </span>
                      <span className="text-sm font-medium text-nowrap">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div> 
              </motion.div>
            ))}
          </React.Fragment>
        ))}
      </div>
      </div>
    </div>
  )
}

export default MyTools

import React from 'react'
import { GiStarShuriken } from "react-icons/gi";
import { TbSwords } from "react-icons/tb";
import { GiSwordsEmblem } from "react-icons/gi";
import { motion } from 'framer-motion';

const Tape = () => {

  const words = [
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
    "Scalable",
    "User Friendly",
    "Maintainable",
    "Usable",
    "Reliable"
  ]

  return (
    <div className='md:mt-20 -mt-8 -ml-10 -mr-10 py-325 md:py-[60%] -z-2 absolute'>
      <div className='bg-gradient-to-r from-emerald-300 to-sky-300/75 overflow-x-clip -rotate-3'>
      <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
        <div className='flex flex-none pr-4 gap-4 py-3 animate-move-left'>
          {[...new Array(2)].fill(0).map((_, i) => (
            <div key={i}>
              {words.map((word,i) => (
                <div key={i} className='inline-flex gap-4 items-center'>
                  <span className='text-gray-900 uppercase font-extrabold text-sm'>{word}</span>
                  <TbSwords className='text-gray-900 -rotate-2'/>
                  &bull;
                  <GiSwordsEmblem className='text-gray-900 -rotate-2'/>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Tape

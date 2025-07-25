import React from 'react'
import "./navbar.scss"
import { motion } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TbBrandLinktree } from "react-icons/tb";

const Navbar = () => {

  const socialLinks = [
    {name: "GitHub", url:"https://github.com/Kris-05/", icon: <FaGithub size={20} /> },
    {name: "LinkedIn", url:"https://www.linkedin.com/in/krisna-vj/", icon: <FaLinkedin size={20} /> },
    {name: "Linktree", url:"https://linktr.ee/vjkrisna", icon: <TbBrandLinktree size={20} /> },
    {name: "Instagram", url:"https://www.instagram.com/_kris.na__", icon: <FaInstagram size={20} /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Each child appears 0.3s apart
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className='navbar'>
      <Sidebar/>
      <div className='wrapper'>
        <motion.span
          initial={{opacity:0, scale:0.5}}
          animate={{opacity:1, scale:1}}
          transition={{duration: 0.5}}
        >
          Krisna
        </motion.span>
        <motion.div className="social" variants={containerVariants} initial="hidden" animate="visible">
          {socialLinks.map((social, i) => (
            <motion.a 
              key={i} href={social.url} target="_blank" 
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}
            >
              {/* <img src={social.icon} alt={`${social.name}-logo`} /> */}
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Navbar

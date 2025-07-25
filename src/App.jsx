import React from 'react'
import "./app.scss"
import "./index.css"
import Navbar from './components/navbar/Navbar'
import Parallax from './components/parallax/Parallax'
import Hero from './components/hero/Hero'
import Contact from './components/contact/Contact'
import Cursor from './components/cursor/Cursor'
import Qualifications from './components/qualifications/Qualifications'
import MyTools from './components/MoreAbt/MyTools'
import About from './components/MoreAbt/About'
import Projects from './components/projects/Projects'

const App = () => {
  return (
    <>
      <Cursor/>
      <section className='h-[100vh]' id='HomePage'>
        <Navbar/>
        <Parallax/>
      </section>
      {/* <section className='h-[100vh]' id='About'>
      </section> */}
      <Hero/>

      {/* <Tape/> */}
      <MyTools/>
      <About />
      <Qualifications/>
      
      <Projects/>
      {/* <section className='h-[100vh]' id='Projects'>
        <Projects/>
      </section> */}
      <section className='md:h-[100vh]' id='Contact'>
        <Contact />
      </section>
    </>   
  )
}

export default App

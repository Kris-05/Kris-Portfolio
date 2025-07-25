import React from 'react'
import Card from './Card';

const Qualifications = () => {
  
  const educationData = [
    { 
      a: "College of Engineering - Guindy",
      b: "Chennai",
      c: "2022 - 2026",
      d: "BE - Computer Science & Engineering" 
    },
    { 
      a: "Sri Ramakrishna Vidyalaya Matric. Hr. Sec. School",
      b: "Tiruppur",
      c: "2020 - 2022",
      d: "Higher Secondary Education (HSLC)" 
    },
    { 
      a: "Government Higher Sec. School - Anupparpalayam",
      b: "Tiruppur",
      c: "2018 - 2020",
      d: "Secondary Education (SSLC)" 
    },
  ];

  const achievementsData = [
    { 
      a: "Hackathon Winner", 
      b: "Byte Bash - Kurukshetra'25 by BNY", 
      c: "Feb 2025", 
      d: "Built an AI-powered adaptive assessment system using Llama-3.2; personalized quizzes and dynamic difficulty." 
    },
    {
      a: "Round 3 Finalist", 
      b: "Flipkart GRiD 6.0 - Robotics Challenge", 
      c: "08/2024 - 12/2024", 
      d: "Developed an ML model to detect produce freshness, extract expiry dates, and identify branded products; reached Round 3 but not for National Finale" 
    },
    { 
      a: "Continuous Proficiency Award", 
      b: "Junior High School", 
      c: "2013 - 2017", 
      d: "Honored with the Five-Year Continuous Proficiency Award for outstanding academic performance" 
    },
    // { 
    //   a: "Published Research Paper", 
    //   b: "Deep Learning & AI", 
    //   c: "2024", 
    //   d: "Published a research paper on deep learning advancements and AI applications in a reputed journal." 
    // },
  ];

  const positionsData = [
    // { 
    //   a: "Placement ambassador", 
    //   b: "CEG", 
    //   c: "07/2025 - Present", 
    //   d: "Appointed as Placement Ambassador for CUIC to represent our dept"
    // },
    { 
      a: "Event Organizer", 
      b: "Arts Society", 
      c: "09/2024 - Present", 
      d: "Serving as Event Organizer for the Arts Society of CEG." 
    },
    {
      a: "Student Volunteer",
      b: "SAAS - CEG",
      c: "2024/08 - 2024/09",
      d: "Volunteered during the admission process for incoming first-year students.",
    },
    { 
      a: "Technical Operations Organizer", 
      b: "Ceg Tech Forum", 
      c: "09/2024 - 03/2025", 
      d: "Selected as TechOps Organizer for CEG Tech Forum." 
    },
    { 
      a: "HR Organizer", 
      b: "ACM - CEG", 
      c: "05/2024 - Present", 
      d: "Serving as HR Organizer for ACM Student chapter of CEG." 
    },
  ];

  return (
    <>
      <div className='relative overflow-hidden container mx-auto px-4 md:px-8' id='Qualifications'>
        <div className='pt-10 flex justify-center'>
          <p className='mt-2 md:mt-10 text-3xl md:text-5xl uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text'>
            My Journey
          </p>
        </div>
        <p className='text-center md:text-lg text-white/60 mt-4'>
          From classroom chalkboards through college whiteboards to real-world dashboards
        </p>

        <div className='relative flex flex-col mt-10 gap-16'>
          {/* <Card key={0} title="Experience" data={experienceData} place={"60px"}/> */}
          <Card key={1} title="Achievements" data={achievementsData} place={"0px"}/>
          <Card key={2} title="Education" data={educationData} place={"60px"}/>
          <Card key={3} title="Positions of Responsibility" data={positionsData} place={"120px"}/>
        </div>
        
      </div>
    </>
  )
}

export default Qualifications

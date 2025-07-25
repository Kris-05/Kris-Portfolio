import { useEffect, useState } from "react";
import { GiFastArrow } from "react-icons/gi";
import { RiUserLocationFill } from "react-icons/ri";
import { hobbiesIcon } from "./TechIcons.jsx";
import { motion } from "framer-motion";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's 'md' breakpoint
    };

    handleResize(); // set on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const variants = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      // className="pb-32"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <div className="md:flex md:w-[85%] md:mx-auto md:gap-8">
        {/* Left (Hobbies) Section - 35% width */}
        <div className="md:flex-2/3 w-[90%] mx-auto p-4 mb-6 flex flex-col max-w-xs md:max-w-2xl border-3 border-gray-700 rounded-3xl bg-gray-800">
          <div className="flex flex-col gap-2 items-center">
            <div className="inline-flex items-center gap-4">
              <GiFastArrow size={24} className="text-emerald-300" />
              <h3 className="text-3xl">
                <b>My Hobbies</b>
              </h3>
            </div>
            <p className="text-sm text-white/60">
              Explore my interests and hobbies
            </p>
          </div>

          <hr className="border-t-2 border-white/25 m-4" />

          <div className="h-[320px] mt-4 relative flex flex-col">
            {hobbiesIcon.map((hobby, i) => (
              <motion.div
                key={i}
                className={`absolute top-[${hobby.top}] left-[${hobby.left}] flex outline-1 justify-center gap-1 items-center p-4 bg-gray-800 rounded-full w-fit`}
                style={{
                  top: isMobile ? hobby.mobile.top : hobby.desktop.top,
                  left: isMobile ? hobby.mobile.left : hobby.desktop.left,
                }}
                whileHover={{
                  scale: 1.1,
                  rotateX: 10,
                  rotateY: 10,
                  boxShadow: "0px 10px 30px rgba(56, 189, 248, 0.5)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <span
                  style={{
                    filter: "drop-shadow(0px 0px 8px rgba(56, 189, 248, 0.8))",
                  }}
                  className="md:text-lg"
                >
                  {hobby.name}
                </span>
                <span>{hobby.emoji}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right (Map) Section - 65% width */}
        <div className="md:flex-1/3 w-[90%] mx-auto p-4 mb-6 flex flex-col gap-3 max-w-xs md:max-w-md border-3 border-gray-700 rounded-3xl bg-gray-800 overflow-hidden">
          <div className="flex justify-center items-center gap-4">
            <RiUserLocationFill size={24} className="text-emerald-300" />
            <h3 className="text-3xl">
              <b>My Location</b>
            </h3>
          </div>
          <iframe
            className="w-full border-0 rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7404.137584320048!2d80.23934496142147!3d13.01175991884871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679fd80e657f%3A0x9727dde0ba49c84e!2sAnna%20University!5e0!3m2!1sen!2sin!4v1745091746075!5m2!1sen!2sin"
            width="600"
            height="400"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

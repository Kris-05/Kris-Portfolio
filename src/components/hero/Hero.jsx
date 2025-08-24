import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./hero.scss";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TbBrandLinktree } from "react-icons/tb";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const socialLinks = [
  {name: "GitHub", url:"https://github.com/Kris-05/", icon: <FaGithub size={20} /> },
  {name: "LinkedIn", url:"https://www.linkedin.com/in/krisna-vj/", icon: <FaLinkedin size={20} /> },
  {name: "Linktree", url:"https://linktr.ee/vjkrisna", icon: <TbBrandLinktree size={20} /> },
  {name: "Instagram", url:"https://www.instagram.com/_kris.na__", icon: <FaInstagram size={20} /> },
];

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const [showMore, setShowMore] = useState(false);

  const toggleCollapse = () => setShowMore(!showMore);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="wrap mt-10 md:h-[100vh]"
      ref={ref}
      id="About"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Quote */}
      <motion.div className="textContainer" variants={textVariants}>
        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textVariants}
        >
          I hear and I forget... I see and I remember...
          <br /> I do and I understand...
        </motion.p>
        <motion.hr variants={textVariants} />
      </motion.div>

      <motion.div className="heroContainer" variants={containerVariants}>
        {/* Left Section (Profile) */}
        <motion.div
          className="shadow-lg shadow-slate-900 border-3 border-gray-700 rounded-xl bg-gray-800 flex md:flex-1/3 flex-col items-center justify-center p-6"
          variants={leftVariants}
        >
          {/* Profile Info */}
          <div className="relative w-full flex md:flex-col items-center gap-4 md:gap-0">
            <motion.div className="md:-mt-10" variants={textVariants}>
              <img
                src="/Kris-img.jpg"
                alt="Krisna VJ"
                className="h-32 w-32 md:h-48 md:w-48 rounded-full object-cover border-4 border-white/30"
              />
            </motion.div>
            <motion.div
              className="md:text-left space-y-2 bg-transparent z-10"
              variants={textVariants}
            >
              <p className="text-center mt-5 text-3xl md:text-5xl font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                Krisna VJ
              </p>
              <p className="text-center text-white/60">Full Stack Developer</p>

              {/* Mobile Toggle Button */}
              <motion.button
                onClick={toggleCollapse}
                className="absolute -top-2 -right-1 text-white/60 md:hidden"
                variants={textVariants}
              >
                {showMore ? (
                  <IoIosArrowUp size={24} />
                ) : (
                  <IoIosArrowDown size={24} />
                )}
              </motion.button>
            </motion.div>
          </div>

          {/* Expandable Contact/Socials */}
          <motion.div
            className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
              showMore ? "max-h-96 mt-4" : "max-h-0"
            } md:max-h-full`}
            variants={textVariants}
          >
            <motion.hr
              className="border-t-2 border-white/25 my-4 md:my-6 mx-10"
              variants={textVariants}
            />
            <motion.div
              className="flex flex-col gap-2 md:gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {[
                "📍 Chennai, India",
                "✉️ vjkrisna995@gmail.com",
                "📞 +91 9566798102",
              ].map((text, index) => (
                <motion.p
                  key={index}
                  className="text-center text-white/60"
                  variants={textVariants}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
            <motion.hr
              className="border-t-2 border-white/25 my-4 md:my-6 mx-10"
              variants={textVariants}
            />
            <motion.div
              className="md:mt-6 flex items-center justify-center gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  className="hover:scale-110 transition-transform duration-200"
                  variants={textVariants}
                  whileHover={{ scale: 1.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Section (About) */}
        <motion.div className="shadow-lg shadow-slate-900 border-3 border-slate-700 rounded-xl bg-slate-800  md:flex-2/3" variants={rightVariants}>
          <motion.div
            className="flex items-center justify-center"
            variants={textVariants}
          >
            <img
              src="/coding.png"
              className="h-80 w-80"
              alt="Coding Illustration"
            />
          </motion.div>
          <motion.div
            className="px-5"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {[
              "<b>Hi, I'm VJ Krisna</b>, a Computer Science graduate from the College of Engineering, Guindy in Chennai. My coding journey started in my second year of college — I love turning ideas into real, working projects.",
              "I work mainly with the MERN stack — from building clean, responsive UIs to crafting solid server-side logic. I love trying out new technologies, tackling challenges & solving problems and sharpening my skills to grow into the best developer I can be.",
              "People who know me say I'm obsessed, that's fair! I thrive on challenges, whether it's debugging weird bugs for fun or diving into the latest tech trends. When I'm not coding, I'll be exploring ancient architectures, wandering through documentaries about forgotten civilizations, tinkering with side projects, or just listening to music.",
            ].map((text, index) => (
              <motion.p
                key={index}
                className="mb-4"
                variants={textVariants}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}
          </motion.div>
          <motion.div
            className="flex justify-center md:justify-end m-2 "
            variants={textVariants}
          >
            <motion.a
              href="/Krisna-SWE-Resume.pdf"
              // href="/krisna-resume-2025.pdf"
              // download="VJ_Krisna_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 !text-black rounded-lg font-medium transition-colors bg-gradient-to-r from-emerald-300 to-sky-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;

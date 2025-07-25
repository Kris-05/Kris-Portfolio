import {
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaGitlab, FaNpm, FaBootstrap
} from "react-icons/fa";

import { 
  SiC, SiDart, SiFlutter, SiMui, SiSpring, SiFirebase, SiMongodb, SiTailwindcss, SiSass, SiExpress, SiPostgresql, SiMysql, SiTensorflow , SiPrisma, SiPostman, SiIntellijidea
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { BsTerminal } from "react-icons/bs";

const techIcons = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "C-language", icon: <SiC  /> },
      { name: "Dart", icon: <SiDart /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "TensorFlow", icon: <SiTensorflow  /> },
      { name: "ReactJS", icon: <FaReact /> },
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Material UI", icon: <SiMui /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "SASS", icon: <SiSass /> },
      { name: "Express.js", icon: <SiExpress /> },
    ],
  },
  {
    category: "Databases & Server",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDb", icon: <SiMongodb /> },
      // { name: "Firebase", icon: <SiFirebase  /> }
      // { name: "Spring", icon: <SiSpring /> }
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "VS Code", icon: <VscVscode /> },
      { name: "Intellij Idea", icon: <SiIntellijidea /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "NPM", icon: <FaNpm /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "Terminal", icon: <BsTerminal /> },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "GitHub", icon: <FaGithub /> },
      { name: "GitLab", icon: <FaGitlab /> },
    ],
  },
];

const hobbiesIcon = [
  {
    name: "Drawing",
    emoji: "🎨",
    mobile: {left: "-10%", top: "5%"},
    desktop: {left: "5%", top: "5%"},
  },
  {
    name: "DIY Ideas",
    emoji: "💡",
    mobile: {left: "43%", top: "-5%"},
    desktop: {left: "43%", top: "0%"}
  },
  {
    name: "Gaming",
    emoji: "🎮",
    mobile: {left: "10%", top: "83%"},
    desktop: {left: "30%", top: "75%"}
  },
  {
    name: "Architechure",
    emoji: "🏛️",
    mobile: {left: "59%", top: "16%"},
    desktop: {left: "30%", top: "34%"}
  },
  {
    name: "Music",
    emoji: "🎵",
    mobile: {left: "0%", top: "55%"},
    desktop: {left: "5%", top: "61%"}
  },
  {
    name: "Photography",
    emoji: "📸",
    mobile: {left: "5%", top: "30%"},
    desktop: {left: "75%", top: "16%"}
  },
  {
    name: "Reading",
    emoji: "📖",
    mobile: {left: "57%", top: "74%"},
    desktop: {left: "57%", top: "80%"}
  },
  {
    name: "Travel",
    emoji: "✈️",
    mobile: {left: "70%", top: "47%"},
    desktop: {left: "70%", top: "47%"}
  },
];

export { techIcons, hobbiesIcon };

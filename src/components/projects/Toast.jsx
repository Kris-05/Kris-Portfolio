// components/Toast.js
import { motion } from "framer-motion";

const Toast = ({ message, type }) => {
  const bgColor = {
    info: "bg-blue-600",
    warning: "bg-yellow-600",
    error: "bg-red-600"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`z-10 fixed top-4 right-4 ${bgColor[type]} text-white px-4 py-2 rounded-md shadow-lg z-50`}
    >
      {message}
    </motion.div>
  );
};

export default Toast;
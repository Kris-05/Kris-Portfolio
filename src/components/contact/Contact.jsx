import { useRef, useState } from "react";
import "./contact.scss";
import { BiMailSend } from "react-icons/bi";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [showContactHint, setShowContactHint] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_vg364su", "template_rsc49ci", formRef.current, {
        publicKey: "kc9lUIxWGJtkb8Njl",
      })
      .then(
        () => {
          setSuccess(true);
          console.log("SUCCESS!");
        },
        (error) => {
          setError(true);
          console.log("FAILED...", error.text);
        }
      );
  };

  const contactDetails = [
    { type: "Mail", value: "vjkrisna995@gmail.com" },
    { type: "Phone", value: "+91 9566798102" },
  ];

  const variants = {
    initial: {
      rotate: -10,
      x: -100,
      opacity: 0,
    },
    animate: {
      rotate: 0,
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
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>
          Let's get in{" "}
          <motion.b whileHover={{ color: "orange" }}>touch</motion.b>
        </motion.h1>
        <motion.p variants={variants}>
          I'm open to exciting{" "}
          <motion.b whileHover={{ color: "orange" }}>
            internship opportunities
          </motion.b>
          .<br />
          Feel free to reach out if you have any questions or requests!
        </motion.p>
        {contactDetails.map((contact, i) => (
          <motion.div variants={variants} className="item" key={i}>
            <motion.h2 whileHover={{ color: "orange" }}>
              {contact.type}
            </motion.h2>
            <span>{contact.value}</span>
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="formContainer" variants={variants}>
        <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
          <div className="input-group">
            <motion.input
              whileFocus={{ borderColor: "orange" }}
              type="text"
              required
              placeholder="Name"
              name="name"
            />
            <motion.input
              whileFocus={{ borderColor: "orange" }}
              type="email"
              required
              placeholder="Email"
              name="email"
            />
          </div>
          <motion.div className="relative">
            <motion.textarea
              rows={15}
              whileFocus={{ borderColor: "orange" }}
              placeholder="Message"
              name="message"
              onMouseEnter={() => setShowContactHint(true)}
              onMouseLeave={() => setShowContactHint(false)}
              onTouchStart={() => setShowContactHint(true)}
              onFocus={() => setShowContactHint(true)}
              onBlur={() => setShowContactHint(false)}
              className="w-full"
            />
            {showContactHint && (
              <motion.span
                className="absolute bottom-full right-0 text-xs text-orange-400 bg-gray-800 px-2 py-1 rounded"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                Pls include contact info (email may fail)
              </motion.span>
            )}
          </motion.div>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
            <BiMailSend size={30} />
            Send Message
          </motion.button>
          {error && "Error"}
          {success && "Success"}
        </form>
      </motion.div>
      <p className="copyright">~ Krisna VJ ~</p>
    </motion.div>
  );
};

export default Contact;

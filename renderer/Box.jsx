import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import EarthCanvas from "./canvas/Headphone";
import "./style.css";

const Box = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <motion.div
      className="flex h-72 w-72 hover:cursor-pointer"
      initial="hidden"
      animate={animate ? "visible" : "hidden"}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      transition={{ duration: 1, type: "spring", stiffness: 200 }}
      whileHover={{ y: -20 }}
      whileTap={{ scale: 0.9 }}
    >
      <button
        className="flex h-72 w-72 hover:cursor-pointer"
        onClick={() => {
          window.open(
            "https://www.youtube.com/playlist?list=PLO-gZpGfO8p1PId3n7SznGz6-tZdoysRb"
          );
        }}
      >
        <EarthCanvas />
      </button>
    </motion.div>
  );
};

export default Box;

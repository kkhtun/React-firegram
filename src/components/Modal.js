import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleModalClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop"
      onClick={handleModalClick}
    >
      {/* y is the offset of framer-motion not css */}
      <motion.img
        initial={{ y: "-100vh" }}
        animate={{ y: "0vh" }}
        src={selectedImg}
        alt="model enlarged pic"
      />
    </motion.div>
  );
};

export default Modal;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import image1 from "../assets/resume/1.jpg";
import image2 from "../assets/resume/2.jpg";
import image3 from "../assets/resume/3.jpg";
import resumePDF from "../assets/resume/resume.pdf";

const Resume = ({ closeResume }) => {
  const [currentImage, setCurrentImage] = useState(1);
  const totalImages = 3;

  const handlePrevImage = () => {
    if (currentImage > 1) {
      setCurrentImage(currentImage - 1);
    }
  };

  const handleNextImage = () => {
    if (currentImage < totalImages) {
      setCurrentImage(currentImage + 1);
    }
  };

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      closeResume();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50"
        onClick={handleClickOutside}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: window.matchMedia("(min-width: 1080px)").matches ? 0.525 : 1,
          }}
          transition={{ duration: 0.5 }}
          className="w-85 h-85 bg-white bg-opacity-90 rounded-2xl p-6 relative"
          onClick={(event) => event.stopPropagation()}
        >
          {!window.matchMedia("(min-width: 1080px)").matches && (
            <div className="absolute top-2 right-2">
              <button
                className="text-gray-600 hover:text-gray-900"
                onClick={closeResume}
              >
                Close
              </button>
            </div>
          )}
          <div className="flex flex-col justify-center items-center mb-4">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
              {currentImage === 1 && (
                <motion.img
                  src={image1}
                  alt="Image 1"
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
              {currentImage === 2 && (
                <motion.img
                  src={image2}
                  alt="Image 2"
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
              {currentImage === 3 && (
                <motion.img
                  src={image3}
                  alt="Image 3"
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </div>
            <div className="flex justify-center mt-4">
              <div className="flex items-center">
                <a
                  href={resumePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white rounded-full p-2 px-4 hover:bg-green-600 transition-colors duration-200"
                >
                  Download
                </a>
                <motion.button
                  className="bg-green-500 text-white rounded-full p-2 mx-2"
                  onClick={handlePrevImage}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiChevronLeft size={35} />
                </motion.button>
                <motion.button
                  className="bg-green-500 text-white rounded-full p-2 mx-2"
                  onClick={handleNextImage}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiChevronRight size={35} />
                </motion.button>
                <a
                  href="http://website/#contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white rounded-full p-2 px-4 ml-4 hover:bg-green-600 transition-colors duration-200"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Resume;
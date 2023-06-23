import React, { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import resumePDF from "../assets/resume.pdf";

const Resume = ({ closeResume }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; 
  const pdfViewerRef = useRef(null);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClickOutside = (event) => {
    if (pdfViewerRef.current && !pdfViewerRef.current.contains(event.target)) {
      closeResume();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 0.7 }}
        transition={{ duration: 0.3 }}
        className="w-80 bg-white rounded-2xl p-6 relative"
        ref={pdfViewerRef}
      >
        <div className="flex flex-col justify-center items-center mb-4">
          <div className="w-full rounded-xl overflow-hidden shadow-lg">
            <Document
              file={resumePDF}
              onLoadError={(error) => console.log("PDF load error", error)}
              renderMode="canvas"
            >
              <Page pageNumber={currentPage} width={300} />
            </Document>
          </div>
          <div className="flex justify-center mt-4">
            <motion.button
              className="bg-gray-200 text-gray-700 rounded-full p-2 mx-2"
              onClick={handlePrevPage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MdKeyboardArrowLeft size={20} />
            </motion.button>
            <motion.button
              className="bg-gray-200 text-gray-700 rounded-full p-2 mx-2"
              onClick={handleNextPage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MdKeyboardArrowRight size={20} />
            </motion.button>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mr-2">
            Hire Me
          </button>
          <button className="bg-green-500 text-white rounded-lg px-4 py-2">
            Download
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume

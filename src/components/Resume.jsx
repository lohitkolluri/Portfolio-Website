import { motion } from "framer-motion";
import resumePDF from "../assets/resume.pdf";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Resume = ({ closeResume }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Update with the total number of pages in your resume PDF

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

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-3xl bg-white rounded-lg p-6 relative"
        style={{ width: "100%", height: "100%" }} 
      >
        <div className="absolute top-2 right-2">
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={closeResume}
          >
            Close
          </button>
        </div>
        <iframe
          src={`${resumePDF}#page=${currentPage}`}
          title="Resume"
          className="w-full h-5/6 bg-white"
        />
        <div className="flex justify-center mt-4">
          <button
            className="bg-gray-200 text-gray-700 rounded-full p-2 mr-2"
            onClick={handlePrevPage}
          >
            <MdKeyboardArrowLeft size={20} />
          </button>
          <button
            className="bg-gray-200 text-gray-700 rounded-full p-2"
            onClick={handleNextPage}
          >
            <MdKeyboardArrowRight size={20} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;



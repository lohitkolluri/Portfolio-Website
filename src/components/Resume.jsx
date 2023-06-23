import { motion } from "framer-motion";
import resumePDF from "../assets/resume.pdf";

const Resume = ({ closeResume }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl bg-white rounded-lg p-6"
      >
        <div className="flex justify-end">
          <button className="text-gray-600 hover:text-gray-900" onClick={closeResume}>
            Close
          </button>
        </div>
        <iframe src={resumePDF} title="Resume" className="w-full h-screen" />
      </motion.div>
    </div>
  );
};

export default Resume;

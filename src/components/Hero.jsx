import { motion } from "framer-motion";
import { styles } from "../styles";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">lohit</span>
            <p>
              I do &nbsp;
              <TypeAnimation
                sequence={["CyberSecurity", 1000, "NLP", 1000, "Ai & ML", 1000]}
                speed={50}
                style={{ height: "10px" }}
                repeat={Infinity}
              />
            </p>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;

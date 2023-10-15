import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const renderTechnologies = () => {
  return technologies.map(({ name, icon }) => (
    <div className="w-28 h-28" key={name}>
      <BallCanvas icon={icon} />
    </div>
  ));
};

const Tech = () => (
  <div className="flex flex-row flex-wrap justify-center gap-10">
    {renderTechnologies()}
  </div>
);

export default SectionWrapper(Tech, "");

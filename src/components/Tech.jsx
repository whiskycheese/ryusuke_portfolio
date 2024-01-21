import React from "react";

import { CoconutCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-x-10 gap-y-5'>
      {technologies.map((technology) => (
        <div className='w-28 h-29' key={technology.name}>
          <CoconutCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

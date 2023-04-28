import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoice,
  faLightbulb,
  faChartLine,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";

const JobCategory = () => {
  return (
    <div className="w-4/5 mx-auto mt-20">
      {/* job category heading and description */}
      <div className="text-center mtt-10">
        <h4 className="text-4xl font-bold">Job Category List</h4>
        <p className="mt-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      {/* available jobs */}
      <div></div>
    </div>
  );
};

export default JobCategory;

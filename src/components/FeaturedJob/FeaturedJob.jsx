import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";

const FeaturedJob = ({ job }) => {
  return (
    <div className="border-[#E8E8E8] border-[1px] p-5 rounded-md">
      <div className="w-[120px] h-[100px]">
        <img className="rounded" src={job.img} alt="" />
      </div>
      <h3 className="text-2xl font-semibold">{job.title}</h3>
      <p className="mt-2">{job.company}</p>
      <button className="border-2 border-[#7E90FE] py-1 px-3 rounded mt-2 text-[#7E90FE]">
        {job.jobtype1}
      </button>
      <button className="border-2 border-[#7E90FE] py-1 px-3 rounded mt-2 text-[#7E90FE] ml-3">
        {job.jobtype2}
      </button>

      {/* location and salary */}
      <p className="mt-3">
        <FontAwesomeIcon icon={faLocationDot} />
        <span className="ml-1 mr-5">{job.location}</span>

        <FontAwesomeIcon icon={faDollarSign} />
        <span className="ml-1">{job.salary}</span>
      </p>

      <button className="py-2 px-4 bg-[#7E90FE] text-white font-semibold rounded-md mt-4 md:mt-3">
        View Details
      </button>
    </div>
  );
};

export default FeaturedJob;

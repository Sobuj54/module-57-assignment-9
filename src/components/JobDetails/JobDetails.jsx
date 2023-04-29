import React, { useContext } from "react";
import { JobsContext } from "../Layout/Layout";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const details = useLoaderData();
  //   console.log(details);
  // using params to receive data
  let params = useParams();

  const jobDetail = details.find((job) => job.id == params.detailsId);

  return (
    // job details container
    <div className="w-4/5 mx-auto mt-32 mb-11">
      <h1 className="text-3xl font-bold text-center mb-24">Job Details</h1>

      {/* job description section */}
      <div className="md:flex justify-between gap-7">
        {/* job details in detailed form */}
        <div className="flex flex-col gap-6">
          <h1>
            <span className="text-lg font-medium mr-2">Job Description:</span>{" "}
            {jobDetail.description}
          </h1>
          <h2>
            <span className="text-lg font-medium mr-2">
              Job Responsibility:
            </span>{" "}
            {jobDetail.responsibility}
          </h2>
          <h3>
            <span className="text-lg font-medium mr-2">
              Educational Requirements:
            </span>
            {jobDetail.requirements}
          </h3>
          <h1>
            <span className="text-lg font-medium mr-2">Experience:</span>
            {jobDetail.experience}
          </h1>
        </div>
        {/* job details in side bar */}
        <div className="w-full bg-blue-100 rounded-md p-4">
          <h5 className="text-lg font-semibold mb-5">Job Details</h5>
          <hr />
          <p>
            <span className="text-md font-medium">Salary : </span>
            {jobDetail.salary}
          </p>
          <p className="mt-1">
            <span className="text-md font-medium">Job Title :</span>
            {jobDetail.title}
          </p>

          <h4 className="text-lg font-semibold mt-8">Contact Information</h4>
          <p className="mt-5">
            <span className="text-md font-medium mt-2">Phone: </span>
            {jobDetail.phone}
          </p>
          <p>
            <span className="text-md font-medium mt-3">Email :</span>
            {jobDetail.email}
          </p>
          <p>
            <span className="text-md font-medium mt-3">Address :</span>
            {jobDetail.address}
          </p>

          <div className="mt-7">
            <button className="py-2 px-4 bg-[#7E90FE] text-white font-semibold rounded-md w-full ">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

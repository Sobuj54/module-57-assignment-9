import React, { useContext } from "react";
import { JobsContext } from "../Layout/Layout";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
  // step 3 receive data by using useContext
  const jobs = useContext(JobsContext);

  return (
    <div className="w-4/5 mx-auto mt-20 md:mt-40">
      <h2 className="text-4xl font-bold text-center">Featured Jobs</h2>
      <p className="text-center mt-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      {/* featured job info */}
      <div className="md:grid grid-cols-2 gap-16 mt-12 w-11/12 mx-auto">
        {jobs.map((job) => (
          <FeaturedJob key={job.id} job={job}></FeaturedJob>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;

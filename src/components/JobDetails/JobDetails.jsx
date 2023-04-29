import React, { useContext } from "react";
import { JobsContext } from "../Layout/Layout";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const details = useLoaderData();
  console.log(details);

  let params = useParams();

  console.log(params.detailsId);

  return (
    <div>
      <h2 className="text-3xl">details</h2>
    </div>
  );
};

export default JobDetails;

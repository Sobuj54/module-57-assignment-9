import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../FakeDB/FakeDb";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  // received data via loader
  const featuredJobs = useLoaderData();
  // retrieve data from local storage
  const savedJobs = getShoppingCart();

  // creating a list of applied jobs
  let matchedJobs = [];
  for (const id in savedJobs) {
    let foundJobs = featuredJobs.find((job) => job.id == id);
    matchedJobs.push(foundJobs);
  }
  console.log(matchedJobs);

  return (
    <div className="w-4/5 mx-auto md:mt-28">
      <h2 className="text-4xl text-center font-bold">Applied Jobs</h2>
      {/* applied jobs details */}
      <div></div>
    </div>
  );
};

export default AppliedJobs;

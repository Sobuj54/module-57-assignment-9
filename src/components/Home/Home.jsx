import React from "react";
import Header from "../Header/Header";
import User from "../User/User";
import JobCategory from "../JobCategory/JobCategory";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const jobs = useLoaderData();
  return (
    <div>
      <User></User>
      <JobCategory jobs={jobs}></JobCategory>
    </div>
  );
};

export default Home;

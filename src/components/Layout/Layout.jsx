import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
// step1 create and export the context
export const JobsContext = createContext();

const Layout = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("featuredjobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      {/* step 2 set context provider */}
      <JobsContext.Provider value={jobs}>
        <Header></Header>
        <Outlet></Outlet>
      </JobsContext.Provider>
    </div>
  );
};

export default Layout;

import React, { useState } from "react";
import GetDueAssigments from "../components/GetDueAssignments";
import SubmitAssigments from "../components/SubmitAssignments";

const HomePage = () => {
  const [reloader, setReloader] = useState(true)

  const reloadDueAssignments = ()=>{
    setReloader(prev=>!prev)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Work Allocation Tool</h1>
        <div className="flex justify-between items-center">
          <div className="w-1/2 px-2">
            <GetDueAssigments reloader={reloader} />
          </div>
          <div className="w-1/2 px-2">
            <SubmitAssigments reloadDueAssignments={reloadDueAssignments} /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
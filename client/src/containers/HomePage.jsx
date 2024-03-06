import React from "react";
import GetDueAssigments from "../components/GetDueAssignments";
import SubmitAssigments from "../components/SubmitAssignments"

const HomePage = () => {
  return (
    <div>
      <h1>Work Allocation Tool</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <GetDueAssigments />
        <SubmitAssigments /> 
      </div>
    </div>
  );
  };

export default HomePage;
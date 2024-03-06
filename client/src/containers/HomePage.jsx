import React from "react";
import GetDueAssigments from "../components/GetDueAssignments";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <GetDueAssigments />
      <p>This is the homepage.</p>
    </div>
  );
};

export default HomePage;
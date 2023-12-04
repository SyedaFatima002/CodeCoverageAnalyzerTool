import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/upload-file">Upload File</Link> <br />
      <Link to="/generate-tests">Generate Tests</Link>
      <br />
      <Link to="/view-report">View Report</Link>
      <br />
    </div>
  );
};

export default Home;

import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import FileUpload from "./UploadFile";
import "../App.css";
import heroImage from '../Images/bg.png';
import GenerateTestCases from "./GenerateTestCasesCard"
const Home = () => {
  return (
    <div>
      
      <div className="hero-section">
        <img src={heroImage}  alt="Hero" className="img-fluid" />
        <div className="hero-content">
          <h1>Code Coverage Analyzer and Test Generator Tool</h1>
          <p>Upload the file and view the coverage report</p>
        </div>
      </div>

      <div className="components-wrapper">
        <FileUpload />
        <GenerateTestCases />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import axios from "axios";
import "../App.css";
import { useNavigate } from 'react-router-dom';

function GenerateTestCasesCard() {
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      const res = await axios.get("http://localhost:7000/run-test");
      navigate("/view-report");
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div >
      <button onClick={handleClick} className="btn-primary2">Generate Test Cases</button>
    </div>
  );
}

export default GenerateTestCasesCard;

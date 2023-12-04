import React from "react";
import axios from "axios";

function GenerateTestCasesCard() {
  const handleClick = async () => {
    try {
      const res = await axios.get("http://localhost:7000/run-test");
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        width: "200px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        margin: "auto",
        marginTop: "50px",
      }}
    >
      <h2>Generate Test Cases</h2>
      <p>Click the button below to generate the test cases.</p>
      <button onClick={handleClick}>Generate</button>
    </div>
  );
}

export default GenerateTestCasesCard;

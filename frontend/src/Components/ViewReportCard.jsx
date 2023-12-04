import React from "react";

const ViewReportCard = () => {
  const handleClick = () => {
    window.location.href = "http://localhost:7000/report";
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
      <h1>View Report</h1>
      <button onClick={handleClick}>View Report</button>
    </div>
  );
};

export default ViewReportCard;

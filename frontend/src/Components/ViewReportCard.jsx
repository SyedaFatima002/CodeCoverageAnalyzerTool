import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

const ViewReportCard = () => {
  const [exporting, setExporting] = useState(false);

  const handleClick = () => {
    window.location.href = "http://localhost:7000/report";
  };

  const handleExportPdf = async () => {
    try {
      setExporting(true);

      const response = await fetch('http://localhost:7000/exportpdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      const data = await response.json();
      if (data.success) {
        console.log('PDF exported successfully.');
        // Optionally handle success on the frontend
      } else {
        console.error('Error exporting PDF:', data.message);
        // Optionally handle error on the frontend
      }
    } catch (error) {
      console.error('Error exporting PDF:', error);
      // Optionally handle error on the frontend
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="card p-4 custom-card">
        <h1 className="mb-4 text-center">Coverage Report Generated!</h1>
        <p className="lead">
          The coverage report has been generated successfully. Click the button below to view the report.
        </p>
        <button onClick={handleClick} className="btn btn-primary2 mr-2">
          View Report
        </button>
        <button onClick={handleExportPdf} className="btn btn-primary2 mr-2">
         Export PDF
        </button>
      </div>
    </div>
  );
};

export default ViewReportCard;

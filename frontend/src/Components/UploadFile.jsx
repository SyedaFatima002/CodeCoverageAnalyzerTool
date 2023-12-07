import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
import "../App.css"
import axios from "axios";

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:7000/upload/file", formData);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
   
    
    <div className='custom-card'>
      <h3>Upload File</h3>
      <form onSubmit={handleSubmit} className="d-flex align-items-center">
        <input
          type="file"
          className="form-control"
          name="file"
          onChange={handleFileChange}
        />
        <button type="submit" className='btn-primary'>Upload</button>
      </form>
    </div>
    
 
  );
}

export default FileUpload;
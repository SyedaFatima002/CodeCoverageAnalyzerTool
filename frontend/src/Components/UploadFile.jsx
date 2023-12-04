import React, { useState } from "react";
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
      <h1>Upload File</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default FileUpload;

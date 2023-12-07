import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import UploadFile from "./Components/UploadFile";
import GenerateTestCasesCard from "./Components/GenerateTestCasesCard";
import ViewReportCard from "./Components/ViewReportCard";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload-file" element={<UploadFile />} />
        <Route path="/generate-tests" element={<GenerateTestCasesCard />} />
        <Route path="/view-report" element={<ViewReportCard />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;

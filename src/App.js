import { Routes, Route } from "react-router-dom";
import Company from "./component/Company";
import Employee from "./component/Employee";
import EmployeeDetails from "./component/EmployeeDetails";
import Home from "./component/Home";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/company" element={<Company/>}/>
        <Route path="/employee" element={<Employee/>}/>
        <Route path="/employee/:id" element={<EmployeeDetails/>}/>
      </Routes>
    </>
      
    
  );
}

export default App;

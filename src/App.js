import "./App.css";
import HomePage from "./component/HomePage";
import { Route, Routes } from "react-router-dom";
import SignupPage from "./component/SignupPage";
import axios from "axios";
import LoginPage from "./component/LoginPage";

axios.defaults.baseURL='http://localhost:4000'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/signin" element={<LoginPage/>}/>
      </Routes>
      
    </>
  );
}

export default App;

import { userState, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import Login from "./pages/auth/login/login";
import Register from "./pages/auth/register/register";
import Verify from "./pages/auth/verify/verify";
import ShowImage from "./pages/showImage/ShowImage";
import Upload from "./pages/upload/Upload";
import Profile from "./pages/profile/Profile";
import ShowImageForCategory from "./pages/showImageForCategory/showImageForCategory";
import AboutPage from "./pages/about/about";
import ShowCategory from "./pages/showCategory/showCategory";
import LeaderBoard from "./pages/leaderBoard/leaderBoard";
import ResultSearch from "./pages/resultSearch/resultSearch";
import "bootstrap/dist/css/bootstrap.min.css";
import{toast, ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/home" element={<Homepage />} default/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/verify/:token" element={<Verify />}/>
          <Route path="/testShowImage" element={<ShowImage />}/>
          <Route path="/upload" element={<Upload />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/leaderboards" element={<LeaderBoard />}/>
          <Route path="/showcategory" element={<ShowCategory />}/>
          <Route path="/showimageforcategory" element={<ShowImageForCategory/>}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/resultSearch" element={<ResultSearch />}/>
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;

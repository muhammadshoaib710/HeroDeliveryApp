import React from "react";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./SignUps/Login";
import Sign from "./SignUps/Sign";
import HassleFreeJourney from "./SignUps/newsign";
import Common from "./components/Common";
import Management from "./components/Management";
import SignIn from "./SignUps/SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Common />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<Sign />} />
          <Route path="/register" element={<SignIn />} />
          <Route path="lastsign" element={<HassleFreeJourney />} />
          <Route path="management" element={<Management />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

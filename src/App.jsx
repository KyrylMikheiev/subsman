import Navbar from "./components/navbar/Navbar"
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/home/Home";
import SignIn from "./pages/signup/SignIn";
import SignUp from "./pages/signup/SignUp";
import Footer from "./components/footer/Footer";

const App = () => {

  return (
    <>
      <Navbar />
        {/* <div className="content"> */}
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
        {/* </div> */}
      <Footer />
    </>
  )
}

export default App

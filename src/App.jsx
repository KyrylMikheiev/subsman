import Navbar from "./components/Navbar"
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/home/Home";
import SignIn from "./pages/signup/SignIn";
import SignUp from "./pages/signup/SignUp";

const App = () => {

  return (
    <div className="App">
      <Navbar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App

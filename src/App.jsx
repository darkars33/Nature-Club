import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Gallery from "./Pages/Gallery";
import Documentary from "./Pages/Documentary";
import Leaderboard from "./Pages/Leaderboard";
import Team from "./Pages/Team";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Footer from "./Components/Footer";


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/documentary" element={<Documentary />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

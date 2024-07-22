import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Gallery from "./Pages/Gallery";
import Documentary from "./Pages/Documentary";
import Leaderboard from "./Pages/Leaderboard";
import Team from "./Pages/Team";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Footer from "./Components/Footer";
import Event from "./Pages/Event";
import LogIn from "./BackendInputs/LogIn";
import InputDocumentry from "./BackendInputs/InputDocumentry";
import InputTeam from "./BackendInputs/InputTeam";
import InputTrip from "./BackendInputs/InputTrip";
import BackendNavBar from "./BackendInputs/BackendNavBar";



function App() {

  const location = useLocation();
  
  const isLoginPath = location.pathname === "/login" || location.pathname === "/input-documentary" || location.pathname === "/input-team" || location.pathname === "/input-trip";
  
 

  return (
    <>
      {!isLoginPath && <Navbar />}
      {isLoginPath && <BackendNavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/documentary" element={<Documentary />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/team" element={<Team />} />
        <Route path="/event" element={<Event />} />
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/input-documentary" element={<InputDocumentry />} />
        <Route path="/input-team" element={<InputTeam />} />
        <Route path="/input-trip" element={<InputTrip />} />
      </Routes>
      {!isLoginPath && <Footer />}
      </>
  )
}

export default App;

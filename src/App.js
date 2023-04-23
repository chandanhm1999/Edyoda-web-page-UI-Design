import React from "react";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Data from "./componenets/slider/Data";
import { Navbar } from "./componenets/navbar/Navbar";
import Sidebar from "./componenets/Sidebar";
import Dashboard from './pages/dashbord/Dashboard.jsx';
import About from './pages/about/About.jsx';
import Analytics from './pages/analytics/Analytics.jsx';
import Pyt from "./pages/pytnloops/Pyt.jsx";
import Datatypes from "./pages/datatypes/Datatypes.jsx"
import OperatorL from "./pages/operatorloops/OperatorL.jsx"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Data />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/pyt" element={<Pyt />} />
          <Route path="/datatypes" element={<Datatypes />} />
          <Route path="/operatorloops" element={<OperatorL />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;

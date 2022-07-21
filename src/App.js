import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Proposal from "./pages/Proposal";
import nomicLogo from "./images/Nomic.png";
import { ConnectButton } from "web3uikit";

const App = () => {
  return (
    <>

    <div className="header">
      <img width="450px" src={nomicLogo} alt="Nomic" />
      <ConnectButton />
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proposal" element={<Proposal />} />
      </Routes>
    </>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav style={{ padding: "10px", backgroundColor: "#eee" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/profile">Profile</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

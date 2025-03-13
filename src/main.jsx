import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddMovie from "./pages/AddMovie"; // Create this in Step 4

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-movie" element={<AddMovie />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

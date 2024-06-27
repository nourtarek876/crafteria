// src/App.js

import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Main from "./Main";
import User1 from "./User1";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/User1" element={<User1 />} />
        </Routes>
      </BrowserRouter>
    </header>
  );
}

export default App;

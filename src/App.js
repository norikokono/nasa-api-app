// https://www.better.dev/make-a-stellar-react-nasa-app-in-10-minutes

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Apod from "./components/Apod/Apod";
import Past from "./components/Past/Past";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<Apod />} path="/apod" />
          <Route element={<Past />} path="/past" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// https://www.better.dev/make-a-stellar-react-nasa-app-in-10-minutes

import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Apod from "./components/Apod/Apod";
import Past from "./components/Past/Past";
import Mars from "./components/Mars/Mars";
import NotFound from "./NotFound/NotFound";
import "./App.css";

const App = () => {
// https://www.kindacode.com/article/how-to-create-a-scroll-to-top-button-in-react/
    // The back-to-top button is hidden at the beginning
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);
  
    // This function will scroll the window to the top 
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
      });
    };


  return (
    <>
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<Apod />} path="/apod" />
          <Route element={<Past />} path="/past" />
          <Route element={<Mars />} path="/mars" />
          <Route element={<Navigate to="/" /> } path="*" />
          <Route component={NotFound} />
        </Routes>
      </div>
    </BrowserRouter>

    {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
      {/* &#8679; is used to create the upward arrow */}
    </>
  );
}

export default App;
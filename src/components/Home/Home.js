import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {

  return (
    <div className="home">
      <Link className="home-link" to="/apod">See into the stars!</Link>&nbsp;&nbsp;
      <Link className="home-link" to="/past">See previous images!</Link>&nbsp;&nbsp;
      <Link className="home-link" to="/mars">Mars</Link>
    </div>
  );
}
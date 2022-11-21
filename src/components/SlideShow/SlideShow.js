import React from "react";
import Slide from "./Slide";
import "./SlideShow.css";
function SlideShow() {
  return (
    <section className="slider">
      <Slide />
      <div className="colorOverlay" />
    </section>
  );
}

export default SlideShow;

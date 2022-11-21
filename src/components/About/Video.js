import React from "react";
import "./Video.css"

function Video() {
  return (
    <div
      className="video"
      style={{ backgroundImage: "url(./img/carousel.webp)" }}
    >
      <i className="fa-sharp fa-solid fa-circle-play" />
    </div>
  );
}

export default Video;

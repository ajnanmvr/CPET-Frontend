import React from 'react'
import "./FirstPart.css";

function FirstPart() {
  return (
    <div className="sec1">
      <img src="./img/logo-white.svg" alt="Logo" />
      <h2>Lorem Ipsum</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere enim mollitia ullam fuga sit
        aspernatur magni saepe totam doloribus! Ut vero a consequuntur provident expedita modi accusantium repellat
        cupiditate!</p>
      <div className="line" />
      <div className="socialMedia">
        <a href="#"><i className="fa-brands fa-facebook" /></a>
        <a href="#"><i className="fa-brands fa-instagram" /></a>
        <a href="#"><i className="fa-solid fa-envelope" /></a>
      </div>
    </div>  )
}

export default FirstPart
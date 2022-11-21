import React from 'react'
import './SmallHeader.css'

function SmallHeader() {
  return (
<section className="small">
<div className="smallContent">
  <div className="socialMedia">
    <a href="https://www.dhiu.in/"><i className="fa-brands fa-facebook" /></a>
    <a href="https://www.dhiu.in/"><i className="fa-brands fa-instagram" /></a>
    <a href="https://www.dhiu.in/"><i className="fa-solid fa-envelope" /></a>
  </div>
  <div className="membership">
    <a href="https://www.dhiu.in/"><i className="fa-solid fa-user" />Login</a>
    <a href="https://www.dhiu.in/"><i className="fa-solid fa-user-plus" />Regsiter</a>
  </div>
</div>
</section>  )
}

export default SmallHeader
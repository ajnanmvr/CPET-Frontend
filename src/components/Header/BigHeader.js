import React from 'react'
import NavBar from './NavBar'
import './BigHeader.css'

function BigHeader() {
  return (
    <section className="big">
    <div className="bigContent">
      <img src="/img/hadia-logo.svg" alt="CPET Logo" />
<NavBar />
      <i className="fa-solid fa-magnifying-glass" />
    </div>
  </section>  )
}

export default BigHeader
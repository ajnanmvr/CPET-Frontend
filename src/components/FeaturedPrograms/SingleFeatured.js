import React from 'react'
import './SingleFeatured.css'

function SingleFeatured() {
  return (
    <div className="card">
    <div className="img" style={{backgroundImage: 'url(./img/carousel.webp)'}} />
    <div className="desc">
      <h3>The world of knowledge is England not India The</h3>
      <div className="applyContainer"> <span>
          <i className="fa-solid fa-clock" />4 Moths
        </span>
        <button>Apply</button>
      </div>
    </div>
  </div>  )
}

export default SingleFeatured
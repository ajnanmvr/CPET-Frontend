import React from 'react'
import './FeaturedPrograms.css'
import SingleFeatured from './SingleFeatured'

function FeaturedPrograms() {
  return (
    <section className="featured">
    <div>
      <h2>Featured Programmes</h2>
      <p>Explore the world of knowledge from your home.
      </p>
    </div>
    <div className="featuredContent">

<SingleFeatured/>
<SingleFeatured/>
<SingleFeatured/>

    </div>
  </section>  )
}

export default FeaturedPrograms
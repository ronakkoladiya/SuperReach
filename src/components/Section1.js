import React from 'react'
import hero from "../assets/hero.svg";
const Section1 = () => {
  return (
    <div className="section1">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 order-md-1 order-2 section1-left">
          <h1>Do you want to close more deals</h1>
          <p>
            Recruiters and Sales reps; hitting targets and closing deals
            can be stressful and hard work. Our Ai makes it easier.
          </p>
          <h2>Here’s the 2 steps to success</h2>
          <hr className="underline-yellow" />
        </div>
        <div class="col-md-6 order-md-2 order-1 section1-right ">
          <img src={hero} alt="Image Alt Text" />
          <div>
            <button class="btn btn-no"><a href="#">No</a></button>
            <button class="btn btn-yes"><a href="#">Yes</a></button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Section1
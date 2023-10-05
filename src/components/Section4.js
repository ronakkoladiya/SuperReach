import React from 'react'

import redLogo from "../assets/RED_Logo.svg";
import champMan from "../assets/Chapman Black 2.svg";
import elliott from "../assets/Elliott.svg";
import republic from "../assets/third republic.svg";
import acquired from "../assets/Acquired.svg";
import ignitesap from "../assets/Ignitesap.png";
import bigfour from "../assets/bigfour.png";

const Section4 = () => {
  return (
    <section className={"section4"}>
          <div className={"container"}>
            <div className={"row px-3 py-5 px-md-0 py-md-5 my-5 g-0"}>
              <div className={"col-12 mainTop"}>
                <h2>
                  The winning formulas <span>from the founders of</span>
                </h2>
              </div>
              <div className={"col-12 mainBottom"}>
                <div className={"companyLogos col-6 col-sm-4 col-lg-2"}>
                  <img src={redLogo} />
                </div>
                <div className={"companyLogos col-6 col-sm-4 col-lg-2"}>
                  <img src={champMan} />
                </div>
                <div className={"companyLogos col-6 col-sm-4 col-lg-2"}>
                  <img src={elliott} />
                </div>
                <div className={"companyLogos col-6 col-sm-4 col-lg-2"}>
                  <img src={republic} />
                </div>
                <div className={"companyLogos col-6 col-sm-4 col-lg-2"}>
                  <img src={ignitesap} />
                </div>
                <div className={"companyLogos col-6 col-sm-4 col-lg-2"}>
                  <img src={bigfour} />
                </div>
                <div className={"companyLogos col-6 col-sm-4 col-lg-2"}>
                  <img src={acquired} />
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Section4
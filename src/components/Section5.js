import React from 'react'
import thirdrepulicdark from "../assets/thirdrepublicblack.png";

const Section5 = () => {
  return (
    <>
     {/* for men  */}
     <section className="section5 py-5 px-3">
          <div class="container">
            <div class="row px-md-0">
              <div class="col-12 col-md-6 section5-left section5-left-men">
                <div className="row boxofimg">
                  <div className="col-3 justify-content-start">
                    <span className="quotes">“</span>
                  </div>
                  <div className="col-9 pe-0">
                    <div>
                      <h4>
                        112% increase<br />in billings in 6 months
                      </h4>
                    </div>
                    <div className="row d-flex align-items-center">
                      <p className="col-6 m-0">
                        Mat Roche <br /> Founder
                      </p>
                      <img className="col-6" src={thirdrepulicdark} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-6 section5-right ">
                <h4>Find. Engage. Automate</h4>
                <hr className="hrlineheader" />
                <h2>Outreach</h2>
                <p>
                  Hyper-personalised outreach platform to warm up prospects. All
                  synced with your CRM.
                </p>
                <p>
                  <span class="bullet">&#8226;</span> Role-play with 100’s of
                  Customer Avatars
                </p>
                <p>
                  <span class="bullet">&#8226;</span> Automated Coaching
                </p>
                <p>
                  <span class="bullet">&#8226;</span> Find out who can sell
                  within a week. (fail fast)
                </p>
                <a href={"#"}>Get started</a>
              </div>
            </div>
          </div>
        </section>

        {/* for women  */}
        <section className="section5 px-3">
          <div class="container">
            <div class="row px-md-0">
              <div class="col-12 col-md-6 order-md-1 order-2 section5-right">
                <h4>Find. Engage. Automate</h4>
                <hr className="hrlineheader" />
                <h2>AI Sales Training</h2>
                <p>
                  Develop sales skills rapidly and get a year of sales
                  experience in just 14 days
                </p>
                <p>
                  <span class="bullet">&#8226;</span> Role-play with 100’s of
                  Customer Avatars
                </p>
                <p>
                  <span class="bullet">&#8226;</span> Automated Coaching
                </p>
                <p>
                  <span class="bullet">&#8226;</span> Find out who can sell
                  within a week. (fail fast)
                </p>
                <a href={"#"}>Get started</a>
              </div>

              <div class="col-12 col-md-6 section5-left  order-md-2 order-1 section5-left-women px-1">
                <div className="row boxofimg">
                  <div className="col-3 justify-content-start">
                    <span className="quotes">“</span>
                  </div>
                  <div className="col-9  pe-0">
                    <div>
                      <h4>
                        112% increase <br /> in billings in 6 months
                      </h4>
                    </div>
                    <div className="row d-flex align-items-center">
                      <p className="col-6 m-0">
                        Mat Roche <br /> Founder
                      </p>
                      <img className="col-6" src={thirdrepulicdark} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="simpleheader py-5">
              <h2>
                Meet the experts and Revolutionise your sales performance in{" "}
                <span>14 Days</span>
              </h2>
            </div>
          </div>
        </section>
    </>
  )
}

export default Section5
import React from 'react'

const Section2 = () => {
  return (
    <section className={"section2"}>
    <div className={"container"}>
      <div
        className={"row px-3 pb-5 px-md-0 py-md-5 g-0 align-items-center"}
      >
        <div className={"col-12 col-md-6 mainLeft"}>
          <div className={"d-flex justify-content-start"}>
            <div>
              <span className={"sec2left1"}>1</span>
            </div>
            <div className={"mainLeftContent ms-0 ms-lg-4"}>
              <span>
                Generate
                <br /> more <span>leads</span>
              </span>
            </div>
          </div>
        </div>
        <div className={"col-12 col-md-6 xs-12 mainRight"}>
          <h2>Outrach & Data</h2>
          <p>
            Scale your Outreach & Engage more prospects. Superreach
            automates your outreach efforts.
          </p>
          <a href={"#"}>Get started</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Section2
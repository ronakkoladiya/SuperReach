import React from 'react'

import footerArrow from "../assets/aero.png";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/Linkdin.svg";
import facebook from "../assets/facebook.svg";

const Footer = () => {
  return (
    <footer>
    <div className={"container"}>
      <div className={"row topFooter px-3 pb-5 px-md-0 py-md-5 g-0"}>
        <div className={"col-12 col-lg-6 order-2 topLeft"}>
          <h2>Go further.</h2>
          <h2>Go faster.</h2>
          <p>Unlocking recruiters and sales reps full potential</p>
          <a href={"#"}>Get started</a>
        </div>
        <div className={"col-12 col-lg-6 order-lg-2 topRight mt-4"}>
          <div
            className={
              "arrows d-flex justify-content-center justify-content-lg-end w-100 mb-5 mb-lg-0"
            }
          >
            <img src={footerArrow} />
            <img src={footerArrow} />
            <img src={footerArrow} />
          </div>
        </div>
      </div>
      <div className={"row bottomFooter px-3 pb-5 px-md-0 py-md-3 g-0"}>
        <div
          className={
            "col-12 col-sm-6 col-md-4 col-lg-4 mt-4 order-5 order-lg-1"
          }
        >
          <ul className={"p-0 mb-0 d-flex socialIcons"}>
            <li>
              <a href={"#"}>
                <img src={twitter} />
              </a>
            </li>
            <li>
              <a href={"#"}>
                <img src={linkedin} />
              </a>
            </li>
            <li>
              <a href={"#"}>
                <img src={facebook} />
              </a>
            </li>
          </ul>
        </div>
        <div
          className={"col-12 col-sm-6 col-md-4 col-lg-2 mt-4 order-lg-2"}
        >
          <h2>Explore</h2>
          <ul className={"m-0 p-0"}>
            <li>
              <a href={"#"}>Our story</a>
            </li>
            <li>
              <a href={"#"}>Meet the team</a>
            </li>
            <li>
              <a href={"#"}>Join the team</a>
            </li>
            <li>
              <a href={"#"}>Refeeral program</a>
            </li>
          </ul>
        </div>
        <div
          className={"col-12 col-sm-6 col-md-4 col-lg-2 mt-4 order-lg-3"}
        >
          <ul className={"p-0 mb-0 ulWithoutTitle"}>
            <li>
              <a href={"#"}>Blogs</a>
            </li>
            <li>
              <a href={"#"}>Press</a>
            </li>
            <li>
              <a href={"#"}>Contact</a>
            </li>
          </ul>
        </div>
        <div
          className={"col-12 col-sm-6 col-md-4 col-lg-2 mt-4 order-lg-4"}
        >
          <h2>Features</h2>
          <ul className={"m-0 p-0"}>
            <li>
              <a href={"#"}>Outreach</a>
            </li>
            <li>
              <a href={"#"}>Learning Platform</a>
            </li>
            <li>
              <a href={"#"}>AI Role Play</a>
            </li>
            <li>
              <a href={"#"}>Reporting & analytics</a>
            </li>
          </ul>
        </div>
        <div
          className={"col-12 col-sm-6 col-md-4 col-lg-2 mt-4 order-lg-5"}
        >
          <h2>Resources</h2>
          <ul className={"m-0 p-0"}>
            <li>
              <a href={"#"}>Help desk</a>
            </li>
            <li>
              <a href={"#"}>Faqs</a>
            </li>
            <li>
              <a href={"#"}>Videos/webinars</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={"row px-3 px-md-0 pt-md-5 g-0 footerRights"}>
        <div className={"col-12 order-2 col-lg-6"}>
          <p className={"text-center text-lg-start"}>
            Copyright @ 2022, SuperReach. All Rights Reserved.
          </p>
        </div>
        <div className={"col-12 col-lg-6 order-lg-2"}>
          <ul
            className={
              "m-0 p-0 d-flex mb-4 mb-lg-0 justify-content-center justify-content-lg-end"
            }
          >
            <li>
              <a href={"#"}>Terms of Service</a>
            </li>
            <li>
              <a href={"#"}>Privacy Policy</a>
            </li>
            <li>
              <a href={"#"}>Usage Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
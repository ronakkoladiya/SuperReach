import thirdrepulicdark from "../assets/thirdrepublicblack.png";
import hero from "../assets/hero.svg";
import { useState } from "react";
import logo from "../assets/Logo.svg";
import redLogo from "../assets/RED_Logo.svg";
import champMan from "../assets/Chapman Black 2.svg";
import elliott from "../assets/Elliott.svg";
import republic from "../assets/third republic.svg";
import acquired from "../assets/Acquired.svg";
import footerArrow from "../assets/aero.png";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/Linkdin.svg";
import ignitesap from "../assets/Ignitesap.png";
import bigfour from "../assets/bigfour.png";
import facebook from "../assets/facebook.svg";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaBars } from "react-icons/fa6";

function LandingPage() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <main className="main">
                {/* Header Start  */}
                <header>
                    {/*-----------nav start-----------------*/}
                    <nav className="navbarScreen">
                        <div className={"container"}>
                            <div className="logo-container">
                                <img src={logo} alt="Logo" />
                            </div>
                            <div className="links-container">
                                <ul className="link-list">
                                    <li>
                                        <a href="#">Why SuperReach</a>
                                    </li>
                                    <li>
                                        <a href="#">Features</a>
                                    </li>
                                    <li>
                                        <a href="#">Use Cases</a>
                                    </li>
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                    <li>
                                        <a href="#">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="navBtns d-flex justify-content-between align-items-center">
                                <a href="#" className="login">
                                    Login
                                </a>
                                <a className="start-button">Start</a>
                            </div>

                            {/*-----------mobile nav start--------------*/}
                            <div className={"mobileNav d-lg-none"}>
                                <FaBars className={"bars"} onClick={handleShow} />

                                <Offcanvas show={show} onHide={handleClose} scroll={true}>
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>
                                            <img src={logo} className={"w-75"} />
                                        </Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <ul className="link-list m-0 p-0">
                                            <li>
                                                <a href="#">Why SuperReach</a>
                                            </li>
                                            <li>
                                                <a href="#">Features</a>
                                            </li>
                                            <li>
                                                <a href="#">Use Cases</a>
                                            </li>
                                            <li>
                                                <a href="#">About</a>
                                            </li>
                                            <li>
                                                <a href="#">Pricing</a>
                                            </li>
                                            <li>
                                                <a href="#">Blog</a>
                                            </li>
                                        </ul>
                                        <div className="moNavBtns d-flex justify-content-between align-items-center">
                                            <a href="#" className="login">
                                                Login
                                            </a>
                                            <a className="start-button">Start</a>
                                        </div>
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </div>
                            {/*-----------mobile nav start--------------*/}
                        </div>
                    </nav>
                    {/*-----------nav end-----------------*/}
                    {/*-----------Section1 Start-----------------*/}
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
                                    <hr className="underline-yellow mx-auto" />
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
                </header>
                {/*-----------Section1 End-----------------*/}

                {/*-----------section2 start-----------------*/}
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
                {/*-----------section2 end-----------------*/}

                {/*-----------section3 start-----------------*/}
                <section className={"section3"}>
                    <div className={"container"}>
                        <div
                            className={"row px-3 pb-5 px-md-0 py-md-5 g-0 align-items-center"}
                        >
                            <div className={"col-12 col-md-6 mainLeft"}>
                                <div className={"d-flex justify-content-start"}>
                                    <div>
                                        <span className={"sec3left2"}>2</span>
                                    </div>
                                    <div className={"mainLeftContent ms-0 ms-md-4"}>
                    <span>
                      Close
                      <br /> more <span>deals</span>
                    </span>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-12 col-md-6 xs-12 mainRight"}>
                                <h2>AI Sales Training</h2>
                                <p>
                                    Scale your Outreach & Engage more prospects. Superreach
                                    automates your outreach efforts.
                                </p>
                                <a href={"#"}>Get started</a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*-----------section3 end-----------------*/}

                {/*-----------section4 start-----------------*/}
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
                {/*-----------section4 end-----------------*/}

                {/*-----------section5 Start-----------------*/}
                {/* for men  */}
                <section className="section5 py-5 px-3">
                    <div class="container">
                        <div class="row px-md-0">
                            <div class="col-12 col-md-6 section5-left section5-left-men">
                                <div className="row boxofimg">
                                    <div className="col-3 justify-content-start">
                                        <span className="quotes">“</span>
                                    </div>
                                    <div className="col-9">
                                        <div>
                                            <h4>
                                                112% increase <br /> in billings in 6 months
                                            </h4>
                                        </div>
                                        <div className="row d-flex align-items-center">
                                            <p className="col-6">
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
                                    <div className="col-9">
                                        <div>
                                            <h4>
                                                112% increase <br /> in billings in 6 months
                                            </h4>
                                        </div>
                                        <div className="row d-flex align-items-center">
                                            <p className="col-6">
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
                {/*-----------section5 End-----------------*/}

                {/*-----------footer start-----------------*/}
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
                {/*-----------footer end-----------------*/}
            </main>
        </>
    );
}

export default LandingPage;

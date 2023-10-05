import React from "react";
import { useState } from "react";
import logo from "../assets/Logo.svg";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaBars } from "react-icons/fa6";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
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
  );
};

export default NavBar;

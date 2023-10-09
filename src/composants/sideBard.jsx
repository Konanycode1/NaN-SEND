import React from "react";
import "../assets/css/sideBar.css";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-none min-vh-100">
        <div className="d-flex flex-column align-items-center bg-white align-items-sm-start px-3 rounded-4 pt-2 text-white min-vh-60">
          <a
            href="/"
            className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span className="fs-5 d-none d-sm-inline">Menu</span>
          </a>
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li className="nav-item">
              <Link to={"/dashboard"}>
                <a
                  href="#"
                  className="nav-link align-middle px-0"
                  id="ClickHover"
                >
                  <i className="fa-solid fa-border-all "></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/contacts"}>
                <a href="#" className="nav-link align-middle px-0">
                  <i className="fa-solid fa-users"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Contacts</span>
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link align-middle px-0">
                <i className="fa-solid fa-clipboard-list"></i>{" "}
                <span className="ms-1 d-none d-sm-inline">Messages</span>
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link align-middle px-0">
                <i className="fa-regular fa-calendar"></i>{" "}
                <span className="ms-1 d-none d-sm-inline">Broadcasts</span>
              </a>
            </li>

            <li className="nav-item">
              <Link to={"/profile"}>
                <a href="#" className="nav-link align-middle px-0">
                  <i className="fa-regular fa-circle-user"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Profils</span>
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link align-middle px-0">
                <i className="fa-solid fa-hourglass-start"></i>{" "}
                <span className="ms-1 d-none d-sm-inline">
                  Workspace setting
                </span>
              </a>
            </li>

            <li className="nav-item">
              <Link to={"/rapports"}>
                <a href="#" className="nav-link align-middle px-0">
                  <i className="fa-solid fa-comments"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Repports</span>
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/"}>
                <a href="#" className="nav-link align-middle px-0">
                  <i className="fa-solid fa-arrow-left"></i>
                  <span className="ms-1 d-none d-sm-inline">Deconnexion</span>
                </a>
              </Link>
            </li>
          </ul>
          <hr />
        </div>
        <div
          className="dropdown position-absolute rounded-4 m-2 p-4 bg-white bottom-0 start-0"
          id="btnBottom"
        >
          <h5> NAN DIGITAL ACADEMY</h5>
          <h6>Version: 1.0.0.11</h6>
        </div>
      </div>
    </>
  );
}

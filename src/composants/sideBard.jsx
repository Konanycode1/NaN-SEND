import React from "react"
import "../assets/css/sideBar.css"
import { Link } from "react-router-dom"


export default function SideBar() {
    return(
        <>
                <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-none min-vh-100">
                        <div class="d-flex flex-column align-items-center bg-white align-items-sm-start px-3 rounded-4 pt-2 text-white min-vh-60">
                            <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span class="fs-5 d-none d-sm-inline">Menu</span>
                            </a>
                            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li class="nav-item">
                                    <Link to={"/dashboard"}>
                                    <a href="#" class="nav-link align-middle px-0" id="ClickHover">
                                    <i class="fa-solid fa-border-all "></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span>
                                    </a>
                                    </Link>
                                </li>

                                <li class="nav-item">
                                    <Link to={"/contacts"}><a href="#" class="nav-link align-middle px-0">
                                    <i class="fa-solid fa-users"></i> <span class="ms-1 d-none d-sm-inline">Contacts</span>
                                    </a></Link>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link align-middle px-0">
                                    <i class="fa-solid fa-clipboard-list"></i> <span class="ms-1 d-none d-sm-inline">Messages</span>
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link align-middle px-0">
                                    <i class="fa-regular fa-calendar"></i> <span class="ms-1 d-none d-sm-inline">Broadcasts</span>
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <Link to={"/profile"}><a href="#" class="nav-link align-middle px-0">
                                    <i class="fa-regular fa-circle-user"></i> <span class="ms-1 d-none d-sm-inline">Profils</span>
                                    </a></Link>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link align-middle px-0">
                                    <i class="fa-solid fa-hourglass-start"></i> <span class="ms-1 d-none d-sm-inline">Workspace setting</span>
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <Link to={"/rapports"}><a href="#" class="nav-link align-middle px-0">
                                    <i class="fa-solid fa-comments"></i>  <span class="ms-1 d-none d-sm-inline">Repports</span>
                                    </a></Link>
                                </li>

                                <li class="nav-item">
                                    <Link to={"/"}><a href="#" class="nav-link align-middle px-0">
                                    <i class="fa-solid fa-arrow-left"></i><span class="ms-1 d-none d-sm-inline">Deconnexion</span>
                                    </a>
                                    </Link>
                                </li>
                                
                            </ul>
                            <hr />   
                        </div>
                        <div class="dropdown position-absolute rounded-4 m-2 p-4 bg-white bottom-0 start-0" id="btnBottom">
                                <h5> NAN DIGITAL ACADEMY</h5>
                                <h6>Version: 1.0.0.11</h6>
                        </div>
                    </div>

        </>
    )
}
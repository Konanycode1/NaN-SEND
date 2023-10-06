import React from 'react'
import { Link } from "react-router-dom"
import "../assets/css/dash.css"
import TopBar from "../composants/topBar"
import Broadcast from '../composants/ broadcast'
import Profile from '../composants/profile'



export default function Dashboard() {
    return(
        <body className="dash">
            <TopBar/>
            <div class="container-fluid mt-4">
                <div class="row flex-nowrap">
                    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-none min-vh-100">
                        <div class="d-flex flex-column align-items-center bg-white align-items-sm-start px-3 rounded-4 pt-2 text-white min-vh-60">
                            <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span class="fs-5 d-none d-sm-inline">Menu</span>
                            </a>
                            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li class="nav-item">
                                    <a href="#" class="nav-link align-middle px-0" id="ClickHover">
                                    <i class="fa-solid fa-border-all "></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span>
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link align-middle px-0">
                                    <i class="fa-solid fa-users"></i> <span class="ms-1 d-none d-sm-inline">Contacts</span>
                                    </a>
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
                                    <a href="#" class="nav-link align-middle px-0">
                                    <i class="fa-regular fa-circle-user"></i> <span class="ms-1 d-none d-sm-inline">Profils</span>
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link align-middle px-0">
                                    <i class="fa-solid fa-hourglass-start"></i> <span class="ms-1 d-none d-sm-inline">Workspace setting</span>
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link align-middle px-0">
                                    <i class="fa-solid fa-comments"></i>  <span class="ms-1 d-none d-sm-inline">Repports</span>
                                    </a>
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


                    <div class="col py-3 cardRassemblement">
                        <Profile />
                    </div>
                </div>
            </div>

        </body>


    )
}
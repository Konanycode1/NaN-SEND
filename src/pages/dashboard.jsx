import "../assets/css/dash.css"
import { Link } from "react-router-dom"
import TopBar from "../composants/topBar"


export default function Dashboard() {
    return(
        <div className="dash">
            <TopBar/>

            <div className="cardDash ">
                <div class="row">
                    <div class="col-2 mb-3 mb-sm-0">
                        <div class="card">
                            <div class="card-body dashEmoji mt-5 mb-5  m-0 p-0">
                                <Link><div className="dashLink"><i class="fa-solid fa-border-all"></i><p>Dashboard</p></div></Link>
                                <Link><div className="dashLink"><i class="fa-solid fa-users"></i><p>Contacts</p></div></Link>    
                                <Link><div className="dashLink"><i class="fa-solid fa-clipboard-list"></i><p>Messages</p></div></Link>
                                <Link><div className="dashLink"><i class="fa-regular fa-calendar"></i><p>Broadcasts</p></div></Link>
                                <Link><div className="dashLink"><i class="fa-regular fa-circle-user"></i><p>Profils</p></div></Link>
                                <Link><div className="dashLink"><i class="fa-solid fa-hourglass-start"></i><p>Workspace setting</p></div></Link>
                                <Link><div className="dashLink"><i class="fa-solid fa-comments"></i><p>Repports</p></div></Link>
                                <Link><div className="dashLink"><i class="fa-solid fa-arrow-left"></i><p>Deconnexion</p></div></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-10">
                        <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                    </div>

                </div>


                    {/* <div class="row">
                        <div class="col-2 position-absolute bottom-0 start-0">
                            <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                            </div>
                        </div>
                    </div> */}
                </div>
        </div>

    )
}
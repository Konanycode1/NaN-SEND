import React from 'react'
import "../assets/css/dash.css"
import TopBar from "../composants/topBar"
import SideBar from '../composants/sideBard'



export default function Dashboard() {
    return(
        <body className="dash">
            <TopBar/>
            <div className="container-fluid mt-4">
                <div className="row flex-nowrap">
                    <SideBar />

                    <div className="col py-3 cardRassemblement">
                    </div>
                </div>
            </div>

        </body>


    )
}
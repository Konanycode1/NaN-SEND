import React from 'react'
import "../assets/css/dash.css"
import TopBar from "../composants/topBar"
import SideBar from '../composants/sideBard'



export default function Dashboard() {
    return(
        <body className="dash">
            <TopBar/>
            <div class="container-fluid mt-4">
                <div class="row flex-nowrap">
                    <SideBar />

                    <div class="col py-3 cardRassemblement">
                    </div>
                </div>
            </div>

        </body>


    )
}
import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/importContact.css"
import TopBar from "../composants/topBar"
import SideBar from '../composants/sideBard'



export default function ImportContacts() {
    return(
        <body className="dash">
            <TopBar/>
            <div className="container-fluid mt-4">
                <div className="row flex-nowrap">
                    <SideBar />

                    <div className="col py-3 cardRassemblement">
                        <div className="row">
                            <div className="col-sm-8 mb-3 mb-sm-0">
                                <div className="card">
                                    <div className="card-body">
                                        <Link to={"/contacts"}><i className="fa-solid fa-angle-left"></i> Contact</Link>
                                        <div className='col-10 mx-auto m-5'>
                                            <h2>Contact d’importation</h2>
                                            <div className="d-flex">
                                                <div className='rounded-circle cardEtoileRond'>*</div><p>Télécharger le fichier CVS</p>
                                            </div>
                                            <h4>Téléchargez un fichier CSV pour ajouter  ou mettre à jour  des contacts </h4>
                                            <div className="telechargerImport d-flex justify-content-center">
                                                <i class="fa-solid fa-download"></i>
                                            </div>
                                            <h4>Objectif de l’importation</h4>
                                            <div>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                <div className='d-flex'>
                                                    <h4>Identification</h4><div className='rounded-circle cardEtoileRond '>?</div>
                                                </div>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected> Téléphone </option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </body>


    )
}
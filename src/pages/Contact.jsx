import React from 'react'
import "../assets/css/contact.css"
import TopBar from "../composants/topBar"
import SideBar from '../composants/sideBard'



export default function Contacts() {
    return(
        <body className="dash">
            <TopBar/>
            <div className="container-fluid mt-4">
                <div className="row flex-nowrap">
                    <SideBar />

                    <div className="col py-3 cardRassemblement">
                        <div className="card mb-4 cardContact">
                            <div className="card-body d-flex justify-content-between row ">
                                <div className="col-sm-7">
                                    <form className="d-flex input-group " role="search">
                                        <input className="form-control me-2" type="search" placeholder="Rechercher un contact" aria-label="Search" aria-describedby="inputGroupPrepend2"/>
                                        <button className="btn btn-outline-success btnRecherche" type="submit">Rechercher</button>
                                    </form>
                                </div>
                                
                                <div className="col-sm-4 mx-auto d-flex justify-content-around contactBtnCard">
                                    <button type="button" className="btn btn-primary"><i className="fa-solid fa-plus"></i> Contact d’mportation </button>
                                    <button type="button" className="btn btn-primary"><i className="fa-solid fa-plus"></i> Ajouter le contact</button>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-4 p-4">
                            <div className="card-body d-flex justify-content-between row p-4">
                                <table className="table">
                                    <thead>
                                        <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Non & prénom</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Numéro whatsapp</th>
                                        <th scope="col">Pays</th>
                                        <th scope="col">Langues</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <th scope="row form-check"><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></th>
                                        <td >Abraham konan</td>
                                        <td>abrahamkonany@gmail.com </td>
                                        <td>+2250141822918</td>
                                        <td>Côte d’ivoire</td>
                                        <td>Français</td>
                                        </tr>
                                        <tr>
                                        <th scope="row form-check"><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></th>
                                        <td >Abraham konan</td>
                                        <td>abrahamkonany@gmail.com </td>
                                        <td>+2250141822918</td>
                                        <td>Côte d’ivoire</td>
                                        <td>Français</td>
                                        </tr>
                                        <tr>
                                        <th scope="row form-check"><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></th>
                                        <td >Abraham konan</td>
                                        <td>abrahamkonany@gmail.com </td>
                                        <td>+2250141822918</td>
                                        <td>Côte d’ivoire</td>
                                        <td>Français</td>
                                        </tr>
                                        <tr>
                                        <th scope="row form-check"><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></th>
                                        <td >Abraham konan</td>
                                        <td>abrahamkonany@gmail.com </td>
                                        <td>+2250141822918</td>
                                        <td>Côte d’ivoire</td>
                                        <td>Français</td>
                                        </tr>
                                        <tr>
                                        <th scope="row form-check"><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></th>
                                        <td >Abraham konan</td>
                                        <td>abrahamkonany@gmail.com </td>
                                        <td>+2250141822918</td>
                                        <td>Côte d’ivoire</td>
                                        <td>Français</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card mb-4 float-sm-end">
                            <div className="card-body row d-flex justify-content-center col-sm-4 p-2">
                                <i className="fa-solid fa-angle-left"></i>
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
                                <i className="fa-solid fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </body>


    )
}
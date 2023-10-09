import React from 'react'
import "../assets/css/contact.css"
import TopBar from "../composants/topBar"
import SideBar from '../composants/sideBard'



export default function Contacts() {
    return(
        <body className="dash">
            <TopBar/>
            <div class="container-fluid mt-4">
                <div class="row flex-nowrap">
                    <SideBar />

                    <div class="col py-3 cardRassemblement">
                        <div class="card mb-4 cardContact">
                            <div class="card-body d-flex justify-content-between row ">
                                <div className="col-sm-7">
                                    <form class="d-flex input-group " role="search">
                                        <input class="form-control me-2" type="search" placeholder="Rechercher un contact" aria-label="Search" aria-describedby="inputGroupPrepend2"/>
                                        <button class="btn btn-outline-success btnRecherche" type="submit">Rechercher</button>
                                    </form>
                                </div>
                                
                                <div className="col-sm-4 mx-auto d-flex justify-content-around contactBtnCard">
                                    <button type="button" class="btn btn-primary"><i class="fa-solid fa-plus"></i> Contact d’mportation </button>
                                    <button type="button" class="btn btn-primary"><i class="fa-solid fa-plus"></i> Ajouter le contact</button>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-4 p-4">
                            <div class="card-body d-flex justify-content-between row p-4">
                                <table class="table">
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
                                        <th scope="row form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></th>
                                        <td >Abraham konan</td>
                                        <td>abrahamkonany@gmail.com </td>
                                        <td>+2250141822918</td>
                                        <td>Côte d’ivoire</td>
                                        <td>Français</td>
                                        </tr>
                                        <tr>
                                        <th scope="row form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></th>
                                        <td >Abraham konan</td>
                                        <td>abrahamkonany@gmail.com </td>
                                        <td>+2250141822918</td>
                                        <td>Côte d’ivoire</td>
                                        <td>Français</td>
                                        </tr>
                                        <tr>
                                        <th scope="row form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></th>
                                        <td >Abraham konan</td>
                                        <td>abrahamkonany@gmail.com </td>
                                        <td>+2250141822918</td>
                                        <td>Côte d’ivoire</td>
                                        <td>Français</td>
                                        </tr>
                                        <tr>
                                        <th scope="row form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></th>
                                        <td >Abraham konan</td>
                                        <td>abrahamkonany@gmail.com </td>
                                        <td>+2250141822918</td>
                                        <td>Côte d’ivoire</td>
                                        <td>Français</td>
                                        </tr>
                                        <tr>
                                        <th scope="row form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></th>
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
                        <div class="card mb-4 float-sm-end">
                            <div class="card-body row d-flex justify-content-center col-sm-4 p-2">
                                <i class="fa-solid fa-angle-left"></i>
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
                                <i class="fa-solid fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </body>


    )
}
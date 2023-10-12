import React from 'react'
import "../assets/css/rapport.css"
import TopBar from "../composants/topBar"
import SideBar from '../composants/sideBard'


export default function Rapports() {
    return(
        <body className="dash">
            <TopBar/>
            <div class="container-fluid mt-4">
                <div class="row flex-nowrap">
                    <SideBar />

                    <div class="col py-3 cardRassemblement rapportCard">
                        <div class="card mb-4 rapportCard1">
                        <div class="card-body d-flex justify-content-between row ">
                            <div className="col-sm-8">
                                <form class="d-flex input-group " role="search">
                                    <input class="form-control me-2" type="search" placeholder="Rechercher un contact" aria-label="Search" aria-describedby="inputGroupPrepend2"/>
                                    <button class="btn btn-outline-success btnRecherche" type="submit">Rechercher</button>
                                </form>
                            </div>
                            
                            <div className="col-sm-4 ">
                            <button type="button" class="btn btn-primary btnRestaurer float-sm-end"><i class="fa-solid fa-plus"></i> Tout Restaurer</button>
                            </div>
                        </div>
                    </div>

                    <ins><h1 className="rapportH1">Contact supprimé</h1></ins>

                    <div class="card mt-4 mb-4 rapportCard2">
                        <div class="card-body">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        
                                    <td>Abraha konanny</td>
                                    <td className="td_Email">abrahamkonany@gmail.com</td>
                                    <td>+225 0141822918</td>
                                    
                                    <td><button type="button" class="btn btn-primary"> Restaurer</button></td>
                                    </tr>
                                    <tr>
                                        
                                    <td>Abraha konanny</td>
                                    <td className="td_Email">abrahamkonany@gmail.com</td>
                                    <td>+225 0141822918</td>
                                    <td><button type="button" class="btn btn-primary"> Restaurer</button></td>
                                    </tr>
                                    <tr>
                                        
                                    <td>Abraha konanny</td>
                                    <td className="td_Email">abrahamkonany@gmail.com</td>
                                    <td>+225 0141822918</td>
                                    <td><button type="button" class="btn btn-primary"> Restaurer</button></td>
                                    </tr>
                                    <tr>
                                        
                                    <td>Abraha konanny</td>
                                    <td className="td_Email">abrahamkonany@gmail.com</td>
                                    <td>+225 0141822918</td>
                                    <td><button type="button" class="btn btn-primary"> Restaurer</button></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                    <ins><h1 className="rapportH1 ">Teams supprimé</h1></ins>

                    <div class="card mt-4 rapportCard2">
                        <div class="card-body">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        
                                    <td>Abraha konanny</td>
                                    <td className="td_Email">abrahamkonany@gmail.com</td>
                                    <td>+225 0141822918</td>
                                    
                                    <td><button type="button" class="btn btn-primary"> Restaurer</button></td>
                                    </tr>
                                    <tr>
                                        
                                    <td>Abraha konanny</td>
                                    <td className="td_Email">abrahamkonany@gmail.com</td>
                                    <td>+225 0141822918</td>
                                    <td><button type="button" class="btn btn-primary"> Restaurer</button></td>
                                    </tr>
                                    <tr>
                                        
                                    <td>Abraha konanny</td>
                                    <td className="td_Email">abrahamkonany@gmail.com</td>
                                    <td>+225 0141822918</td>
                                    <td><button type="button" class="btn btn-primary"> Restaurer</button></td>
                                    </tr>
                                    <tr>
                                        
                                    <td>Abraha konanny</td>
                                    <td className="td_Email">abrahamkonany@gmail.com</td>
                                    <td>+225 0141822918</td>
                                    <td><button type="button" class="btn btn-primary"> Restaurer</button></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </body>


    )
}
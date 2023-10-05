import "../assets/css/rapport.css"


export default function Rapport() {
    return(
        <>
            <div class="card mb-4">
                <div class="card-body d-flex justify-content-between row">
                    <div className="col-sm-8">
                        <form class="d-flex input-group " role="search">
                            <input class="form-control me-2" type="search" placeholder="Rechercher contact" aria-label="Search" aria-describedby="inputGroupPrepend2"/>
                            <button class="btn btn-outline-success" type="submit">Rechercher</button>
                        </form>
                    </div>
                    
                    <div className="col-sm-2">
                     <button type="button" class="btn btn-primary"><i class="fa-solid fa-plus"></i> Tout Restaurer</button>
                    </div>
                </div>
            </div>
            <h1 className="rapportH1">Contact supprimé</h1>
            <div class="card mt-4 mb-4">
                <div class="card-body">
                    <table class="table">
                        <tbody>
                            <tr>
                                
                            <td>Abraha konanny</td>
                            <td>abrahamkonany@gmail.com</td>
                            <td>+225 0141822918</td>
                            
                             <td><button type="button" class="btn btn-primary"> Restaurer</button></td>
                            </tr>
                            <tr>
                                
                            <td>Abraha konanny</td>
                            <td>abrahamkonany@gmail.com</td>
                            <td>+225 0141822918</td>
                             <td><button type="button" class="btn btn-primary"> Restaurer</button></td>
                            </tr>
                            <tr>
                                
                            <td>Abraha konanny</td>
                            <td>abrahamkonany@gmail.com</td>
                            <td>+225 0141822918</td>
                             <td><button type="button" class="btn btn-primary"> Restaurer</button></td>
                            </tr>
                            <tr>
                                
                            <td>Abraha konanny</td>
                            <td>abrahamkonany@gmail.com</td>
                            <td>+225 0141822918</td>
                             <td><button type="button" class="btn btn-primary"> Restaurer</button></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

            <h1 className="rapportH1">Teams supprimé</h1>
            <div class="card mt-4">
            <div class="card-body">
                    <table class="table">
                        <tbody>
                            <tr>
                                
                            <td>Abraha konanny</td>
                            <td>abrahamkonany@gmail.com</td>
                            <td>+225 0141822918</td>
                            
                             <td><button type="button" class="btn btn-primary"> Restaurer</button></td>
                            </tr>
                            <tr>
                                
                            <td>Abraha konanny</td>
                            <td>abrahamkonany@gmail.com</td>
                            <td>+225 0141822918</td>
                             <td><button type="button" class="btn btn-primary"> Restaurer</button></td>
                            </tr>
                            <tr>
                                
                            <td>Abraha konanny</td>
                            <td>abrahamkonany@gmail.com</td>
                            <td>+225 0141822918</td>
                             <td><button type="button" class="btn btn-primary"> Restaurer</button></td>
                            </tr>
                            <tr>
                                
                            <td>Abraha konanny</td>
                            <td>abrahamkonany@gmail.com</td>
                            <td>+225 0141822918</td>
                             <td><button type="button" class="btn btn-primary"> Restaurer</button></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
import "../assets/css/messages.css"
import Fil from "./fil"



export default function Message() {
    return(

        <>
                <Fil />
            <div className="cardMessage">
                <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-body col-sm-7 mx-auto messageTelephone">
                            <div className="telephontEcran">
                                <div className="telephoneEntete">
                                    <div className="telephoneRond">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className="telephoneMilieu">
                                    <h4>Nouvelle diffusion</h4>
                                    <label htmlFor="">Nom de la diffusion</label>
                                    <input type="text" placeholder="Promo Nan 6.23"/>
                                    <label htmlFor="">Public ciblé</label>
                                    <select name="" id="">
                                        <option value="">sélectionner un public</option>
                                        <option value="">Teams Privés <i class="fa-solid fa-message"></i><i class="fa-solid fa-envelope"></i><i class="fa-brands fa-whatsapp"></i></option>
                                        <option value="">Javascript teams</option>
                                        <option value="">Python teams</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body mt-5">

                            <div className="card-body col-sm-6 mt-5 filcard">
                                <h6>MODULE DE DIFFUSION</h6>
                                <h3>Messages en masse,</h3>
                                <h3><span>livré efficacement</span></h3>
                                <p>
                                    Diffusion de routine et urgente de newsletters, 
                                    de mises à jour d'événements, de diffusions d'urgence, 
                                    d'alertes de temps d'arrêt et bien plus encore.
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
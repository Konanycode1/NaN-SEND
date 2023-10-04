import React from 'react'
import "../automatisation/automatisation.css"
import {RxHamburgerMenu, RxTarget} from "react-icons/rx"
import {FaWhatsapp} from "react-icons/fa"
import { BiTimeFive} from "react-icons/bi"
import { AiOutlineCheck} from "react-icons/ai"

function Automatisation() {
  return (

    <div>
      <div className="colore">
    <div className="container">
        <div className="titre">
            <h1>Automatisation flexible via <span className="barre">NAN-SEND</span></h1>
        </div>

        <div className="boton">
            <button className='etpe'>Design</button>

            <button className='etpe1'>Route Message</button>

            <button className='etpe1'>Qualification</button>

            <button className='etpe1'>Processus Interne</button>

            <button className='etpe1'>Action Externe</button>

            <button className='etpe1'>Compagnie</button>

            <button className='etpe1'>Requis</button>
        </div>


        <div className="flex">
        <div className="flex1">
                <p>Conversation <br/> debut</p>
                
                <div className="ball">
                    <div className="bull">
                    
                    </div>
                    <div className="tracer"></div>
                </div>
                
            </div>

            <div className="flex1">
                <p>Menu
 <br/> Canals</p>
                
                <div className="ball">
                    <div className="bull">
                    <RxHamburgerMenu className="icon"/>
                    </div>
                    <div className="tracer"></div>
                </div>
                
            </div>

            <div className="flex1">
                <p>Canal
 <br/> selectionné</p>
                
                <div className="ball">
                    <div className="bull">
                    <FaWhatsapp className="icon"/>
                    </div>
                    <div className="tracer"></div>
                </div>
                
            </div>

            <div className="flex1">
                <p>tagget 
 <br/> d'intérêt</p>
                
                <div className="ball">
                    <div className="bull">
                    <RxTarget className="icon"/>
                    </div>
                    <div className="tracer"></div>
                </div>
                
            </div>

            <div className="flex1">
                <p><br /> <br />  </p>
                
                <div className="ball">
                    <div className="bulle">
                        <BiTimeFive className="icon"/>
                    </div>
                    <div className="tracer"></div>
                </div>
                
            </div>

            <div className="flex1">
                <p>Conversation <br/> fermé</p>
                
                <div className="ball">
                    <div className="bull">
                    <AiOutlineCheck className="icon"/>
                    </div>
                    
                </div>
                
            </div>



<div className="chat">
    <h4>Message Chat</h4>
    <div className="texto">
        <p>Créez une expérience client de haute
 qualité avec des menus de discussion
 polyvalents. Invitez vos contacts à explorer
 des produits et services et marquez
 leurs intérêts pour une utilisation
 future dans des listes de prospects,
 des diffusions marketing ou des 
campagnes goutte à goutte.</p>
    </div>
    <div className='trai'></div>
{/* <div className='trai'></div>
<div className='trai'></div> */}
</div>


        </div>
    </div>
</div>

{/* DEUXIEME PARTIE */}

<div className="supervisor">
    <div className="separe">
        <div className="carre"></div>
        <div className="carre"></div>
    </div>

    <div className='tire'>
        <h1>Tableau de bord <span className="barre">du superviseur</span></h1>
        <br /> 
        <div className="loi">
        <div className="par">
            <p>Un tableau de bord quotidien permettant aux managers 
de détecter en un coup d'œil les anomalies des 
conversations ou des agents. Identifiez les conversations 
en attente ou non résolues depuis trop longtemps et 
surveillez les performances et la charge de travail 
des agents en temps réel.</p>
        </div>
        </div>
    </div>

    <div className="separe">
        <div className="carre"></div>
        <div className="carre"></div>
    </div>
</div>


{/* TROISIEME PARTIE */}
<div className="send">
    <div className="container">
        
    </div>
</div>
    </div>
  )
}

export default Automatisation
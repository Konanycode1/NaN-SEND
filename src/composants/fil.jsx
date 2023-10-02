import "../assets/css/fil.css"
import images from "../assets/images/whatsapp1.png"



export default function Fil() {
    return(
        <>
            <div className="cardFils">
                <div class="row">
                <div class="col-sm-8 mb-3 mb-sm-0">
                    <div class="card filcardbody">
                        <div class="card-body">
                            <h5 class="card-title">BOÎTE DE RÉCEPTION DES MESSAGES</h5>
                        </div>
                        <div class="card-body col-sm-6 mx-auto mt-5 filcard">
                            <h3>Un interlocuteur, <span>un fil</span></h3>
                            <p>Un témoignage client unique contenant chaque message, e-mail, chat Web et discussion interne. </p>
                            <p>Toutes les fonctionnalités que vous attendez et certaines que vous ne trouverez nulle part ailleurs.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 ">
                    <div class="card cardFilImg">
                    <div class="card-body ">
                        <img src={images} alt="" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
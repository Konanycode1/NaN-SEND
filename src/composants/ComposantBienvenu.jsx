import React from "react";
import "../assets/css/ComposantBienvenu.css";
import Register from "../assets/css/Register";
import { Link } from "react-router-dom";
import Login from "../assets/css/Login";
import { GrValidate } from "react-icons/gr";
import imagEcobanck from "../assets/images/ecobank.jpeg";
import imagOrange from "../assets/images/Orange-Couleur.jpeg";
import imagMtn from "../assets/images/MTN-Logo.png";
import imagMoov from "../assets/images/moov-africa.jpeg";
import imagAtlantic from "../assets/images/atlantic.png";
import imagCIE from "../assets/images/Logo_CIE.jpeg";
import imagNaN from "../assets/images/NaN.png";
import imagUba from "../assets/images/uba.jpeg";

function ComposantBienvenu() {
  return (
    <>
      <div className="article">
        <div className="partieBienvenu">
          <div className="bienvenu1">
            <h2>
              Se retrouver, échanger et discuter avec la principale plateforme
              de messagerie <span className="spanNan">NaN-SEND</span>
            </h2>
            <div className="bienvenu2">
              <h4>
                Une plateforme de messagerie professionnelle qui unifie la
                communication client pour les organisations à la pointe de la
                technologie et prennent en charge via la messagerie instantanée,
                le chat Web et le courrier électronique.
              </h4>
            </div>
          </div>
          <div className="btn-part">
            <button className="button type1">
              <span className="btn-txt">
                <Link to="/Register" className="btnblanche">
                  S'inscrire gratuitement
                </Link>
              </span>
            </button>
            <button className="button2">
              <Link to="/Login" className="btncouleur">
                Se Connecter
              </Link>
            </button>
          </div>
          <div className="noterBien">
            <span className="iconValidate">
              <GrValidate />
            </span>
            <p>Pas de carte de crédit nécessaire</p>
            <span className="iconValidate">
              <GrValidate />
            </span>
            <p>Sécurité garantie</p>
          </div>
        </div>
        <div className="partieSlid"></div>
      </div>
      <div className="titleCentral">
        <h3>CONFIANCE PAR +10 000 ENTREPRISES</h3>
        <div className="logo-patenaire">
          <img src={imagEcobanck} alt="" />
          <img src={imagOrange} alt="" />
          <img src={imagMtn} alt="" />
          <img src={imagMoov} alt="" />
          <img src={imagAtlantic} alt="" />
          <img src={imagCIE} alt="" />
          <img src={imagNaN} alt="" />
          <img src={imagUba} alt="" />
        </div>
      </div>
      <div className="apropos">
        <h1>
          Une plateforme de messagerie unique pour l’envoie de vous messages{" "}
          <br />
          groupés, entre entreprises ou organisations
        </h1>
        <h3>
          Plus besoin de jongler entre les équipes et les plateformes. Un
          ensemble de chaînes, une plateforme.
        </h3>
        <div className="ligne-cardre">
          <div className="ligne-cardre1">
            <div className="cardre-photo"></div>
            <div className="cardre-descrip">
              <h2>MESSAGE GROUPE</h2>
              <h4>
                Avec NAN-SEND vous pouvez envoyer des message à un groupe de
                personnes sans toute fois avoir a ecrire plusieurs fois le
                message
              </h4>
            </div>
          </div>
          <div className="ligne-cardre1">
            <div className="cardre-photo"></div>
            <div className="cardre-descrip"></div>
          </div>
          <div className="ligne-cardre1">
            <div className="cardre-photo"></div>
            <div className="cardre-descrip"></div>
          </div>
          <div className="ligne-cardre1">
            <div className="cardre-photo"></div>
            <div className="cardre-descrip"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ComposantBienvenu;

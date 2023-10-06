import "./../assets/css/connexion.css";
import google from "./../assets/images/goog.png";

function Connexion() {
  return (
    <>
      <form className="">
        <div className="text">
          <h3>Formulaire de connexion</h3>
          <button className="google">
            <img src={google} alt="" />
            <p>connecter-vous avec votre compte Coogle </p>
          </button>
          <div className="content__or-text">
            <span></span>
            <span>Ou</span>
            <span></span>
          </div>
          <label htmlFor="">Adresse Email</label>
          <br />
          <input type="text" />
          <br />
          <label htmlFor="">Mot De Passe</label>
          <br />
          <input type="text" />
          <br />
          <button type="submit" className="connexion">
            Connexion
          </button>
        </div>
      </form>
    </>
  );
}

export default Connexion;

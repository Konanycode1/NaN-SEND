import "./../composants/form.css";

function Formulaire() {
  return (
    <>
      <div className="Formulaire container">
        <div className="form">
          <div className="code">
            <label htmlFor="name" style={{ color: "#6870e0" }}>
              Créons votre organisation, XXXXXXXXXXXX !
            </label>
            <input
              required=""
              autoComplete="off"
              type="text"
              placeholder="********************"
            />
          </div>

          <div className="input">
            <p htmlFor="email" style={{ color: "#6870e0" }}>
              Complétez vos coordonnées pour commencer.
            </p>
          </div>
          <section className="cadre">
            <div className="input">
              <input
                required=""
                autoComplete="off"
                type="text"
                style={{ width: "70%" }}
              />
              <label htmlFor="name">Nom</label>
            </div>
            <div className="input">
              <input
                required=""
                autoComplete="off"
                type="text"
                style={{ width: "70%" }}
              />
              <label htmlFor="name">Site web</label>
            </div>
            <div className="input">
              <input
                required=""
                autoComplete="off"
                type="number"
                style={{ width: "70%" }}
              />
              <label htmlFor="name">Numéro de téléphone</label>
            </div>
            <div className="input">
              <input
                required=""
                autoComplete="off"
                type="number"
                style={{ width: "70%" }}
              />
              <label htmlFor="name">Taille</label>
            </div>
            <div className="input">
              <input
                required=""
                autoComplete="off"
                type="text"
                style={{ width: "70%" }}
              />
              <label htmlFor="name">Industrie</label>
            </div>
            <div className="input">
              <input
                required=""
                autoComplete="off"
                type="text"
                style={{ width: "70%" }}
              />
              <label htmlFor="name">Role</label>
              <button>Etape suivante →</button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default Formulaire;

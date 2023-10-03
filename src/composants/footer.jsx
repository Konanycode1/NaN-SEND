import "./../assets/css/footer.css";

function Footer() {
  return (
    <>
      <div className="container-fluid my-10">
        <footer className="text-center text text-white">
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
              laborum qui autem quaerat totam neque a id quisquam rem vel iusto,
              nemo possimus, maiores odit molestiae maxime explicabo itaque
              fugit.
            </p>
          </div>
          <hr className="container my-5" />
          <div className="container-fluid p-10 pb-0">
            <section>
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6>
                    NAN_<span>SEND</span>
                  </h6>
                  <img src="" alt="" />
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6>Apropos</h6>
                  <p>
                    <a style={{ color: "white" }}>Blog</a>
                  </p>
                  <p>
                    <a style={{ color: "white" }}>carrière</a>
                  </p>
                  <p>
                    <a style={{ color: "white" }}>À propos de nous </a>
                  </p>
                  <p>
                    <a style={{ color: "white" }}>Feuille de routeAffiliés</a>
                  </p>
                  <p>
                    <a style={{ color: "white" }}>Programme de partenariat </a>
                  </p>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6>Support</h6>
                  <p>
                    <a style={{ color: "white" }}>Accueil</a>
                  </p>
                  <p>
                    <a style={{ color: "white" }}>A propos</a>
                  </p>
                  <p>
                    <a style={{ color: "white" }}>Services</a>
                  </p>
                  <p>
                    <a style={{ color: "white" }}>Contacts</a>
                  </p>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6>WhatsApp Guides</h6>
                  <p>
                    <a style={{ color: "white" }}>Entreprise WhatsApp</a>
                  </p>
                  <p>
                    <a style={{ color: "white" }}>API WhatsApp</a>
                  </p>
                  <p>
                    <a style={{ color: "white" }}>Tarifs API WhatsApp</a>
                  </p>
                  <p>
                    <a style={{ color: "white" }}>
                      WhatsApp plusieurs utilisateurs
                    </a>
                  </p>
                  <p>
                    <a style={{ color: "white" }}>WhatsApp CRM</a>
                  </p>
                  <p>
                    <a style={{ color: "white" }}>Diffusion WhatsApp</a>
                  </p>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6>Bulletin</h6>
                  <p>
                    <i className="fas fa-home mr-3"></i> New York, NY 10012, US
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> info@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> + 01 234 567 89
                  </p>
                </div>
              </div>
            </section>

            <hr className="container my-3" />

            <section className="p-3 pt-0">
              <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-8 text-center text-md-start">
                  <div className="p-3">
                    © 2023 NaN_Send
                    <a style={{ color: "white" }} href=""></a>
                  </div>
                </div>
                <div className="col-md- col-lg-4 ml-lg-0 text-center text-md-end">
                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    style={{ color: "white" }}
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    style={{ color: "white" }}
                    role="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    style={{ color: "red" }}
                    role="button"
                  >
                    <i className="fab fa-google"></i>
                  </a>
                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    style={{ color: "white" }}
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </>
  );
}
export default Footer;

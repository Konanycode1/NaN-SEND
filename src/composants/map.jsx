import "./../assets/css/map.css";
function Map() {
  return (
    <>
      <div id="frame">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.093516214048!2d-3.966303815471035!3d5.402723021204745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc19316175b8f2b%3A0xf1efa3cf6347ba24!2sPharmacie%20Analya!5e0!3m2!1sfr!2sci!4v1696264972412!5m2!1sfr!2sci"
          width="90%"
          style={{ height: "70vh", margin: "4vw" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <div className="contact">

        </div>
      </div>
    </>
  );
}

export default Map;

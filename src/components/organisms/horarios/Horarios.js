import React from "react";
import "./Horarios.scss";

// import PalabraHorarios from "img/palabras/horarios.svg";
import PalabraEncuentranos from "img/palabras/encuentranos.svg"
import PalabraBoulevard from "img/palabras/boulevard-amarillo.svg";
import PalabraMercadoTlaque from "img/palabras/mercado-tlaque-amarillo.svg";
import Encuentranos from "../encuentranos/Encuentranos";

const Horarios = () => {
  return (
    <section className="container schedules" id="horario">
      <div>
        <div className="title">
          <PalabraEncuentranos />
          {/* <PalabraHorarios /> */}
        </div>

        <div className="location">
          <div className="subtitle">
            <PalabraBoulevard />
          </div>
          <div>
            <p>Lunes a Domingo</p>
            <p>8:00 - 22:00 hrs.</p>
          </div>
          <div className="link-container">
            <a
              href="https://www.google.com/maps/place/GORDELICIAS/@20.6427162,-103.3204838,17z/data=!3m1!4b1!4m5!3m4!1s0x8428b249f5c4fcdb:0xf2a6785977b543af!8m2!3d20.6427162!4d-103.3182951"
              target="noopener"
            >
              Ver ubicación
            </a>
          </div>
          <Encuentranos
            className="google-maps"
            googleMapsURL="https://maps.google.com/maps?q=GORDELICIAS%2C+Boulevard+General+Marcelino+Garc%C3%ADa+Barrag%C3%A1n&t=&z=15&ie=UTF8&iwloc=&output=embed"
          />
        </div>
        <div className="location">
          <div className="subtitle mercado">
            <PalabraMercadoTlaque />
          </div>
          <div>
            <p>Lunes a Domingo</p>
            <p>8:00 - 14:00 hrs.</p>
          </div>
          <div className="link-container">
            <a
              href="https://www.google.com/maps/place/Gordelicias+Mercado+Tlaquepaque/@20.6397113,-103.3132085,17z/data=!4m5!3m4!1s0x8428b3b49f50c3a1:0x388a54e52a70453f!8m2!3d20.6397113!4d-103.3110198"
              target="noopener"
            >
              Ver ubicación
            </a>
          </div>
          <Encuentranos
            className="google-maps"
            googleMapsURL="https://maps.google.com/maps?q=Gordelicias+Mercado+Tlaquepaque&t=&z=15&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </div>
    </section>
  );
};
export default Horarios;

import React from "react";
import "./Horarios.scss";
const Horarios = () => {
  return (
    <section className="container schedules">
      <div>
        <div className="title">Horarios</div>
        <div className="grid">
          <div>
            <div className="subtitle">Boulevard</div>
            <p>Lunes a Domingo</p>
            <p>8:00 - 22:00 hrs.</p>
          </div>
          <div>
            <div className="subtitle">Mercado Tlaquepaque</div>
            <p>Lunes a Domingo</p>
            <p>8:00 - 14:00 hrs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Horarios;

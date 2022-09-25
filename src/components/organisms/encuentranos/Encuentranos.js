import React from "react";
import "./Encuentranos.scss";
const Encuentranos = () => {
  return (
    <section className="container find-us">
      <div>
        <div className="title">Encuentranos</div>
        <div className="mapouter">
          <iframe
            src="https://maps.google.com/maps?q=GORDELICIAS%2C+Boulevard+General+Marcelino+Garc%C3%ADa+Barrag%C3%A1n&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default Encuentranos;

import React from "react";
import "./Encuentranos.scss";

const Encuentranos = ({ googleMapsURL, className }) => {
  return (
    <div className={`find-us mapouter ${className}`}>
      <iframe
        src={googleMapsURL}
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
      />
    </div>
  );
};
export default Encuentranos;

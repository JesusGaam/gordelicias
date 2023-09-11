import React, { useState } from "react";
import "./OrdenaAqui.scss";

import PensandoGordear from "img/pensando-gordear.svg";
import MotoNelaAnimation from "@/components/molecules/youtubePlayer/motoNelaAnimation/MotoNelaAnimation";
import StickyScrollPanel from "@/components/organisms/StickyScrollPanel/StickyScrollPanel";

const OrdenaAqui = () => {
  const [nelaAnimation, setNelaAnimation] = useState({
    transform: "translateX(0)",
  });
  const [reverse, setReverse] = useState(false);

  const onScrollProcess = (scrollProcess, isScrollDown) => {
    let translate = scrollProcess;
    let transitionDuration = "0ms";
    setReverse(!isScrollDown);

    if (isScrollDown) {
      if (scrollProcess <= 40) {
        translate = 40;
        transitionDuration = "1000ms";
      } else if (scrollProcess >= 80) {
        translate = 200;
        transitionDuration = "1500ms";
      }
    } else {
      if (scrollProcess <= 40) {
        translate = 0;
        transitionDuration = "1000ms";
      } else if (scrollProcess >= 80) {
        translate = 80;
        transitionDuration = "1000ms";
      }
    }

    setNelaAnimation({
      transform: `translateX(${translate * -1}vw)`,
      transitionDuration,
    });
  };

  return (
    <>
      <div className="container order-here">
        <StickyScrollPanel onScrollProcess={onScrollProcess} height={"100vh"}>
          <PensandoGordear className="gordear-text" />
          <MotoNelaAnimation nelaAnimation={nelaAnimation} reverse={reverse} />
        </StickyScrollPanel>
        <p style={{ marginTop: "20px" }}>
          Ordena en linea y tenlas pronto en tus manos..
        </p>
        <div className="link-container">
          <a href={process.env.URL_ONLINE_ORDER} target="_blank">
            ¡ORDENA AQUÍ!
          </a>
        </div>
      </div>
    </>
  );
};
export default OrdenaAqui;

import React, { useState } from "react";
import "./OrdenaAqui.scss";

import PensandoGordear from "img/pensando-gordear.svg";
import MotoNelaAnimation from "@/components/molecules/youtubePlayer/motoNelaAnimation/MotoNelaAnimation";
import ScrollPanel from "@/components/organisms/scrollPanel/ScrollPanel";

const OrdenaAqui = () => {
  const [nelaAnimation, setNelaAnimation] = useState({
    transform: "translateX(0)",
  });
  const [reverse, setReverse] = useState(false);

  const onScrollProcess = (scrollProcess, isScrollDown) => {
    let translate = scrollProcess;
    let transitionDuration = "0ms";
    setReverse(!isScrollDown);

    if (isScrollDown && scrollProcess <= 40) {
      translate = 40;
      transitionDuration = "1000ms";
    } else if (isScrollDown && scrollProcess >= 80) {
      translate = 200;
      transitionDuration = "1500ms";

    } else if (!isScrollDown && scrollProcess <= 40) {
      translate = 0;
      transitionDuration = "1000ms";
    } else if (!isScrollDown && scrollProcess >= 80) {
      translate = 80;
      transitionDuration = "1500ms";
    }

    setNelaAnimation({
      transform: `translateX(${translate * -1}vw)`,
      transitionDuration,
    });
  };

  return (
    <>
      <div className="container order-here">
        <ScrollPanel onScrollProcess={onScrollProcess} height={"150vh"}>
          <PensandoGordear className="gordear-text" />
          <MotoNelaAnimation nelaAnimation={nelaAnimation} reverse ={reverse}/>
        </ScrollPanel>
        <p style={{ marginTop: "20px" }}>
          Ordena en linea y tenlas pronto en tus manos..
        </p>
        <div className="link-container">
          <a href="https://order.foodbot.ai/gordelicias" target="_blank">
            ¡ORDENA AQUÍ!
          </a>
        </div>
      </div>
    </>
  );
};
export default OrdenaAqui;

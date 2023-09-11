import React, { useRef, useState, useEffect } from "react";
import "./StickyScrollPanel.scss";

import { getPosition, ceil } from "@/utils/Utilities";

const StickyScrollPanel = ({
  children,
  height = 0,
  onScrollProcess = (_scrollProcess, _isScrollDown) => {},
}) => {
  const navbarHeight = 84;
  const scrollPanel = useRef();

  const [beforeScroll, setBeforeScroll] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [scrollProcess, setScrollProcess] = useState(0);
  const [isScrollDown, setIsScrollDown] = useState(false);

  useEffect(() => {
    getWindowDimensions();
    window.addEventListener("resize", getWindowDimensions);
    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("resize", getWindowDimensions);
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  useEffect(() => {
    onScrollProcess(scrollProcess, isScrollDown);
  }, [scrollProcess]);

  useEffect(() => {
    setIsScrollDown(currentScroll > beforeScroll);
    defineScrollProcess();
    setBeforeScroll(currentScroll);
  }, [currentScroll]);

  const getWindowDimensions = () => {
    var sticky = scrollPanel.current.querySelector(".sticky");
    var panel = scrollPanel.current.querySelector(".panel");

    const heightPanel = window.innerHeight - navbarHeight;
    const widthPanel = sticky.offsetWidth;

    //En mobile cabia el alto cuando mueves el scrool porque aparece la barra de navagación
    if (
      widthPanel == panel.style.width.replace("px", "") &&
      heightPanel !== panel.style.height.replace("px", "")
    ) {
      return false;
    }

    scrollPanel.current.style.height =
      height > 0 ? height : heightPanel * 5 + "px";

    panel.style.width = widthPanel + "px";
    panel.style.height = heightPanel + "px";
  };

  const defineScrollProcess = () => {
    var container = scrollPanel.current;
    var topContainer = getPosition(container).top + navbarHeight;
    var heightContainer = parseInt(container.style.height);
    var scroll = currentScroll + navbarHeight;

    if (scroll >= topContainer && scroll <= topContainer + heightContainer) {
      setScrollProcess(
        ceil(
          ((scroll - topContainer) / parseInt(container.style.height)) * 100,
          2
        )
      );
    }
  };

  const scrollEvent = (e) => {
    setCurrentScroll(window.scrollY);
  };

  return (
    <div ref={scrollPanel} className="sticky-scroll-panel">
      <div className="sticky">
        <div className="panel">{children}</div>
      </div>
    </div>
  );
};
export default StickyScrollPanel;

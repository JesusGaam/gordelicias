import React, { useRef, useState, useEffect } from "react";
import "./ScrollPanel.scss";

import { getPosition, ceil } from "@/utils/Utilities";

const ScrollPanel = ({
  children,
  className = "",
  onScrollProcess = (_scrollProcess, _isScrollDown) => {},
}) => {
  const navbarHeight = 84;
  const scrollPanel = useRef();

  const [beforeScroll, setBeforeScroll] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [scrollProcess, setScrollProcess] = useState(0);
  const [isScrollDown, setIsScrollDown] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);

    return () => {
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

  const defineScrollProcess = () => {
    var container = scrollPanel.current;
    var topContainer = getPosition(container).top + navbarHeight;
    var heightContainer = container.offsetHeight;
    var scroll = currentScroll + navbarHeight;

    if (scroll >= topContainer && scroll <= topContainer + heightContainer) {
      setScrollProcess(
        ceil(
          ((scroll - topContainer) / parseInt(container.offsetHeight)) * 100,
          2
        )
      );
    }
  };

  const scrollEvent = (e) => {
    setCurrentScroll(window.scrollY);
  };

  return (
    <div ref={scrollPanel} className="scroll-panel">
      <div className={`panel ${className}`}>{children}</div>
    </div>
  );
};
export default ScrollPanel;

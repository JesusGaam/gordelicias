import React, { useEffect, useRef, useState } from 'react'
import styles from "./InstagramGrid.module.scss"

import image1 from "img/instagram/burritos.jpg"
import image2 from "img/instagram/burros-agua.jpg"
import image3 from "img/instagram/gordita-mano.jpg"
import image4 from "img/instagram/gorditas-plato.jpg"
import image5 from "img/instagram/sirviendo-gordita.jpg"
import image6 from "img/instagram/agua-jamaica.jpg"

const InstagramGrid = () => {
  const card = useRef();
  const grid = useRef();

  const [cardWidth, setCardWidth] = useState(0);
  const [rowNumber, setRowNumber] = useState(0);

  const handleResize = () => {
    const cardWidth = card?.current.offsetWidth;
    const gridWidth = grid?.current.offsetWidth;

    setCardWidth(cardWidth);
    setRowNumber(Math.ceil(6 / parseInt(gridWidth / cardWidth)))
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <section className={`container ${styles.instagramWrapper}`} >
      <div className={styles.grid} ref={grid} style={{ gridTemplateRows: `repeat(${rowNumber}, ${cardWidth}px)` }}>
        <a href="https://www.instagram.com/gordeliciasgdloficial/" target="noopener" className={styles.card} ref={card}>
          <img src={image5} alt="instagram image" />
        </a>
        <a href="https://www.instagram.com/gordeliciasgdloficial/" target="noopener" className={styles.card}>
          <img src={image3} alt="instagram image" />
        </a>
        <a href="https://www.instagram.com/gordeliciasgdloficial/" target="noopener" className={styles.card}>
          <img src={image2} alt="instagram image" />
        </a>
        <a href="https://www.instagram.com/gordeliciasgdloficial/" target="noopener" className={styles.card}>
          <img src={image4} alt="instagram image" />
        </a>
        <a href="https://www.instagram.com/gordeliciasgdloficial/" target="noopener" className={styles.card}>
          <img src={image1} alt="instagram image" />
        </a>
        <a href="https://www.instagram.com/gordeliciasgdloficial/" target="noopener" className={styles.card}>
          <img src={image6} alt="instagram image" />
        </a>
      </div>
    </section>
  )
}

export default InstagramGrid
import React from "react";
import styles from "./HomeImg.module.css";

const HomeImg = () => {
  return (
    <div className={styles.generalContainer}>
      <div className={styles.imgContainer}>
        <img
          src="https://statics.forbesuruguay.com/2023/02/crop/63f766e1c666c__980x549.webp"
          alt="Nvidia"
          className={styles.image}
        />
        <div className={styles.infoContainer}>
          <div className={styles.title}>
            <h4>Nvidia</h4>
          </div>
          <div className={styles.info}>
            <p>
              Nvidia Corporation es una empresa de software y fabless que diseña
              unidades de procesamiento de gráficos (GPU), interfaz de
              programación de aplicaciones (API) para ciencia de datos y
              computación de alto rendimiento, así como unidades de sistema en
              chip (SoC) para la computación móvil y el mercado automotriz.
              Nvidia es líder mundial en hardware y software de inteligencia
              artificial. Su línea profesional de GPU se utiliza en estaciones
              de trabajo para aplicaciones en campos como arquitectura,
              ingeniería y construcción, medios y entretenimiento, automoción,
              investigación científica y diseño de fabricación.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeImg;

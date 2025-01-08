"use client";
import React from "react";
import styles from "./Video.module.css";

const Video = () => {
  return (
    <div className={styles.videoContainer}>
      {/* Video de YouTube con iframe */}
      <div className={styles.video}>
        <iframe
          key="youtube-video"
          src="https://www.youtube.com/embed/3Pa5rz1bZ9Q?si=gMzOXecfiWtUZcHx&autoplay=1&mute=1&loop=1&playlist=3Pa5rz1bZ9Q"
          title="Entrevista Exclusiva"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onError={() => console.error("El video no se pudo cargar.")}
        ></iframe>
      </div>

      {/* Contenido del video */}
      <div className={styles.texto}>
        <h1>Entrevista Exclusiva</h1>
        <p>Disfruta de esta charla única</p>
      </div>
    </div>
  );
};

export default Video;

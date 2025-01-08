"use client";
import React from "react";
import { SiLinkedin, SiYoutube, SiInstagram } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiSolidStore } from "react-icons/bi";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Link href={`/`}>
            <BiSolidStore className={styles.store} />
          </Link>
            
          <div className={styles.logoGeneral}>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter className={styles.twitter} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram className={styles.instagram} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiYoutube className={styles.youtube} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin className={styles.linkedin} />
            </a>
          </div>
        </div>

        <div className={styles.listasContainer}>
          <div className={styles.listas}>
            <p>SOPORTE</p>
            <ul>
              <li>Garantias</li>
              <li>Preguntas Frecuentes</li>
              <li>Seguir mi pedido</li>
              <li>Unite a nuestro equipo</li>
            </ul>
          </div>
          <div className={styles.listas}>
            <p>BOTÓN DE ARREPENTIMIENTO</p>
            <a href="https://buenosaires.gob.ar/gobierno/atencion-ciudadana/defensa-al-consumidor">
              Conocé tus derechos
            </a>
          </div>
          <div className={styles.listas}>
            <p>PARTNERS</p>
            <ul>
              <li>Intel</li>
              <li>AMD</li>
              <li>Nvidia</li>
              <li>Asus</li>
              <li>Samsung</li>
              <li>Kingston</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

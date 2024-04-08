import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className=" px-4">
      <div
        className={`container d-flex justify-content-center align-items-center  ${styles.box}`}
      >
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className={`col-lg-8 col-md-12 col-sm-12 ${styles.col8}`}>
                <h1 className={`mb-3 ${styles.heroh1}`}>Get Started With Us</h1>
                <p className={`mb-3 ${styles.herop}`}>
                  Your ceremony & reception venues, your vision, your dress, your
                  colors, and anything else you would like to share with us.{" "}
                </p>
                <div className={`${styles.centerbtn}`}>
                <button className={`mb-3 ${styles.herobtn}`}>
                  <h1 className={styles.herobtntext}>Get in Touch</h1>
                  <div className="btnicon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <circle
                        cx="15"
                        cy="15"
                        r="15"
                        fill="black"
                        fill-opacity="0.5"
                      />
                      <path d="M12 9L13.5 10.5L18 15L12 21" stroke="white" />
                    </svg>
                  </div>
                </button>
                </div>
                
              </div>
              <div className="col-lg-4 d-none d-lg-block">
                <img className={styles.boytoy} src="./img/Youngboy.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`container text-center ${styles.footer1}`}>
        <div className="row">
          <div className="col-md-6">
            <p className={`${styles.footer}`}>ZOKA © 2022. Crafted by YEV YEV ❤️</p>
          </div>
          <div className="col-md-6">
            <ul className={`${styles.footer}`}>
              <li>Home</li>
              <li>Pages</li>
              <li>Photography</li>
              <li>Photoshoots</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

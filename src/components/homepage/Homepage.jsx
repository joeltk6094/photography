import React from "react";
import styles from "./Homepage.module.css";
const Homepage = () => {
  return (
    <div>
      <div className={styles.navbox}>
        <div className="container">
          <nav className="navbar">
            <h1 className={styles.logo}> ZOKA</h1>
            <div className=" d-none  d-lg-block">
              <div className={styles.navitems}>
                <a className={styles.navbarbrand} href="#">
                  Home
                </a>
                <a className={styles.navbarbrand} href="#">
                  Pages
                </a>
                <a className={styles.navbarbrand} href="#">
                  Photography
                </a>
                <a className={styles.navbarbrand} href="#">
                  Photostoots
                </a>
              </div>
            </div>

            <button className={styles.Navbutton}>
              <h1 className={styles.logobtn}> Youtube</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="30"
                viewBox="0 0 25 30"
                fill="none"
              >
                <path
                  d="M24 13.268C25.3333 14.0378 25.3333 15.9622 24 16.732L3 28.8564C1.66666 29.6262 0 28.664 0 27.1244L0 2.87564C0 1.33604 1.66667 0.373793 3 1.14359L24 13.268Z"
                  fill="#3F41A6"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
      ''
      <div className="container">
        <div className="row ">
          <div className="col-lg-5 col-md-12 ">
            <h1
              className={`${styles.herotext} display-1 display-md-2 mt-3 display-lg-3 display-xl-4`}
            >
              Where creative process happens
            </h1>

            <p className={` mt-3  ${styles.herop}`}>
              Your creativity, our inspiration Whatever your story, set if free.
            </p>
            <button className={` mt-3  ${styles.herobtn}`}>
              <h1 className={styles.herobtntext}>Get in Touch</h1>
            </button>
          </div>

          <div className="col-lg-7 col-md-12  ">
            <div className={`${styles.boxhero}`}>
              <div>
                <img
                  src="/img/unsplash_6Io0psUdasY.png"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div className={styles.boxhero2}>
                <img
                  src="/img/unsplash_8nXKXYdO-Wk.png"
                  alt=""
                  class="img-fluid "
                />
                <img
                  src="/img/unsplash_SZtLK_W7vKo.png"
                  alt=""
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

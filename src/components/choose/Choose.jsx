import React from "react";
import styles from "./Choose.module.css";

const Choose = () => {
  return (
    <div className={styles.body}>
      <h1 className={` text-center  ${styles.heroh1}`}>Why Choose us</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-4  col-md-6 col-sm-12 d-flex flex-column align-items-center">
            <div className={`text-center mb-3 ${styles.circle}`}>
              <img
                src="./img/Photo Gallery.png"
                alt=""
                className={styles.centeredImage}
              />
            </div>
            <h2 className={`text-center mb-3 ${styles.heroh2}`}>
              Professional editing
            </h2>
            <p className={`mb-3 ${styles.herop}`}>
              Your creativity our inspiration. <br></br> Whatever you want.
            </p>
          </div>

          <div className="col-lg-4   col-md-6 col-sm-12 d-flex flex-column align-items-center">
            <div className={`text-center mb-3 ${styles.circle}`}>
              <img
                src="./img/My Location.png"
                alt=""
                className={styles.centeredImage}
              />
            </div>
            <h2 className={`text-center mb-3 ${styles.heroh2}`}>
              Long hour shoots
            </h2>
            <p className={`mb-3 ${styles.herop}`}>
              Your creativity our inspiration. <br></br>
              Whate ever your want
            </p>
          </div>

          <div className="col-lg-4   col-md-6 col-sm-12 d-flex flex-column align-items-center">
            <div className={`text-center mb-3 ${styles.circle}`}>
              <img
                src="./img/Camera.png"
                alt=""
                className={styles.centeredImage}
              />
            </div>
            <h2 className={`text-center mb-3 ${styles.heroh2}`}>
              Extensive equipment
            </h2>
            <p className={`mb-3 ${styles.herop}`}>
              Your creativity our inspiration. <br></br>
              Whate ever your want
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;

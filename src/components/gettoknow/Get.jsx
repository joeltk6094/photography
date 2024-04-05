import React from "react";
import styles from "./Get.module.css";
import { headers } from "next/headers";

const Get = () => {
  return (
    <div className={styles.headers}>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6  col-md-12 ">
              <div className={styles.tree1}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className={styles.tree2}>
                      <img className={styles.t1} src="./img/t1.png" alt="" />
                      <img className={styles.t2} src="./img/t2.png" alt="" />
                      <img className={styles.t3} src="./img/t3.png" alt="" />
                      <img className={styles.t4} src="./img/t4.png" alt="" />
                    </div>
                  </div>
                  <div className="col-6">
                    {" "}
                    <div>
                      <img
                        className={styles.t5}
                        src="./img/unsplash_X_IvVDuHvDQ.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <h2 className={styles.herotext}>GET TO KNOW US</h2>
              <h1 className={styles.heroh1}>
                Why we make it <br></br>happens
              </h1>
              <p className={`pb-4 ${styles.herop}`}>
                Your ceremony & reception venues, your vision, your dress, your
                colours and anything else you would like.
              </p>

              <button className={styles.herobtn}>
                <h1
                  className={` text-center align-content-center ${styles.herobtntext}`}
                >
                  Get in Touch
                </h1>
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
                      fill="#F9F9FC"
                      fill-opacity="0.35"
                    />
                    <path d="M12 9L13.5 10.5L18 15L12 21" stroke="white" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Get;

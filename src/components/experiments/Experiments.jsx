import React from "react";
import styles from "./Experiments.module.css";

const Experiments = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className={`col-lg-5   col-md-12 text-left ${styles.herobox}`}>
            <h1 className={` mb-3 ${styles.heroh1}`}>
              Experiments and personal projects.
            </h1>
            <p className={`${styles.herop}`}>
              Your ceremony & reception venues, your vision, your dress, your
              colours and anything else you would like to share with us. I am a
              Gold Coast and Brisbane.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.box}>
        <div className="row justify-content-center ">
          <div className={` col-lg-8 hidden-xs ${styles.herotext}`}>
            <div className="row justify-content-center ">
              <div className="col-4">
                <h1 className={styles.heroh1}>58+</h1>
                <p className={styles.herop}>Cute Customer</p>
              </div>
              <div className="col-4">
                <h1 className={styles.heroh1}>38+</h1>
                <p className={styles.herop}>Rewards</p>
              </div>
              <div className="col-4">
                <h1 className={styles.heroh1}>98+</h1>
                <p className={styles.herop}>Project Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={` container ${styles.sidebox}`}>
        <div className="row">
          <div className="col-6">
            <div className={styles.box2}>
              <div className={styles.tab}>
                <div className={styles.tab2}>
                  <img className=" rounded" src="./img/q1.png" alt="" />
                  <img className=" rounded" src="./img/q2.png" alt="" />
                  <img className=" rounded" src="./img/q3.png" alt="" />
                </div>
                <div className={styles.tab2}>
                  <img className=" rounded m-2 " src="./img/q4.png" alt="" />
                  <img className=" rounded  m-2" src="./img/q5.png" alt="" />
                  <img className=" rounded" src="./img/q6.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiments;

import React from "react";
import styles from "./Floral.module.css";

const Floral = () => {
  return (
    <div className={styles.body}>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 className={` mb-3    ${styles.heroh1}`}>
              {" "}
              Floral Design in a event planning company
            </h1>
            <p className={` mb-5 ${styles.herop}`}>
              Your ceremony & reception venues, your vision, your dress, your
              colours and anything else you would like to share with us. I am a
              Gold Coast and Brisbane.
            </p>
            <button className={styles.herobtn}>
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

      <div className={styles.body2}>
        <div className="container mt-5">
          <div className="row justify-content-between text-center mt-5 ">
            <div className={`col-lg-4 col-md-6 rounded ${styles.flower1}`}>
              <img  className="img-fluid " src="./img/flowe1.png" alt="" />
              <div class="d-flex align-items-baseline">
                <div class="h1 font-weight-bold">01</div>
                <div>/18</div>
              </div>
            </div>
            <div className={`col-lg-4 col-md-6 rounded ${styles.flower2}`}>
              <img  className="img-fluid " src="./img/flowe2.png" alt="" />
              <div class="d-flex align-items-baseline">
                <div class="h1 font-weight-bold">02</div>
                <div>/18</div>
              </div>
            </div>
            <div className={`col-lg-4 col-md-6 rounded ${styles.flower3}`}>
              <img  className="img-fluid "  src="./img/flowe3.png" alt="" />
              <div class="d-flex align-items-baseline">
                <div class="h1 font-weight-bold">03</div>
                <div>/18</div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="row">
        <div className="col-7">

        </div>
        <div className="col-lg-5 col-sm-12">
        <div className={styles.next}>
          <div className={styles.line}></div>

          <p className={styles.linep}>
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="9"
              viewBox="0 0 6 9"
              fill="none"
              className={styles.svgStyle}
            >
              <path d="M1 1L5 4.5L1 8" stroke="black" />
            </svg>
          </p>
        </div>
        </div>
      </div>

      
    </div>
  );
};

export default Floral;

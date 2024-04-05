import React from 'react'
import styles from "./Works.module.css";


const Works = () => {
  return (
    <div className={styles.body}>
    <div className="container">
        <div className="row">
            <div className="col-12 text-left">
                <h1 className={`${styles.heroh1}`}>Our Awesome Works</h1>
                <p className={`${styles.herop}`}>See what we shooted</p>
            </div>
        </div>
    </div>

    <div className="container">
    <div class="container mt-4">
        
        <div class="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
                <img
                    className="img-fluid "
                    src="./img/01.png"
                    alt="..."
                />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <img
                    className="img-fluid  mb-4"
                    src="./img/02.png"
                    alt="..."
                />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <img
                    className="img-fluid  mb-4"
                    src="./img/03.png"
                    alt="..."
                />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <img
                    className="img-fluid  mb-4"
                    src="./img/04.png"
                    alt="..."
                />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <img
                    className="img-fluid  mb-4"
                    src="./img/05.png"
                    alt="..."
                />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <img
                    className="img-fluid  mb-4"
                    src="./img/06.png"
                    alt="..."
                />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <img
                    className="img-fluid  mb-4"
                    src="./img/07.png"
                    alt="..."
                />
            </div><div className="col-sm-12 col-md-6 col-lg-4">
                <img
                    className="img-fluid  mb-4"
                    src="./img/08.png"
                    alt="..."
                />
            </div><div className="col-sm-12 col-md-6 col-lg-4">
                <img
                    className="img-fluid  mb-4"
                    src="./img/09.png"
                    alt="..."
                />
            </div>
        </div>
    </div>

    </div>

    </div>
  )
}

export default Works
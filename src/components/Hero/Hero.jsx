import React from "react";
import './Hero.css';
import MonImg from "../../assets/images/IMG_0649c.PNG";
import html from "../../assets/images/html-5.png";
import css from "../../assets/images/css-3.png";
import js from "../../assets/images/js.png";
import Relogo from "../../assets/images/logo192.png";
import Laravel from "../../assets/images/Laravel.png";
import Wordpress from "../../assets/images/wordpress.png"
import logo from "../../assets/images/logo.png"


function Hero() {
    return(
        <section className="Hero-container">
            <div className="Hero-content">
                <h2>KoffI <span>Aka Andre</span></h2>
                <p>
                    Etudiant en Informatique Developpeur d'Application (I.D.A) </p>
                    
               
            </div>

            <div className="Hero-img">
                <div className="MonImgContainer">
                    <img src={logo} alt="Chargement De Mon Image" />
                </div>
            

                <div className="tech">
                    <div className="tech-icon">
                        <img src={html} alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src={css} alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src={js} alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src={Relogo} alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src={Laravel} alt="" />
                    </div><div className="tech-icon">
                        <img src={Wordpress} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Hero;
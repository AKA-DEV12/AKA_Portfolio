import React from "react";
import './MobileNav.css';
import logo from "../../assets/images/logo.png";

function MobileNav({toggleMenu}) {
    return(
        <div>

            <div className="mobile-menu-container">
                <i className="Close"  onClick={toggleMenu}>✖️</i>
                <img className="logo" height='90px' width='90px' src={logo} alt="logo" />
                <ul>
                        <li className="menu-item"><a href="#">Accueil</a></li>
                        <li className="menu-item"><a href="#profil">Profil</a></li>
                        <li className="menu-item"><a href="#competence">Competence</a></li>
                        <li className="menu-item"><a href="#realisation">Realisation</a></li>
                </ul>
                <button className="btn-cv"><a href="/AKA_CV.pdf" download="AKA_CV.pdf">Telecharger Cv</a></button>
            </div>
        </div>
    )
}
export default MobileNav;

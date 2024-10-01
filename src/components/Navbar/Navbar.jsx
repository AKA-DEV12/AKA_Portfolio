import React, { useState, useEffect} from "react"
import './Navbar.css'
import logo from "../../assets/images/logo.png";
import MobileNav from "../MobileNav/MobileNav";




function Navbar() {
    const [menu,showMenu]= useState(false);
    const toggleMenu=()=>{
        showMenu(!menu);
    }
    return(
        <> 
        {menu &&(
           <MobileNav toggleMenu={toggleMenu} />         
                ) }
            


            <nav className="nav-wrapper">
               
                <div className="nav-content">
                    <img className="logo" height='90px' width='90px' src={logo} alt="logo" />
                    <ul>
                        <li className="menu-item"><a href="#">Accueil</a></li>
                        <li className="menu-item"><a href="#profil">Profil</a></li>
                        <li className="menu-item"><a href="#competence">Competence</a></li>
                        <li className="menu-item"><a href="#realisation">Realisation</a></li>
                        <li className="menu-item"><a href="#contact">Contact</a></li>
                    </ul>
                    <button className="btn-cv" ><a href="/AKA_CV.pdf" download="AKA_CV.pdf">Telecharger Cv</a></button>
                    
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span
                            className="fa-solid fa-bars"
                            ></span>
                            
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
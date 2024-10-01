import React from "react";
import './profil.css';
import MonImg from "../../assets/images/IMG_0649c-removebg-preview.png";

function Profil() {
    return(
        
        <section id="profil" className="font">
            <div className="conteneur">
                <div className="profil-img">
                        <img src={MonImg} alt="Mon_Img" />
                </div>
                <div className="profil-info">
                    <h2>A PROPOS DE <span>MOI</span></h2>

                    <div className="profil-info-text">
                        <p>
                            Niveau actuel BAC+2, admissibles au BTS session 2024, émerveiller par l'informatique, un art que je considère comme la magie des temps modernes. Avide de connaissances, et toujours en quête de nouvelles compétences. Mon parcours en tant qu’étudiant m’a permis d’acquérir de solides bases en développement web, avec une soif insatiable de progresser. Mon objectif est d'apprendre sans cesse et de gravir les échelons en vue de devenir expert en ce domaine.
                        </p>
                    </div>
                    <div className="profil-info-text">
                        <label htmlFor="Nationnalite">Nationnalite: <a href="https://fr.wikipedia.org/wiki/C%C3%B4te_d%27Ivoire" target="_blank">Ivoirienne</a></label><br />
                        <label htmlFor="Email">Email: <a href="Mailto:aandrekoffi960@gmail.com">aandrekoffi960@gmail.com</a></label>
                    </div>
                    <div className="profil-info-text">
                        <center><button><a href="/AKA_CV.pdf" download="AKA_CV.pdf">Télécharger Cv</a></button></center>
                    </div>
                </div>
            </div>
        </section>
       
    
    )
}
export default Profil;
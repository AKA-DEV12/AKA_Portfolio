import React from "react";
import './Realisation.css'
import Wordpress from '../../assets/images/wordpress.png'
import ai from '../../assets/images/ai.png'

function Realisation() {
    return (
      <section id="realisation" className="compe-container">
            <center>
                <h2>REALI<span>SATION</span></h2>
            </center>
                <div className="compe-content">
                    <div className="compe">
                        <center>
                            <div className="compe-card">

                                <div className="compeIcon">
                                    <img src={Wordpress} alt="Blog" />
                                </div>
                                        <span><a href="#">Blog Creer Avec WordPress <br /> (Local)</a></span>
                                    
                            </div>   
                            <div className="compe-card">

                                <div className="compeIcon">
                                    <img src={ai} alt="video" />
                                </div>
                                        <span><a href="https://www.tiktok.com/@aracine775/video/7407072520483900704" target="_blank">Video Realiser Avec IA</a></span>
                                    
                            </div>   
                       </center>             
                    </div>
                
                </div>

      </section>
    )
}
export default Realisation;
import React from "react";
import './InfoC.css';
import laravel from '../../assets/images/Laravel.png';
import { Data1 } from "../data/Data";
import { Data2 } from "../data/Data";

function InfoCompetence() {
    
    return(
        <section id="competence" className="slide">
                <center><h2>COMPE<span>TENCE</span></h2></center>
    <div id="carouselExample" class="container carousel slide">
        <div class="carousel-inner">

            <div class="carousel-item slide-index active">
                <div class="row justify-content-center index">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <div class="card">
                            <div class="card-body">
                            <center><img src={laravel} height="120px" width="120px" className="rounded" alt="laravel" /></center>
                                <h5 class="card-title">Developpement Backend</h5>
                                <p class="card-text">Framework PHP pour la creation de site web Dynamique.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        {Data1.map((item)=>
        (
            <div class="carousel-item slide-index">
            
                <div class="row justify-content-center ">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <div class="card">
                            <div class="card-body">
                                <center>
                                    <img src={item.img1} width="100px" height="100px" alt={item.titre} />
                                    <img src={item.img2} width="100px" height="100px" alt={item.titre} />
                                    <img src={item.img3} width="100px" height="100px" alt={item.titre} />
                                    
                                </center>
                                <h5 class="card-title">{item.titre}</h5>
                                <p class="card-text">{item.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                

         </div>
        ))}
        {Data2.map((item)=>
        (
            <div class="carousel-item slide-index">
            
                <div class="row justify-content-center">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <div class="card">
                            <div class="card-body">
                                <center>
                                    <img src={item.img} width="120px" height="120px" alt={item.titre} />  
                                </center>
                                <h5 class="card-title">{item.titre}</h5>
                                <p class="card-text">{item.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                

         </div>
        ))}
        
     
        
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</section>
    )

}
export default InfoCompetence;
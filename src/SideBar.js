import React from "react";
import './SideBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SideBar = ({ key, selectedState, selectedCapital, selectedBiome, selectedFuso, selectedPopul }) => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className="container" >
            <div className="top">      
                <FontAwesomeIcon icon={faEarthAmericas} style={{ color: "#ffffff" }} size="2x" />
                <h1>Mapa</h1>
            </div>
            <div className="info">
                <div className="infochild">
                    <h5>Estado:</h5>
                    <p className="animate-text" data-aos="zoom-out">• {selectedState}</p>
                </div>
                <div className="infochild">
                    <h5>Capital:</h5>
                    <p className="animate-text" data-aos="zoom-out">• {selectedCapital}</p>
                </div>
                <div className="infochild">
                    <h5>Bioma:</h5>
                    <p className="animate-text" data-aos="zoom-out">• {selectedBiome}</p>
                </div>
                <div className="infochild">
                    <h5>Fuso-Horário:</h5>
                    <p className="animate-text" data-aos="zoom-out">• {selectedFuso}</p>
                </div>
                <div className="infochild">
                    <h5>Habitantes:</h5>
                    <p className="animate-text" data-aos="zoom-out">• {selectedPopul}</p>
                </div>
                <div className="pictures">
                    <h2> Fotos </h2>
                    <div className="picContainer"></div>
                </div>
            </div>
        </div>
    );
}


export default SideBar;
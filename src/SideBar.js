import React from "react";
import './SideBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

const SideBar = ({ selectedState, selectedCapital, selectedBiome, selectedFuso, selectedPopul }) => {
    return (
        <div className="container">
            <div className="top">      
            <FontAwesomeIcon icon={faEarthAmericas} style={{ color: "#ffffff", }} size="2x"/>
            <h1>Topo</h1>
            </div>
            <div className="info">
                <div className="infochild"><p>{selectedState}</p></div>
                <div className="infochild"><p>{selectedCapital}</p></div>
                <div className="infochild"><p>{selectedBiome}</p></div>
                <div className="infochild"><p>{selectedFuso}</p></div>
                <div className="infochild"><p>{selectedPopul}</p></div>
                <div className="pictures">
                    <h2> Fotos </h2>
                    <div className="picContainer"></div>
                </div>

            </div>
        </div>
    )
}

export default SideBar;
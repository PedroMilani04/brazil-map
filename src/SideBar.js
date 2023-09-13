import React, { useEffect, useState } from "react";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

const SideBar = ({ key, selectedState, selectedCapital, selectedBiome, selectedFuso, selectedPopul }) => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };
    return (
        <div className={`container ${isSidebarVisible ? "visible" : ""}`}>
            <div className={`top ${isSidebarVisible ? "visible" : ""}`}>
                
                <FontAwesomeIcon icon={faEarthAmericas} style={{ color: "#ffffff" }} size="2x" />
                <h1>Mapa</h1>
                <FontAwesomeIcon
                    icon={faBars}
                    style={{ color: "#ffffff", cursor: "pointer" }}
                    size="2x"
                    onClick={toggleSidebar}
                    className="barras"
                />
            </div>
            <div className={`info ${isSidebarVisible ? "visible" : ""}`}>
                <div className={`infochild ${isSidebarVisible ? "visible" : ""}`}>
                    <h5>Estado:</h5>
                    <p className="animate-text" data-aos="zoom-out">• {selectedState}</p>
                </div>
                <div className={`infochild ${isSidebarVisible ? "visible" : ""}`}>
                    <h5>Capital:</h5>
                    <p className="animate-text" data-aos="zoom-out">• {selectedCapital}</p>
                </div>
                <div className={`infochild ${isSidebarVisible ? "visible" : ""}`}>
                    <h5>Bioma:</h5>
                    <p className="animate-text" data-aos="zoom-out">• {selectedBiome}</p>
                </div>
                <div className={`infochild ${isSidebarVisible ? "visible" : ""}`}>
                    <h5>Fuso-Horário:</h5>
                    <p className="animate-text" data-aos="zoom-out">• {selectedFuso}</p>
                </div>
                <div className={`infochild ${isSidebarVisible ? "visible" : ""}`}>
                    <h5>Habitantes:</h5>
                    <p className="animate-text" data-aos="zoom-out">• {selectedPopul}</p>
                </div>
                <div className={`pictures ${isSidebarVisible ? "visible" : ""}`}>
                    <h2> Fotos </h2>
                    <div className={`picContainer ${isSidebarVisible ? "visible" : ""}`}></div>
                </div>
            </div>
        </div>
    );
}


export default SideBar;
import React, { useEffect, useState } from "react";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const SideBar = ({ key, selectedState, selectedCapital, selectedBiome, selectedFuso, selectedPopul, Img1, Img2 }) => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    const [carouselImages, setCarouselImages] = useState([
        Img1,
        Img2
    ]);
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
                    <h5 className={`h5c ${isSidebarVisible ? "visible" : ""}`}>Estado:</h5>
                    <p className={`pc ${isSidebarVisible ? "visible" : ""}`} data-aos="zoom-out">• {selectedState}</p>
                </div>
                <div className={`infochild ${isSidebarVisible ? "visible" : ""}`}>
                    <h5 className={`h5c ${isSidebarVisible ? "visible" : ""}`}>Capital:</h5>
                    <p className={`pc ${isSidebarVisible ? "visible" : ""}`} data-aos="zoom-out">• {selectedCapital}</p>
                </div>
                <div className={`infochild ${isSidebarVisible ? "visible" : ""}`}>
                    <h5 className={`h5c ${isSidebarVisible ? "visible" : ""}`}>Bioma:</h5>
                    <p className={`pc ${isSidebarVisible ? "visible" : ""}`} data-aos="zoom-out">• {selectedBiome}</p>
                </div>
                <div className={`infochild ${isSidebarVisible ? "visible" : ""}`}>
                    <h5 className={`h5c ${isSidebarVisible ? "visible" : ""}`}>Fuso-Horário:</h5>
                    <p className={`pc ${isSidebarVisible ? "visible" : ""}`} data-aos="zoom-out">• {selectedFuso}</p>
                </div>
                <div className={`infochild ${isSidebarVisible ? "visible" : ""}`}>
                    <h5 className={`h5c ${isSidebarVisible ? "visible" : ""}`}>Habitantes:</h5>
                    <p className={`pc ${isSidebarVisible ? "visible" : ""}`} data-aos="zoom-out">• {selectedPopul}</p>
                </div>
                <div className={`pictures ${isSidebarVisible ? 'visible' : ''}`}>
                    <h2 className={`h2c ${isSidebarVisible ? 'visible' : ''}`}> Fotos </h2>
                    <div className={`picContainer ${isSidebarVisible ? 'visible' : ''}`}>
                        <Carousel  className={`car ${isSidebarVisible ? 'visible' : ''}`} showThumbs={false}>
                            {carouselImages.map((imageUrl, index) => (
                                <div key={index}>
                                    <img src={imageUrl} alt={`Image ${index}`} className="imgcarousel"/>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>

            </div>
        </div>
    );
}


export default SideBar;
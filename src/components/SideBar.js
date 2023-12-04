import React, { useEffect, useState } from "react";
import "../styles/SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// SideBar começa recebendo as informações vindas do mapa como Props
const SideBar = ({ selectedState, selectedCapital, selectedBiome, selectedFuso, selectedPopul, Img1, Img2 }) => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const [isSidebarVisible, setSidebarVisible] = useState(false);

    // Muda a visibilidade da barra (função chamada com onClick no simbolo da barra)
    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    const [carouselImages, setCarouselImages] = useState([Img1, Img2]);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div className={`container ${isSidebarVisible ? "visible" : ""}`}> {/* Se o UseState declarado anteriormente for "visible", refletira no nome da classe*/}
            <div className={`top ${isSidebarVisible ? "visible" : ""}`}>
                <FontAwesomeIcon icon={faEarthAmericas} style={{ color: "#ffffff" }} size="2x" /> {/* Simbolo do font awesome */}
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
                    <p className={`pc ${isSidebarVisible ? "visible" : ""} green`} data-aos="zoom-out">• {selectedState}</p>
                </div>
                <div className={`infochild ${isSidebarVisible ? "visible" : ""}`}>
                    <h5 className={`h5c ${isSidebarVisible ? "visible" : ""}`}>Capital:</h5>
                    <p className={`pc ${isSidebarVisible ? "visible" : ""} blue`} data-aos="zoom-out">• {selectedCapital}</p>
                </div>
                <div className={`infochild ${isSidebarVisible ? "visible" : ""}`}>
                    <h5 className={`h5c ${isSidebarVisible ? "visible" : ""}`}>Bioma:</h5>
                    <p className={`pc ${isSidebarVisible ? "visible" : ""} yellow`} data-aos="zoom-out">• {selectedBiome}</p>
                </div>
                <div className={`infochild ${isSidebarVisible ? "visible" : ""}`}>
                    <h5 className={`h5c ${isSidebarVisible ? "visible" : ""}`}>Fuso-Horário:</h5>
                    <p className={`pc ${isSidebarVisible ? "visible" : ""} red`} data-aos="zoom-out">• {selectedFuso}</p>
                </div>
                <div className={`infochild ${isSidebarVisible ? "visible" : ""}`}>
                    <h5 className={`h5c ${isSidebarVisible ? "visible" : ""}`}>Habitantes:</h5>
                    <p className={`pc ${isSidebarVisible ? "visible" : ""} purple`} data-aos="zoom-out">• {selectedPopul}</p>
                </div>
                <div className={`pictures ${isSidebarVisible ? 'visible' : ''}`}>
                    <h2 className={`h2c ${isSidebarVisible ? 'visible' : ''}`}> Fotos </h2>
                    <div className={`picContainer ${isSidebarVisible ? 'visible' : ''}`}>
                        <Carousel responsive={responsive} className={`carrouself ${isSidebarVisible ? 'visible' : ''}`}>
                            {carouselImages.map((imageUrl, index) => (
                                <div key={index}>
                                    <img src={imageUrl} alt={`Image ${index}`} className="imgcarousel" />
                                </div>
                            ))} {/* Carrosel de imagens da biblioteca react-multi-carousel */}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;

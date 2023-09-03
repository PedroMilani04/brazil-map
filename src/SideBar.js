import React from "react";
import './SideBar.css';

const SideBar = () => {
    return (
        <div className="container">
            <div className="top">Topo</div>
            <div className="info">
                <div className="infochild">Nome</div>
                <div className="infochild">Capital</div>
                <div className="infochild">Bioma</div>
                <div className="infochild">Temperatura</div>
                <div className="infochild">Algo</div>
                <div className="pictures">
                    <h2> Fotos </h2>
                    <div className="picContainer"></div>
                </div>

            </div>
        </div>
    )
}

export default SideBar;
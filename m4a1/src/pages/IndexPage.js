import React from "react";

const IndexPage = (props) => {
    return(
        <main className="holder">
            <div className="homeimg">
            <img src="imagenes/NFT .jpg" alt=""/>
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>ENTRAN AL MUNDO NFT DE LA MANO DE CRIPTOWORD Y OPENSEA</h2>
                </div>
                <video src="imagenes/cryptocard.mp4" autoplay muted loop></video>
                <div className="testimonios">
                    <h2>CRYPTOCARD NUESTRO PROXIMO PROYECTO</h2>
                </div>
            </div>
        </main>
    );
}
export default IndexPage;
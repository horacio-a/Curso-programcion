import Carousel from 'react-bootstrap/Carousel';
import "../styles/pages/estilo.css"

function Carouse() {
    return (
        <Carousel>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src="imagenes/NFT .jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>ENTRAN AL MUNDO NFT DE LA MANO DE CRIPTOWORD Y OPENSEA</h3>
                    <a href="NFT.html"> <button type="button" class="btn btn-outline-light btn-lg">Acceder</button></a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="imagenes/NFT2.jpg"
                    alt="First slide"
                />

                <Carousel.Caption>
                    <h3>ENTRAN AL MUNDO NFT DE LA MANO DE CRIPTOWORD Y OPENSEA</h3>
                    <a href="NFT.html"> <button type="button" class="btn btn-outline-light btn-lg">Acceder</button></a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="imagenes/NFT 3.jpeg"
                    alt="First slide"
                />

                <Carousel.Caption>
                    <h3>ENTRAN AL MUNDO NFT DE LA MANO DE CRIPTOWORD Y OPENSEA</h3>
                    <a href="NFT.html"> <button type="button" class="btn btn-outline-light btn-lg">Acceder</button></a>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carouse;
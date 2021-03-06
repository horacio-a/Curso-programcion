import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../styles/pages/estilo.css"


function Footer() {
    return (
        <footer>
            <Container fluid>
                <div className='barraseparar'></div>
                <Row>
                    <Col xs={3}></Col>
                    <Col>
                        <div class='icons'>
                            <a href="https://www.facebook.com">
                                <div class='icon-color'>

                                    <i class="fa-brands fa-facebook-square" ></i></div>
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div class='icons'>
                            <a href="https://twitter.com/home">
                                <div class='icon-color'>
                                    <i class="fab fa-twitter"></i>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div class='icons'>
                            <a href="https://www.google.com">
                                <div class='icon-color'>
                                    <i class="fab fa-google"></i>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div class='icons'>
                            <a href="https://www.instagram.com">
                                <div class='icon-color'>
                                    <i class="fa-brands fa-instagram"></i>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div class='icons'>
                            <a href="https://linkedin.com/home">
                                <div class='icon-color'>
                                    <i class="fab fa-linkedin"></i>
                                </div>

                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div class='icons'>
                            <a href="https://www.github.com">
                                <div class='icon-color'>

                                    <i class="fab fa-github"></i>
                                </div>

                            </a>
                        </div>
                    </Col>
                    <Col xs={3}></Col>
                </Row>
            </Container>
            <div className='barraseparar'></div>
            <div class='footer'>
                <Container>
                    <Row>
                        <Col>
                            <h6 class="text-uppercase fw-bold mb-4">
                                <i class="fas fa-gem me-3"></i>Criptoword
                            </h6>
                            <p class='footer'>
                                Somos una empresa dedicada al mundo crypto.
                                Traemos soluciones para las personas que no est??n dentro de este maravilloso mundo,
                                facilitando el staking y la adquisici??n de NFTs y estableciendo los mejores precio en la
                                miner??a con los rig??s y asic??s

                            </p>
                        </Col>
                        <Col><h6 class="text-uppercase fw-bold mb-4">
                            Nuestros servicios
                        </h6>
                            <p>
                                <a href="/Mineria" class='footer' >Mineria</a>
                            </p>
                            <p>
                                <a href="/Staking" class='footer' >Staking</a>
                            </p>
                            <p>
                                <a href="/NFT" class='footer'>NFT</a>
                            </p>
                            <p>
                                <a href="/Criptocard" class='footer'>Cryptocard</a>
                            </p>
                        </Col>
                        <Col>
                            <h6 class="text-uppercase fw-bold mb-4">
                                FAQ
                            </h6>
                            <p>
                                <a href="/" class='footer'>Medio de pago</a>
                            </p>
                            <p>
                                <a href="/" class='footer'>Configuraciones</a>
                            </p>
                            <p>
                                <a href="/" class='footer'>Ayuda</a>
                            </p>

                        </Col>
                        <Col>
                            <h6 class="text-uppercase fw-bold mb-4">
                                Contacto
                            </h6>
                            <p><i class="fas fa-home me-3"></i>Neuquen, nqn 8324, AR</p>
                            <p>
                                <i class="fas fa-envelope me-3"></i>
                                Horaciomatiasalbornoz@gmail.com
                            </p>
                            <p><i class="fas fa-phone me-3"></i>+54 299 5------</p>
                            <p><i class="fas fa-print me-3"></i>+54 011 5------ </p>
                        </Col>

                    </Row>
                </Container>
            </div>
        </footer>
    );
}

export default Footer;